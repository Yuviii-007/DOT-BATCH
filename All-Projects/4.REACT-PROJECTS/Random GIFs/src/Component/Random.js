import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import useGifs from "../hooks/useGifs";
// import useGifs from "../hooks/useGifs";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

   const {gif , fetchData , loading} = useGifs();


    function clickHandler() {
            fetchData();
    }


    return (
        <div className="w-1/2 bg-green-500  rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px]">

            <h1 className="mt-[15px] text-2xl uppercase underline font-bold
                ">A Random Gif</h1>

            {
                loading ? (<Spinner/>) : (  <img src={gif} width={450} />
)
            }

          
            <button
                className="w-10/12 bg-white text-lg py-2 mb-[20px] rounded-lg opacity-70"
                onClick={clickHandler}>
                Generate</button>
        </div>
    )
}

export default Random;