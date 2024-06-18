import React from "react";
import Square from "./Square";
import './tictactoe.css';

function Board({ xIsNext, squares, onPlay }) {//xTsNext:指示下一個下棋的玩家是 "X" 還是 "O"
    const handleClick = (i) => {//square:每個元素對應棋盤上的一個方格並儲存其值
        if (calculateWinner(squares) || squares[i]) {//onPlay:當某個方格被點擊時會被調用，並將更新後的 squares 陣列傳遞回去。
            return;
          }
        const nextSquares = squares.slice()
        if (xIsNext) {
            nextSquares[i] = "X";
        }
        else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    };
    const calculateWinner = (square) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for(let i=0;i<lines.length-1;i++){
            const[a,b,c]=lines[i];
            if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]){
                return square[a];
            }
        }
        return null;
    };

    const winner = calculateWinner(squares);
    let status = winner
    ? `贏家: ${winner}`
    : `下一個玩家: ${xIsNext ? "X" : "O"}`;
    return (
        <>
            <div className="status">{status}</div>
            <div>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>

    );

}
export default Board;