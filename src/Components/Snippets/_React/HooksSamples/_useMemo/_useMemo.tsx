import React, { useMemo, useState } from "react";
import style from './_useMemo.module.css';

//--- How to use in state. Need to find a place where I can place this interface to make it visisble from the parent component
//--- Leave props: any for now
//--- P.S. Probably shoud use destructurization
//--- const _useMemo = (props: any) => {

// IF ANY OF THE STATES OR PROPS HAD CHANGED, THE REACT WILL RE-RENDER THE ENTIRE COMPONENT!
// Therefore, it can leads to unnecessary state recalculating, especially in the cases when these calculations are complex
// useMemo can be used for memoization of the data
// Callback provided to useMemo will be executed each render time only if any of the provided dependencies changed
// In case of lack of dependencies array, the callback will be executed each time component re-rendered
// In case of empty dependencies array, the callback will be executed only once

// useMemo runs DURING the render of the component and not before, while useEffect is called AFTER each render!

const _useMemo = (props: any) => {

    const [state_1, setState_1] = useState(0);
    const [state_2, setState_2] = useState(0);

    // Executed only once on component's mount
    const onceValue = useMemo(
        () => state_1, []
    );

    // Executed each render
    // In TypeScript I forced to provide "undefined", as I can't leave useMemo without second parameter
    const eachRenderValue = useMemo(
        () => { /*console.log("Each render")*/ }, undefined
    );

    // Executed only when 'state_1' dependency changed
    const dependencyChangedValue = useMemo(
        () => { /*console.log("State 1 changed");*/ return state_1 * 2}, [state_1]
    );

    return (
        <div className={style["_useMemo"]}>
            <h1>_useMemo</h1>
            <h2>State 1: {state_1}</h2>
            <h2>State 2: {state_2}</h2>
            <h2>{`Calculated once: ${onceValue}`}</h2>
            <h2>{`Each render: ${eachRenderValue}`}</h2>
            <h2>{`Dependendened on state 1: ${dependencyChangedValue}`}</h2>
            <button onClick={() => setState_1(state_1 + 1)}>Change state 1</button>
            <button onClick={() => setState_2(state_2 + 1)}>Change state 2</button>
        </div>
    );
}

export default _useMemo;
