import axios from "axios";
import React, { useState } from "react";
import { GrMail } from "react-icons/gr";
import { IoLockClosed } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/UserStore";
import BarLoader from "react-spinners/BarLoader";
const axiosClient = axios.create({
    baseURL: "https://forestrybackend.herokuapp.com/",
});
const SignIn = () => {
    const navigate = useNavigate();
    const saveUser = useUserStore((state) => state.currentUser);
    const [isLoading, setisLoading] = useState(false);
    const [user, setuser] = useState({
        name: "",
        password: "",
    });

    const handleForm = (e) => {
        setuser((user) => ({ ...user, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setisLoading(true);
        try {
            const { data } = await axiosClient.post("/api/login", {
                ...user,
            });

            if (data.name) {
                setisLoading(false);
                saveUser(data);
                navigate("/admin", { replace: true });
            }
        } catch (error) {
            console.log(error);
            alert(error.message);
            setisLoading(false);
        }
    };

    return (
        <div className="signin h-screen p-24">
            <section className="bg-white w-[60%] h-[450px] mx-auto rounded-md py-12 px-10  flex items-center space-x-10 ">
                <div className="">
                    <img
                        src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"
                        alt=""
                    />
                </div>
                <form className="space-y-7 " onSubmit={handleSubmit}>
                    <h1 className="font-black text-2xl capitalize text-center">
                        Admin login
                    </h1>
                    <div className="bg-[#E6E6E6] rounded-full w-60 pl-4 flex items-center">
                        <GrMail />
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            className="w-full h-full bg-transparent p-2 outline-none"
                            onChange={handleForm}
                        />
                    </div>
                    <div className="bg-[#E6E6E6] rounded-full w-60 pl-4 flex items-center">
                        <IoLockClosed />
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="w-full h-full bg-transparent p-2 outline-none"
                            onChange={handleForm}
                        />
                    </div>
                    <div className="rounded-full  bg-green-500">
                        <button
                            type="submit"
                            className="w-full  text-white uppercase  font-bold  p-2  "
                        >
                            login{" "}
                        </button>
                    </div>

                    <div className="w-fit mx-auto ">
                        {isLoading && <BarLoader width={100} />}
                    </div>
                </form>
            </section>
        </div>
    );
};

export default SignIn;
