import React from "react";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import frameImage from "../assets/frame.png"
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm"
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
    return (
         <div className="flex w-11/12 max-w-[1160px]  mx-auto gap-y-0 gap-x-12 justify-between text-richblack-100">

            <div className="w-11/12 max-w-[450px]">

                <h1
                    className="text-richblack-5  font-semibold text-[1.875rem] leading-[2.375rem]">
                    {title}</h1>

                <p
                    className="text-[1.125rem] mt-4 leading-[1.625rem]">
                    <span className="text-richblack-100">{desc1}</span>
                    <br></br>
                    <span className="text-blue-100 italic">{desc2}</span>

                </p>


                {formType === "signup" ?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn} />)
                    : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}


                <div className="flex w-full items-center gap-x-2 my-4">
                    <div className="h-[1px] w-full bg-richblack-700"></div>
                    <p className="text-richblack-700 font-medium">OR</p>
                    <div className="h-[1px] w-full bg-richblack-700"></div>
                </div>

                <button
                    type="button"
                    className="flex w-full py-0 items-center justify-center gap-2 rounded-md border border-richblack-700 bg-richblack-800 py-2 text-richblack-100 transition-all duration-200 hover:bg-richblack-700"
                >
                    <FcGoogle className="w-[20px] h-[20px] " />

                    <p>Sign in with Google</p>
                </button>


            </div>



            <div className="relative w-[11/12] max-w-[450px] mt-[100px]">
                <img
                    src={frameImage}
                    width={558}
                    alt="Pattern"
                    height={504}
                    loading="lazy"></img>


                <img
                    className="absolute -top-4 right-4 "
                    src={image}
                    alt="Student"
                    width={558}
                    height={504}
                    loading="lazy"></img>
            </div>

        </div>






    )
}

export default Template 