import React, { useState} from "react";
import s from "./ProductAdder.module.css"


export const ProductAdder = () => {
    const [add, setAdd] = useState(1)
    const handlePlus = () =>{
        setAdd((prev)=>prev + 1)
    };
    const handleMinuse = () => {
        setAdd((prev)=>prev - 1)
    }
    return(
        <div className={s.contain}>
            <button onClick={handleMinuse} className={s.add}>-</button>
            <p className={s.number}>{add}</p>   
            <button onClick={handlePlus} className={s.add}>+</button>
        </div>
        
    )
}