import React, {useState} from "react";
import "./MyCalculator.css"
import MyDisplay from "./MyDisplay";
import MyButton from "./MyButton";

function myCalculator(){
    const mouseClick=(value)=>{
        const [result,setResult]=useState("0");
        const handleClick=(value)=>{

        }
    }
    return(
        <div className="calculator">
            <MyDisplay result={result}/>
            <MyButton buttonClicked={handleClick}/>
        </div>
        );
}
export default myCalculator;