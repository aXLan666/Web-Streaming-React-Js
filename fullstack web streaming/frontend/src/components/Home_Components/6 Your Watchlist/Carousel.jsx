import React, { useRef, useState } from 'react';

function YourWatchlist() {
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
    <div className="flex flex-col bg-black800 h-[392px] m-auto p-auto relative">
      <h1 className='ml-10 font-bold text-white text-lg mt-4'>Continue Watching</h1>
      <div
        className="flex overflow-x-scroll pb-10 hide-scroll-bar"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >

        <div className="flex flex-nowrap ml-7 mt-4">
          <div className="inline-block px-3">
            <div className="btn flex w-[280px] h-[256px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center">
              <img
                src="" alt=""
                className="w-full h-[183px] self-center rounded-2xl"
              />
              <div className="h-[56px] w-[280px]">
                <h1 className='flex mt-[11px]'>TOP GUN:Maverick</h1>
                <span className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5 text-yellow">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white text-[12px] font-bold mt-1">4.9 | Action</p>
                </span>
              </div>
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[280px] h-[256px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center">
              <img
                src="" alt=""
                className="w-full h-[183px] self-center rounded-2xl"
              />
              <div className="h-[56px] w-[280px]">
                <h1 className='flex mt-[11px]'>TOP GUN:Maverick</h1>
                <span className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5 text-yellow">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white text-[12px] font-bold mt-1">4.9 | Action</p>
                </span>
              </div>
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[280px] h-[256px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center">
              <img
                src="" alt=""
                className="w-full h-[183px] self-center rounded-2xl"
              />
              <div className="h-[56px] w-[280px]">
                <h1 className='flex mt-[11px]'>TOP GUN:Maverick</h1>
                <span className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5 text-yellow">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white text-[12px] font-bold mt-1">4.9 | Action</p>
                </span>
              </div>
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[280px] h-[256px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center">
              <img
                src="" alt=""
                className="w-full h-[183px] self-center rounded-2xl"
              />
              <div className="h-[56px] w-[280px]">
                <h1 className='flex mt-[11px]'>TOP GUN:Maverick</h1>
                <span className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5 text-yellow">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white text-[12px] font-bold mt-1">4.9 | Action</p>
                </span>
              </div>
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="btn flex w-[280px] h-[256px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center">
              <img
                src="" alt=""
                className="w-full h-[183px] self-center rounded-2xl"
              />
              <div className="h-[56px] w-[280px]">
                <h1 className='flex mt-[11px]'>TOP GUN:Maverick</h1>
                <span className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5 text-yellow">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white text-[12px] font-bold mt-1">4.9 | Action</p>
                </span>
              </div>
            </div>
          </div>
          <div className="inline-block px-3">
          <div className="btn flex w-[280px] h-[256px] max-w-xs overflow-hidden rounded-lg shadow-md bg-black900 hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center">
              <img
                src="" alt=""
                className="w-full h-[183px] self-center rounded-2xl"
              />
              <div className="h-[56px] w-[280px]">
                <h1 className='flex mt-[11px]'>TOP GUN:Maverick</h1>
                <span className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5 text-yellow">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white text-[12px] font-bold mt-1">4.9 | Action</p>
                </span>
              </div>
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

export default YourWatchlist;