import React from "react";
import { AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import useUserStore from "../store/UserStore";
import DashIcon from "./DashIcon";
const Sidebar = () => {
    const user = useUserStore((state) => state.user);

    return (
        <div className="h-screen bg-[#1E282C] text-white w-[15%]">
            <section>
                <div className="bg-[#3C8DBC]  text-xl p-[9px] text-center">
                    <h1>Forestry Admin</h1>
                </div>
                <div className="flex  items-center bg-[#222D32] py-2">
                    <img
                        src="https://cdn-icons.flaticon.com/png/512/3146/premium/3146501.png?token=exp=1660221893~hmac=830f1a95b131086cc7278beb42d10f69"
                        alt=""
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="ml-3 capitalize leading-5 pt-1">
                        <p>{user?.name || "admin"}</p>
                        <div className="bg-green-500 inline-block rounded-full w-[7px] h-[7px] mr-2" />
                        <small>online</small>
                    </div>
                </div>

                <main className=" text-gray-400  ">
                    <DashIcon
                        icon={<AiOutlineDashboard />}
                        title={"dashboard"}
                        path={"/admin/"}
                    />
                    <DashIcon
                        icon={<AiOutlineUser />}
                        title={"users"}
                        path={"/admin/users"}
                    />
                </main>
            </section>
        </div>
    );
};

export default Sidebar;
