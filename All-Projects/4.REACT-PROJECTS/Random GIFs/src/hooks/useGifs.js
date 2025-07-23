import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;



const useGifs = (tag) => {

    const [gif, setGif] = useState('');
    const [loading, setLoadiing] = useState(false)

    async function fetchData(tag) {
        setLoadiing(true)

        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);

        setLoadiing(false)
    }

    useEffect(() => {
        fetchData();
    }, [])



    return {gif, loading, fetchData}


}
export default useGifs