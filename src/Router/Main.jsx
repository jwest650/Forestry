import React from "react";
import Header from "../components/Header";
import PageContainer from "../components/PageContainer";
import Sidebar from "../components/Sidebar";
import { Routes, Route } from "react-router-dom";

const Main = () => {
    return (
        <main className="flex h-screen overflow-hidden">
            <Sidebar />

            <section className="flex-1">
                <Header />
                <Routes>
                    <Route path="/*" element={<PageContainer />} />
                </Routes>
            </section>
        </main>
    );
};

export default Main;
