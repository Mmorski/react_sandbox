import React from "react";
import { Link } from "react-router-dom";
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={style["navbar"]}>
            <h1>Navbar</h1>
            <Link to="/page-1">Page 1</Link>
            <Link to="/page-2">Page 2</Link>
            <Link to="/page-3">Page 3</Link>
            <Link to="/dynamic-navigation">Dynamic Navigation</Link>
        </div>
    );
}

export default Navbar;
