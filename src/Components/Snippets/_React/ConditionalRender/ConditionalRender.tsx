import React, { useState } from "react";
import style from './ConditionalRender.module.css';

//--- How to use in state. Need to find a place where I can place this interface to make it visisble from the parent component
//--- Leave props: any for now

const ConditionalRender = ({shouldTextBeRendered}: any) => {
    return (
        <div className={style["conditional-render"]}>
            <h1>ConditionalRender</h1>

            {
                shouldTextBeRendered &&
                <h1>Text that was rendered by provided condition</h1>
            }
            
            {
                shouldTextBeRendered
                ? <h1>True condition</h1>
                : <h1>False condition</h1>
            }
            
      </div>
    );
}

export default ConditionalRender;
