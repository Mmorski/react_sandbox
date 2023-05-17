import { Navigate } from "react-router-dom";
import DynamicNavigation from "../Pages/DynamicNavigation/DynamicNavigation"
import DynamicPage from "../Pages/DynamicPage/DynamicPage"
import MainPage from "../Pages/MainPage/MainPage"
import NotFound from "../Pages/NotFound/NotFound"
import Page_1 from "../Pages/Page_1/Page_1"
import Page_2 from "../Pages/Page_2/Page_2"
import Page_3 from "../Pages/Page_3/Page_3"


export const publicRoutes = [
    {path: "/", element: <MainPage/>},
    {path: "/page-1", element: <Page_1/>},
    {path: "/page-2", element: <Page_2/>},
    {path: "/page-3", element: <Page_3/>},
    {path: "/dynamic-navigation", element: <DynamicNavigation/>},
    {path: "/dynamic-navigation/dynamicRoute/:intValue/:stringValue", element: <DynamicPage/>},

    // Navigate to specified element if found no route matches (URL will NOT be changed)
    // {path: "/*", element: <NotFound/>},

    // Navigate (redirect) to specified element if found no route matches (URL will be changed)
    {path: "/*", element: <Navigate to="/page-1" replace={false}/>}
]

export const privateRoutes = {
    // Private routes
}
