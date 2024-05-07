import { useState } from "react";
import data from "./data";
function Accordian(){

    const [selected, setSelected] = useState(null);

    function handleSingle(getData){
       setSelected(getData===selected? null : getData)
    }


    return(
        <>
        <div className="flex flex-col items-center h-screen bg-slate-200" >
            <h1 className="text-3xl font-bold my-4">Accordian</h1>
            <div className="">
              {data&&data.length > 0 ? (data.map((dataItem) =>(
                <div className="bg-slate-400 m-4 w-96 p-2 rounded-md">
                     <div onClick={()=>handleSingle(dataItem.id)} className="flex flex-row justify-between">
                    <h2 className="text-lg">{dataItem.question}</h2>
                    <span className="cursor-pointer">+</span>
                </div>
                { 
                    selected===dataItem.id ? <div className="pt-4">{dataItem.answer}</div> 
                    : null
                }
                </div>
               
               
               
              ))) : (<div>No data found!</div>)}
            </div>
        </div>

        </>
    )
}

export default Accordian;