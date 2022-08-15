import React from "react";
import { BiShow, BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import useFetch from "../apiData/useFetch";
const Table = ({ start, end }) => {
    const { data } = useFetch();
    const display = data?.slice(start, end);
    return (
        <>
            <table className="w-full border-collapse">
                <thead className="capitalize text-left ">
                    <th>id number</th>
                    <th>first name</th>
                    <th>surname</th>
                    <th>email</th>
                    <th>gender</th>
                    <th>address</th>
                    <th>phone number</th>
                    <th className="text-center">action</th>
                </thead>
                <tbody className="text-[#5C5657]">
                    {display?.map((item) => {
                        return (
                            <tr>
                                <td>{item.id_number}</td>
                                <td>{item.first_name}</td>
                                <td>{item.surname}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                                <td>{item.address}</td>
                                <td>{item.phone_number}</td>
                                <td className="space-x-1 flex ">
                                    <button className="bg-[#00C0EF] p-1 rounded text-white ">
                                        <BiShow />
                                    </button>
                                    <button className="bg-[#3C8DBC] p-1 rounded text-white">
                                        <BiEdit />
                                    </button>
                                    <button className="bg-[#DD4B39] p-1 rounded text-white">
                                        {" "}
                                        <AiOutlineDelete />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Table;
