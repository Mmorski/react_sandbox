import React, { useState } from "react";
import ChildComponent from "./ChildComponent/ChildComponent";
import { CommonContext } from "./Context/CommonContext";
import style from './_useContext.module.css';

// useContext can be used for passing the data from parent to nested (child) components 
// avoiding passing this data through the props and presumably high nesting levels.
// This data will be accessible for child components within 'Provider' element of corresponding context.
// Firstly, the context should be created using the createContext() function with initial context state.
// Secondly, all the components that should have access to this context must be placed within 'Provider' element of this context.
// Finally, child components can obtain the context data using the useContext() hook with corresponding context.
// Many contexts can be in use simultaneously!

const _useContext = () => {

    const [value, setValue] = useState(0);

    return (
        <div className={style["_useContext"]}>
            <h1>_useContext</h1>
            <h1>Value: {value}</h1>

            {/* 'Provider' element of 'CommonContext' context */}
            <CommonContext.Provider value={{
                value: value,
                setValue: setValue
            }}>
                <ChildComponent/>
            </CommonContext.Provider>
        </div>
    );
}

export default _useContext;
