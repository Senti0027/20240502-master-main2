import React, { useState } from "react";
import "./MyCalculator.css"
import MyDisplay from "./MyDisplay";
import MyButton from "./MyButton";

function MyCalculator() {
    const [result, setResult] = useState("0");
    const handleClick = (value) => {
        switch (value) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                if (result == "0") {
                    setResult(value);

                }
                else {
                    setResult(result + value);
                }
                break;
            case ".":
            case "+":
            case "-":
            case "*":
            case "/":
                if (result != "") {
                    setResult(result + value);

                }
                break;
            case "=":
                if (result != "") {

                    setResult(eval(result).toString());
                }
                break;
            case "c":
                if (result != "") {

                    setResult("");
                }
                break;
            case "+/-":
                if (result != "") {

                    setResult(parseInt(result, 10) * -1);
                }
                break;
            case "%":
                if (result != "") {

                    setResult(parseInt(result, 10) / 100);
                }
                break;
            default:
                break;
        }
    };

    return (
        <div className="calculator">
            <h1>計算結果</h1>
            <MyDisplay result={result} />
            <MyButton buttonClicked={handleClick} />
        </div>
    );
}
export default MyCalculator;