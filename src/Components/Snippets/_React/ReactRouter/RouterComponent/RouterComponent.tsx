import React from "react";
import { BrowserRouter, Navigate, Route, Routes, useRoutes } from "react-router-dom";
import DynamicNavigation from "../Pages/DynamicNavigation/DynamicNavigation";
import DynamicPage from "../Pages/DynamicPage/DynamicPage";
import MainPage from "../Pages/MainPage/MainPage";
import Navbar from "../Navbar/Navbar";
import NotFound from "../Pages/NotFound/NotFound";
import Page_1 from "../Pages/Page_1/Page_1";
import Page_2 from "../Pages/Page_2/Page_2";
import Page_3 from "../Pages/Page_3/Page_3";
import style from './RouterComponent.module.css';
import { publicRoutes } from "../Router/Routes";

// In the latest version of React, 'Switch' is replaced with 'Routes' and 'component' is replaced with 'element'
const RouterComponent = () => {
    return (
        <div className={style["router-component"]}>
            <h1>RouterComponent</h1>
            <BrowserRouter>
                <Navbar/>
                <RouterWithMap/>
                {/* <RouterWithHook/> */}
            </BrowserRouter>
        </div>
    );
}

// First version of router with map() method
const RouterWithMap = () => {
    return (
        <Routes>
            {publicRoutes.map(route => 
                <Route path={route.path} element={route.element} key={route.path}/>
            )}
        </Routes>
    );
}

// Second version with useRoutes hook
const RouterWithHook = () => {

    // useRoutes() may be used only in the context of a <BrowserRouter> component
    const routes = useRoutes(publicRoutes);

    return (
        routes
    );
}

export default RouterComponent;
