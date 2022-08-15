import React from "react";
import Dashboaard from "../pages/Dashboaard";
import Users from "../pages/Users";
import { Routes, Route } from "react-router-dom";

const PageContainer = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboaard />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </div>
    );
};

export default PageContainer;
