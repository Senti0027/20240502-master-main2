import React from 'react';

function MyDisplay(props) {
    return (<div className='display'>{props.result}</div>);//"result"是用於傳遞結果或資料的 props 名稱，給MyDisplay
}
export default MyDisplay;