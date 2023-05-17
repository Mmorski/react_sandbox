import React, { useState } from "react";
import style from './ControlledInput.module.css';

const ControlledInput = () => {

    const [value, setValue] = useState("Input text");

    return (
        <div className={style["controlled-input"]}>
            <h1>ControlledInput</h1>
            <h1>Value: {value}</h1>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    );
}

export default ControlledInput;
