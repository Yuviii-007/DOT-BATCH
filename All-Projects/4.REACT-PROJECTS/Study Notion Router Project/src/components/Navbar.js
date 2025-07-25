import React from "react";
import Logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn

    return (
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto" >

            <Link to="/" >
                <img src={Logo} alt="Logo" width={160} height={32} loading="Lazy"></img>
            </Link>


            <nav>
                <ul className="flex  gap-x-6 text-white">
                    <li >
                        <Link to="/"> Home</Link>
                    </li>

                    <li >
                        <Link to="/">About</Link>
                    </li>

                    <li >
                        <Link to="/">Contact</Link>
                    </li>
                </ul>

            </nav>



            {/* login - signup - dashboard - logout  */}


            <div className="flex items-center gap-x-4">

                {!isLoggedIn &&

                    <Link to="/Login">
                        <button className="bg-richblack-800 py-[8px] px-[12px]
                         border rounded-[8px] border-richblack-700
                         text-white" >Login</button>
                    </Link>
                }

                {!isLoggedIn &&
                    <Link to="/signup" >
                        <button className="bg-richblack-800 py-[8px] px-[12px]
                         border rounded-[8px] border-richblack-700
                         text-white">Sign Up</button>
                    </Link>
                }

                {isLoggedIn &&
                    <Link to="/">
                        <button
                        className="bg-richblack-800 py-[8px] px-[12px]
                         border rounded-[8px] border-richblack-700
                         text-white"
                            onClick={() => {
                                setIsLoggedIn(false)
                                toast.success("Logged Out")
                            }}>Log Out</button>
                    </Link>
                }

                {isLoggedIn &&
                    <Link to="/dashboard">
                        <button
                        className="bg-richblack-800 py-[8px] px-[12px]
                         border rounded-[8px] border-richblack-700
                         text-white">Dashboard</button>
                    </Link>
                }

            </div>


        </div>
    )

}

export default Navbar;