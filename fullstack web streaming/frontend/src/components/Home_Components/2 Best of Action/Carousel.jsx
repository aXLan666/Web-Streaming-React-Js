import Dis from "./images/Disney.png";
import Net from "./images/Netflix.png";
import HBO from "./images/HBOmax.png";
import Pix from "./images/Pixar.png";
import Mar from "./images/Marvel.png";
import Star from "./images/Starwars.png";
import Nation from "./images/NationalG.png";
import WarnerBros from "./images/WarnerBros.png";
import Universal from "./images/Universal.png";
import Columbia from "./images/ColumbiaSuportwearCompany.png";
import SonyPicture from "./images/SonyPicturesEntertainment.png";
import Paramount from "./images/Paramount.png";
import CenturyStudio from "./images/20thCenturyStudios.png";
import Legendary  from "./images/LegendaryEntertainment.png";
import LineCinema from "./images/NewLineCinema.png";
import MGM from "./images/MGM.png";

import React, { useRef, useState } from 'react';

function BestOfAction() {
  const scrollContainerRef = useRef(null);
  const [isScrollAtStart, setIsScrollAtStart] = useState(true);
  const [isScrollAtEnd, setIsScrollAtEnd] = useState(false);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    setIsScrollAtStart(container.scrollLeft === 0);
    setIsScrollAtEnd(
      container.scrollLeft + container.offsetWidth >= container.scrollWidth
    );
  };

  const scrollTo = (scrollOffset) => {
    const container = scrollContainerRef.current;
    container.scrollBy({ left: scrollOffset, behavior: 'smooth' });
  };

  const scrollToNext = () => {
    scrollTo(scrollContainerRef.current.offsetWidth);
  };

  const scrollToPrevious = () => {
    scrollTo(-scrollContainerRef.current.offsetWidth);
  };

  return (
    <div className="flex flex-col bg-black800 h-[128px] m-auto p-auto relative">
      <div
        className="flex overflow-x-scroll pb-10 hide-scroll-bar"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        <div className="flex flex-nowrap ml-7 mt-5">
          <div className="inline-block px-3">
            <div className="btn flex w-[177px] h-[88px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center">
              <img
                src={Dis} alt=""
                className="w-[108px] h-[44px] self-center"
              />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[177px] h-[88px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center">
              <img
                src={Net} alt=""
                className="w-[125px] h-[34px] self-center"
              />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[177px] h-[88px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center">
              <img
                src={HBO} alt=""
                className="w-[147px] h-[26px] self-center"
              />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[177px] h-[88px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center">
              <img
                src={Pix} alt=""
                className="w-[125px] h-[26px] self-center"
              />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[177px] h-[88px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center">
              <img
                src={Mar} alt=""
                className="w-[120px] h-[48px] self-center"
              />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[177px] h-[88px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300  justify-center">
              <img
                src={Star} alt=""
                className="w-[96px] h-[55px] self-center"
              />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[177px] h-[88px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300  justify-center">
              <img
                src={Nation} alt=""
                className="w-[112px] h-[56px] self-center"
              />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[177px] h-[88px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300  justify-center">
              <img
                src={WarnerBros} alt=""
                className="w-[77px] h-[78px] self-center"
              />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[177px] h-[88px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300  justify-center">
              <img
                src={Universal} alt=""
                className="w-[145px] h-[77px] self-center"
              />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[177px] h-[88px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300  justify-center">
              <img
                src={Columbia} alt=""
                className="w-[145px] h-[56px] self-center"
              />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[177px] h-[88px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300  justify-center">
              <img
                src={SonyPicture} alt=""
                className="w-[55px] h-[78px] self-center"
              />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[177px] h-[88px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300  justify-center">
              <img
                src={Paramount} alt=""
                className="w-[100px] h-[77px] self-center"
              />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[177px] h-[88px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300  justify-center">
              <img
                src={CenturyStudio} alt=""
                className="w-[155px] self-center"
              />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[177px] h-[88px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300  justify-center">
              <img
                src={Legendary} alt=""
                className="w-[125px] h-[79px] self-center"
              />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[177px] h-[88px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300  justify-center">
              <img
                src={LineCinema} alt=""
                className="w-[112px] h-[56px] self-center"
              />
            </div>
          </div>
          <div className=" inline-block px-3">
            <div className="btn flex w-[177px] h-[88px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300  justify-center">
              <img
                src={MGM} alt=""
                className="w-[112px] h-[56px] self-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        {!isScrollAtStart && (
          <button
            className="bg-indigo500 hover:bg-green500 text-white font-bold rounded-full w-10 h-10 absolute top-11 left-0"
            onClick={scrollToPrevious}
          >
            <div className='grid grid-cols-1'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 place-self-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
          </button>
        )}
        {!isScrollAtEnd && (
          <button
            className="bg-indigo500 hover:bg-green500 text-white font-bold rounded-full w-10 h-10 absolute top-11 right-0"
            onClick={scrollToNext}
          >
            <div className='grid grid-cols-1'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 place-self-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

export default BestOfAction;