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
            <h1>計算結果</h1>
            <MyDisplay result={result}/>
            <MyButton buttonClicked={handleClick}/>
        </div>
        );
}
export default myCalculator;