import React from 'react'
import MenuItem from "./MenuItem";
import * as fa from "@fortawesome/free-solid-svg-icons";

let menuItem = [
    {title: 'Dashboard', icon: fa.faTachometerAlt, url: "/"},
    {title: 'Reports', icon: fa.faFileAlt, url: "/"},
    {title: 'Products', icon: fa.faShoppingCart, url: "/products"},
    {title: 'Accounts', icon: fa.faUser, url: "/"},
    {title: 'Settings', icon: fa.faCog, url: "/"},
];

const renderItem = function (idx, title, icon, url) {
    return <MenuItem key={idx} title={title} icon={icon} url={url}/>
};

export default () => {
    return (
        <ul className="navbar-nav mx-auto h-100">
            {menuItem.map((m, i) => renderItem(i, m.title, m.icon, m.url))}
        </ul>
    )
}
