import React from 'react';
import { NavLink } from 'react-router-dom';

const navList = [
    { name: "Home", path: "/", exact: true },
    { name: "Tasks", path: "/tasks" },
    { name: "Notes", path: "/notes" }
]

const Navigation = () => {
    const menu = navList.map(element => (
        <div key={element.name}>
            <NavLink to={element.path} exact={element.exact ? element.exact : false}>{element.name}</NavLink>
        </div>
    ))
    return (
        <nav className="mainMenu">
            {menu}
        </nav>
    );
}

export default Navigation;