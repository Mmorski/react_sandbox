import React, { useContext } from "react";
import { CommonContext } from "../Context/CommonContext";
import style from './ChildComponent.module.css';

const ChildComponent = () => {

    // Get data from 'CommonContext' context
    const {value, setValue} = useContext(CommonContext);

    const increment = () => {
        setValue(value + 1);
    }

    return (
        <div className={style["child-component"]}>
            <h1>ChildComponent</h1>
            <h1>Value: {value}</h1>
            <button onClick={increment}>Increment value</button>
        </div>
    );
}

export default ChildComponent;
