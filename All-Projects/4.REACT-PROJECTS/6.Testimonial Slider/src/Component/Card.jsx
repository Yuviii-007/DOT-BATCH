import React from "react";
// import reviews from "../data";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Card = (props) => {
    let reviews = props.review;


       if (!reviews) {
        return <div className="text-center text-red-500">No review data found.</div>;
    }


    return (
        <div className="flex flex-col md:relative">

            <div className='absolute top-[-7rem] z-[10] mx-auto'>
                <img
                    className="aspect-square rounded-full w-[140px] h-[140px] z-[35] className='absolute top-[-7rem] z-[10] mx-auto'"
                    src={reviews.image}></img>
                <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px]
                z-[-10] left-[10px]"></div>
            </div>


            <div className="text-center mt-7">
                <p className="font-bold tracking-wider text-2xl capitalize">{reviews.name}</p>
                <p className="uppercase text-sm text-violet-400" >{reviews.job}</p>
            </div>


            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft />
            </div>

            <div className="text-center mt-4 text-slate-500">
                {reviews.text}
            </div>

            <div className="text-violet-400 mx-auto mt-5">

                <FaQuoteRight />
            </div>




        </div>
    )
}
export default Card