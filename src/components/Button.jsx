import React from "react";

const Button = ({ title, border, active, click }) => {
    return (
        <div
            className={`${border ? "border-l border-gray-200 " : ""} ${
                active === title ? "bg-[#3C8DBC] text-white" : ""
            } px-2 p-1 `}
            onClick={() => click(title)}
        >
            <button className="capitalize w-full ">{title}</button>
        </div>
    );
};

export default Button;
