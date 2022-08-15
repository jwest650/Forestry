import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import { BiCircle } from "react-icons/bi";
const DashIcon = ({ icon, title, path, list }) => {
    const [active, setactive] = useState(false);
    const [click, setClick] = useState(false);

    const activeStyle = {
        backgroundColor: "#2C3B41",
        color: "white",
        borderLeft: "2px solid #3E96CA",
    };

    return (
        <div className="mb-1 ">
            <NavLink
                to={path}
                style={({ isActive }) => {
                    return isActive ? activeStyle : undefined;
                }}
                className="flex justify-between items-center py-2 px-2"
                onClick={() => setactive(!active)}
            >
                <div className="flex items-center ">
                    <button className="text-lg">{icon}</button>
                    <p className="capitalize ml-2">{title}</p>
                </div>

                {!active ? (
                    <IoIosArrowBack className="text-sm" />
                ) : (
                    <IoIosArrowDown className="text-sm" />
                )}
            </NavLink>
        </div>
    );
};

export default DashIcon;
