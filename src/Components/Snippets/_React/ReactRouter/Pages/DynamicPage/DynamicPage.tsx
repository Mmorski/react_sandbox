import React from "react";
import { useNavigate, useParams, useRoutes } from "react-router-dom";
import style from './DynamicPage.module.css';

const DynamicPage = () => {

    const params = useParams();
    const navigate = useNavigate();
    
    const goToPreviousPage = () => {
        // We can navigate forward as well as navigate backward by using negative numbers
        // Navigate 1 page back
        navigate(-1);
    }

    return (
        <div className={style["dynamic-page"]}>
            <h1>DynamicPage</h1>
            <h1>Integer value: {params.intValue} String value: {params.stringValue}</h1>
            <button onClick={goToPreviousPage}>Go back</button>
        </div>
    );
}

export default DynamicPage;
