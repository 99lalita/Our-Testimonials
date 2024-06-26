import React, { useState } from "react";
import Card from "./Card";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";


const Testimonial = (props) => {
    const[index,setIndex] = useState(0);
    let reviews = props.reviews;

    function leftshiftHandler() {
        if (index - 1 < 0) {
          setIndex(reviews.length - 1);
        } else {
          setIndex(index - 1);
        }
      }
    
      const rightshiftHandler = () => {
        if (index + 1 >= reviews.length) {
          setIndex(0);
        } else {
          setIndex(index + 1);
        }
      };
    
      function surpriseMeHandler() {
        let randIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randIndex);
      }

    return(
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
            <Card review = {reviews[index]}/>

            <div className="mt-10 text-purple-400 text-3xl gap-3 font-bold mx-auto">
                <button onClick = {leftshiftHandler}className="cursor-pointer hover:text-purple-500">
                    <FiChevronLeft/>
                </button>

                <button onClick = {rightshiftHandler} className="cursor-pointer hover:text-purple-500">
                    <FiChevronRight/>
                </button>
            </div>

            <div className="mt-6">
                <button onClick = {surpriseMeHandler} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">
                    Surprise Me
                </button>
            </div>

        </div>
    );
}

export default Testimonial;