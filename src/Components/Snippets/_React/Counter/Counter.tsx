import React, { useState } from "react";
import style from './Counter.module.css';

const Counter = () => {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }
    
    function decrement() {
        setCount(count - 1);
    }

    return (
        <div className={style["counter"]}>
            <h1>Counter</h1>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;
