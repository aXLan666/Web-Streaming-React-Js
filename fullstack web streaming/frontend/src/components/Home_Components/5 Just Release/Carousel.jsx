import React, { useRef, useState } from 'react';

function JustRelease() {
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
    <div className="flex flex-col bg-black800 h-[500px] m-auto p-auto relative">
      <h1 className='ml-10 font-bold text-white text-lg mt-4'>Just Release</h1>
      <div
        className="flex overflow-x-scroll pb-10 hide-scroll-bar"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        <div className="flex flex-nowrap ml-7 mt-4">
          <div className="inline-block px-3">
            <div className="btn flex w-[280px] h-[412px] max-w-xs overflow-hidden rounded-2xl shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center">
              <img
                src="" alt=""
                className="w-[108px] h-[44px] self-center"
              />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[280px] h-[412px] max-w-xs overflow-hidden rounded-2xl shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center">
              <img
                src="" alt=""
                className="w-[125px] h-[34px] self-center"
              />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[280px] h-[412px] max-w-xs overflow-hidden rounded-2xl shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center">
              <img
                src="" alt=""
                className="w-[147px] h-[26px] self-center"
              />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[280px] h-[412px] max-w-xs overflow-hidden rounded-2xl shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center">
              <img
                src="" alt=""
                className="w-[125px] h-[26px] self-center"
              />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[280px] h-[412px] max-w-xs overflow-hidden rounded-2xl shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center">
              <img
                src="" alt=""
                className="w-[120px] h-[48px] self-center"
              />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[280px] h-[412px] max-w-xs overflow-hidden rounded-2xl shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300  justify-center">
              <img
                src="" alt=""
                className="w-[96px] h-[55px] self-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        {!isScrollAtStart && (
          <button
            className="bg-indigo500 hover:bg-green500 text-white font-bold rounded-full w-10 h-10 absolute top-7 left-0"
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
            className="bg-indigo500 hover:bg-green500 text-white font-bold rounded-full w-10 h-10 absolute top-7 right-0"
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

export default JustRelease;