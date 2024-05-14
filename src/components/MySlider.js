import { useState } from "react";//紀錄滑桿的值

function MySlider({onChange}) {
  const [value, setValue] = useState(128);
  const handChange = (e) => {
    setValue(e.target.value);
    if(onChange){
      onChange(e.target.value);
    }
  };
  return (
    <div>
      <input
        type="range"
        width="200"
        min="0"
        max="255"
        value={value}
        onChange={handChange}
      />
      <span>{value}</span>
    </div>
  );

}

export default MySlider;