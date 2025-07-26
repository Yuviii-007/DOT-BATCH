import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from "react-router-dom";

function SignupForm({ setIsLoggedIn }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [accountType, setAccountType] = useState("student");

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Check Your Password");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created Successfully");

        const AccountData = {
            ...formData,
            accountType,
        };


        const finalData = {
            ...AccountData,
            accountType
        }
        console.log("Printing final account data");
        console.log(finalData);

        navigate("/dashboard");
    }

    return (
        <div className="mt-8 w-[11/12] max-w-[450px]   ">
            {/* Account Type Toggle */}
            <div className="flex bg-richblack-800 max-w-max rounded-full p-1 gap-x-1">
                <button
                    className={`${accountType === "student"
                        ? "bg-richblack-900 text-richblack-5"
                        : "bg-transparent text-richblack-200"
                        } py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("student")}
                    type="button"
                >
                    Student
                </button>

                <button
                    className={`${accountType === "instructor"
                        ? "bg-richblack-900 text-richblack-5"
                        : "bg-transparent text-richblack-200"
                        } py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("instructor")}
                    type="button"
                >
                    Instructor
                </button>
            </div>

            {/* Form */}
            <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6 ">
                <div className="flex gap-x-4 mt-4 ">
                    <label className="w-full">
                        <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
                            First Name <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
                            required
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            onChange={changeHandler}
                            value={formData.firstName}
                        />
                    </label>

                    <label className="w-full">
                        <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
                            Last Name <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
                            required
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={changeHandler}
                            value={formData.lastName}
                        />
                    </label>
                </div>

                <label className="w-full ">
                    <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
                        Email Address <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
                        required
                        type="email"
                        placeholder="Enter Email Address"
                        name="email"
                        onChange={changeHandler}
                        value={formData.email}
                    />
                </label>

                {/* Password Fields */}
                <div className="flex gap-x-4">
                    {/* Create Password Field */}
                    <label className="w-full relative">
                        <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
                            Create Password<sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
                            required
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Password"
                            name="password"
                            onChange={changeHandler}
                            value={formData.password}
                        />
                        <span
                            className="absolute top-[34px] sm:top-[38px] right-2 sm:right-3 z-10 cursor-pointer text-xl text-richblack-300"
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                    </label>

                    {/* Confirm Password Field */}
                    <label className="w-full relative">
                        <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
                            Confirm Password <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
                            required
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            onChange={changeHandler}
                            value={formData.confirmPassword}
                        />
                        <span
                            className="absolute top-[34px] sm:top-[38px] right-2 sm:right-3 z-10 cursor-pointer text-xl text-richblack-300"
                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                        >
                            {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                    </label>

                </div>

                <button className="bg-yellow-50 text-richblack-900 font-semibold
                    px-[12px] rounded-[8px] py-[8px] mt-6">
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default SignupForm;
