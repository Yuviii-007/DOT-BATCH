import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import toast from "react-hot-toast";

const LoginForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);



    function changeHandler(event) {

        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))

    }


    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true)
        toast.success("Logged In")
        navigate("/dashboard")

    }

    return (
        <form
            className="flex flex-col w-full gap-y-4 mt-6"
            onSubmit={submitHandler}>

            <label className="w-full ">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address
                    <sup className="text-pink-200">*</sup>
                </p>
                <input
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                    required
                    type="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={changeHandler}
                    name="email"></input>
            </label>


            <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Password <sup className="text-pink-200">*</sup>
                </p>

                <input
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                    required
                    type={showPassword ? ("password") : ("text")}
                    placeholder="Enter Your Email"
                    value={formData.password}
                    onChange={changeHandler}
                    name="password"></input>


                <span onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-[38px] cursor-pointer ">
                    {showPassword ? (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)
                        : (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"  />)}
                </span>

                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                        Forgot Password
                    </p>
                </Link>
            </label>


             <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-semibold text-richblack-900">
            
                Sign Up
            </button>

        </form>
    )
}

export default LoginForm; 