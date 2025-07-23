import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import useGifs from "../hooks/useGifs";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

    // const [gif, setGif] = useState('');
    // const [loading, setLoadiing] = useState(false)
    const [tag, setTag] = useState('');

    // async function fetchData() {
    //     setLoadiing(true)

    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const { data } = await axios.get(url)
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);

    //     setLoadiing(false)
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])

    const {gif, fetchData , loading } = useGifs(tag);
   

    function clickHandler() {
        fetchData(tag);
    }


    return (
        <div className="w-1/2 bg-blue-500  rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px]">

            <h1 className="mt-[15px] text-2xl uppercase underline font-bold
                ">Random {tag} Gif</h1>

            {
                loading ? (<Spinner />) : (<img src={gif} width={450} />
                )
            }

            <input
                className="w-10/12 text-lg py-2 mb-[20px]
             text-center rounded-lg opacity-70 "
                onChange={(event) => { setTag(event.target.value) }}
                value={tag}>

            </input>


            <button
                className="w-10/12 bg-white text-lg py-2 mb-[3px]  rounded-lg opacity-70"
                onClick={clickHandler}>
                Generate</button>
        </div>
    )
}

export default Tag;