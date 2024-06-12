import React from 'react';
//顯示計算器的當前結果

function MyDisplay(props) {
    return (<div className='display'>{props.result}</div>);// 使用 props.result 顯示結果
}
export default MyDisplay;