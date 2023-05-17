import React, { useEffect, useState } from "react";
import style from './_useEffect.module.css';

// useEffect used for adding some functionality (effects) to the component related to component's state (Mount, Update, Unmount)
// It's analog of class methods - componentDidMount, componentDidUpdate, componentWillUnmount
// Mount - In case of empty dependencies array, the callback will be executed only once
// Update on demand - Callback provided to useState will be executed each render time only if any of the provided dependencies changed
// Update each render - In case of lack of dependencies array, the callback will be executed each time component re-rendered
// Unmount - actions that should be performed when the component is going to be unmount should be placed into the return expression

// useEffect is called AFTER each render while useMemo runs DURING the render of the component and not before!

const _useEffect = (props: any) => {

    const [count_1, setCount_1] = useState(0);
    const [count_2, setCount_2] = useState(0);

    const updateCount_1 = () => {
        setCount_1(count_1 + 1);
    }

    const updateCount_2 = () => {
        setCount_2(count_2 + 1);
    }

    // Executed only once on component's mount
    useEffect(() => {
        console.log("useEffect with empty dependencies array");
    }, []);

    // Executed each render
    useEffect(() => {
        console.log("useEffect each render");
    });

    // Executed only when 'count_1' dependency changed
    useEffect(() => {
        console.log("useEffect when dependency changed");
    }, [count_1]);

    // Executed each render, but return function will be executed
    // when component is going to be unmount. Usually it's before the next component's render.
    useEffect(() => {
        console.log("useEffect each render with return function");

        // Unmount function
        return () => {
            console.log("useEffect component is going to be unmount");
        }
    });

    return (
        <div className={style["_useEffect"]}>
            <h1>_useEffect</h1>
            <h2>Count 1: {count_1}</h2>
            <h2>Count 2: {count_2}</h2>
            <button onClick={updateCount_1}>Update count 1</button>
            <button onClick={updateCount_2}>Update count 2</button>
        </div>
    );
}

export default _useEffect;
