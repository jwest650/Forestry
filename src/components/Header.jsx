import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import useUserStore from "../store/UserStore";
const Header = () => {
    const user = useUserStore((state) => state.user);
    const remove = useUserStore((state) => state.removeUser);

    return (
        <nav className="bg-[#3C8DBC] ">
            <section className="flex justify-between items-center capitalize p-2">
                <HiOutlineMenu className="text-white text-xl" />
                <div className="flex items-center">
                    <img
                        src="https://cdn-icons.flaticon.com/png/512/3146/premium/3146501.png?token=exp=1660221893~hmac=830f1a95b131086cc7278beb42d10f69"
                        alt=""
                        className="rounded-full w-[30px] h-[30px] bg-gray-200 border-none object-cover"
                        onClick={remove}
                    />
                    <span className="text-white ml-2">{user?.name}</span>
                </div>
            </section>
        </nav>
    );
};

export default Header;
