import { useEffect, useState } from "react";
import data from "./data";
function Accordian(){

    const [selected, setSelected] = useState(null);
    const [multiple, setMultiplle] = useState([]);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [bgColor, setBgColor]=useState("#000000")
    const [color,setcolor]=useState("hex")


    function handleHexColor(){
        console.log("hex")
        let hexCode = "#";
        let hexArr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        for(let i=0; i<6; i++){
            hexCode+=hexArr[Math.floor(Math.random()*hexArr.length)];
        }
       
        console.log(hexCode)
        setBgColor(hexCode)
    }
    function handleRgbColor(){
      let r = Math.floor(Math.random()*256)
      let g = Math.floor(Math.random()*256)
      let b = Math.floor(Math.random()*256)

      setBgColor(`rgb(${r},${g},${b})`)
    }

    useEffect(()=>{
        if(color=='rgb') handleRgbColor()
            else handleHexColor()
    },[color])


    function handleSingle(getData){
       setSelected(getData===selected? null : getData)
    }
    function handleMultiSelection(getData){
       let copyData = [...multiple]
       let findIndex = copyData.indexOf(getData)
       if(findIndex===-1)copyData.push(getData)
       else copyData.splice(findIndex, 1)
    //    console.log(findIndex)
    setMultiplle(copyData)
    }


    return(
        <>
        <div style={{
            height:"100vh",
            background:bgColor,
        }}>
            <button onClick={()=>setcolor('hex')} className="bg-slate-200 m-4">Hex color</button>
            <button onClick={()=>setcolor('rgb')} className="bg-slate-200 m-4">RGB color</button>
            <button onClick={color == 'hex' ? handleHexColor : handleRgbColor} className="bg-slate-200 m-4">Generate color</button>
            <h1>{bgColor}</h1>
        <div className="flex flex-col items-center" >
            <h1 className="text-3xl font-bold my-4">Accordian</h1>
            <div className="">
                <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable Multi-Selection</button>
              {data&&data.length > 0 ? (data.map((dataItem) =>(
                <div className="bg-slate-600 m-4 w-96 p-2 rounded-md">
                     <div onClick={()=>enableMultiSelection ? handleMultiSelection(dataItem.id) : handleSingle(dataItem.id)} className="flex flex-row justify-between">
                    <h2 className="text-lg">{dataItem.question}</h2>
                    <span className="cursor-pointer">+</span>
                </div>
                { 
                    selected===dataItem.id || multiple.indexOf(dataItem.id)!==-1 ? <div className="pt-4">{dataItem.answer}</div> 
                    : null
                }
                </div>
               
               
               
              ))) : (<div>No data found!</div>)}
            </div>
        </div>
        </div>
      

        </>
    )
}

export default Accordian;