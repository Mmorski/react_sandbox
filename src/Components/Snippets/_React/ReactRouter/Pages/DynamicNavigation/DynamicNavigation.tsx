import { request } from "http";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './DynamicNavigation.module.css';

const DynamicNavigation = () => {

    const [intValue, setIntValue] = useState(""); // Will be parsed
    const [stringValue, setStringValue] = useState("");

    const navigate = useNavigate();

    const navigationRequest = () => {
        // navigation with '/' in the beginning will start from root
        // Example: '/dynamicRoute' leads to 'http://localhost:3000/dynamicRoute'
        // While the navigation without '/' will push it to the existing URL
        // Example: You are on 'http://localhost:3000/page-0', then 'dynamicRoute' leads to 'http://localhost:3000/page-0/dynamicRoute'
        navigate(`dynamicRoute/${Number(intValue)}/${stringValue}`);
    }

    return (
        <div className={style["dynamic-navigation"]}>
            <h1>DynamicNavigation</h1>
            <input
                type="text"
                value={intValue}
                onChange={event => setIntValue(event.target.value)}
                placeholder="Integer value"
            />
            <input
                type="text"
                value={stringValue}
                onChange={event => setStringValue(event.target.value)}
                placeholder="String value (required)"
            />
            <button onClick={navigationRequest}>Navigation Reguest</button>
        </div>
    );
}

export default DynamicNavigation;
