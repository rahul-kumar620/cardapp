import React, { useState, useEffect } from "react";

// import Img from".././Assets/pasta.jpeg"

import { PiSealPercentFill } from "react-icons/pi";
import { IoStar } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { PiHeartStraightThin } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { BiSolidDiscount } from "react-icons/bi";
// import { TbDots } from "react-icons/tb";
//import { DiResponsive } from "react-icons/di";

function Card() {
  
  const [isliked, setIsLiked] =useState(false);

  const images = [
    {
      image: "Assets/pasta.jpeg",
    },
    {
      image: "Assets/pasta2.jpeg",
    },
    {
      image: "Assets/pasta3.jpeg",
    },
  ];

  const handleLike = () =>{
    setIsLiked(!isliked);
  }

  return (
    <>
      <div className=" relativemax-w-screen-sm px-6  bg-white">
        <div>
          {/* <FcClock className="absolute mt-6 ml-7 flex " /> */}
          <FaClock className="absolute mt-6 ml-7 flex " style={{color: 'orange'}} />
          {
            !isliked
            ?<PiHeartStraightThin className="absolute mt-3 ml-[79%] mt flex size-8 " style={{color: 'orange'}} onClick={handleLike}/>
            :<FaHeart className="absolute mt-3 ml-[79%] mt flex size-8 " style={{color: 'orange'}} onClick={handleLike}/>
          }
          <p className="absolute mt-5 ml-12 text-white text-sm">30 min - 4 Kms</p>
          {/* <TbDots className="absolute mt-48 ml-44 text-4xl text-white" /> */}
          {/* <img src={Img} alt='Assets' className='rounded-3xl'></img> */}
           <img src="Assets/pasta.jpeg.png" className="rounded-3xl " alt="" /> 
         
        </div>

        <div className=" bg-slate-100 px-4 py-5 rounded-3xl  relative bottom-10 flex-row ">
          <div className="flex">
            <div className="font-bold text-xl mb-2">Hotal Natraj</div>
            <div className="flex text-white bg-green-500 p-1 px-2 h-6 ml-auto rounded-lg">
              <p className="-mt-1">4.5</p>
              <IoStar className="-mt-0.4" style={{color: 'white'}}/>
            </div>
          </div>
          <p className="text-gray-400 text-sm pb-2">
            North indian - Mocktails - Tandoori | ₹350 for one
          </p>
          {/* <p className="text-gray-300 border-dotted">
           
          </p> */}
          <div class="border border-dotted border-gray-400 "></div>
          <div className="flex ml-2 pt-2">
            <div>
              <BiSolidDiscount className="-ml-3" />
            </div>
            <div className="text-xs text-yellow-500 ml-1  ">
              Extra 20% OFF up to ₹50 
            </div>
             <div className="text-gray-400 -mt-1 ml-2">|</div>
            <div>
              <PiSealPercentFill className="text-black mx-5 ml-2" />
            </div>
            <div>
              <p className=" flex text-xs text-yellow-500 -ml-4 ">
                Flat ₹120OFF + ₹25Cashback
              </p>
            </div>
          </div>
        </div>
      </div>

      {images.map((Card) => {
        <div>{Card.image}</div>;
      })}
    </>
  );
}

export default Card;