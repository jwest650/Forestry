import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import useFetch from "../apiData/useFetch";
import Button from "../components/Button";
import Table from "../components/Table";

const Users = () => {
    const [entries, setentries] = useState(10);

    const { data } = useFetch();
    console.log(data);
    const [activePage, setactivePage] = useState("");
    const [start, setstart] = useState(0);
    const [end, setend] = useState(entries);
    const handleEntries = (e) => {
        setentries(e.target.value);
        setend(e.target.value);
        setstart(entries - entries);
    };
    const handleActive = (name) => {
        if (name == "next" && end !== data.length) {
            setstart((prev) => prev + 1 * entries);
            setend((prev) => +prev + +entries);
        }
        if (name == "previous" && start) {
            setstart((prev) => prev - entries);
            setend((prev) => prev - 1 * entries);
            console.log("prev");
        }
        setactivePage(name);
    };

    return (
        <div className="bg-[#ECF0F5] h-screen px-5 py-3  space-y-2">
            <div className="flex justify-between items-center p-4 capitalize bg-white">
                <p>Users List</p>
                <button className="bg-green-600 capitalize text-white p-1 px-3 rounded flex items-center">
                    <AiOutlinePlus className="text-white" /> add new user
                </button>
            </div>
            <section className=" bg-white p-5 space-y-4 border-t-4 border-blue-400 max-h-[500px]">
                <div className="flex items-center justify-between">
                    <label>
                        Show{" "}
                        <select
                            name=""
                            id=""
                            className="border border-gray-200 bg-transparent p-1 px-2 rounded"
                        >
                            <option value="10" onClick={handleEntries}>
                                10
                            </option>
                            <option value="20" onClick={handleEntries}>
                                20
                            </option>
                            <option value="30" onClick={handleEntries}>
                                30
                            </option>
                            <option value="40" onClick={handleEntries}>
                                40
                            </option>
                        </select>{" "}
                        entries
                    </label>

                    <label htmlFor="">
                        Search:{" "}
                        <input
                            type="text"
                            className="border-2 rounded border-[#f6f6f6] outline-none pl-2"
                        />
                    </label>
                </div>
                <div className="overflow-y-auto max-h-[385px]">
                    <Table end={end} start={start} />
                </div>
                <div className="flex">
                    <small>
                        Showing 1 to {end} of {data?.length} entries
                    </small>
                    <footer className="w-fit ml-auto border-2 border-gray-200  rounded flex items-center  text-sm mb-1">
                        <Button
                            title="previous"
                            click={handleActive}
                            active={activePage}
                        />

                        <Button
                            title="next"
                            border
                            click={handleActive}
                            active={activePage}
                        />
                    </footer>
                </div>
            </section>
        </div>
    );
};

export default Users;
