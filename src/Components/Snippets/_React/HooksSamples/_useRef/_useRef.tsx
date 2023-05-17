import React, { useRef, useState } from "react";
import Counter from "../../Counter/Counter";
import style from './_useRef.module.css';

// useRef can be used for creating references that can be passed to DOM nodes
// Then these references can be used to access this DOM node
// Reference is updated AFTER render! That's why it's initially undefined on the first render, because the DOM is not created yet.

const _useRef = (props: any) => {

    const [count, setCount] = useState(0);

    const counterRef = useRef<HTMLHeadingElement>(null);

    const updateCount = () => {
        setCount(count + 1);
    }

    return (
        <div className={style["_useRef"]}>
            <h1>_useRef</h1>
            <h2 ref={counterRef}>Count: {count}</h2>
            <h2>Value that received using the useRef hook: {`${counterRef.current?.innerText}`}</h2>
            <button onClick={updateCount}>Change count</button>
        </div>
    );
}

export default _useRef;
