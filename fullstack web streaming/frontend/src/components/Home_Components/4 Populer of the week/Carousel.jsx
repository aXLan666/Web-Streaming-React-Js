import image1 from "./images/TheLastOfUs.jpg";

import React, { useRef, useState } from 'react';

function PopulerOfTheWeek() {
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
        <div className="flex flex-col bg-black800 h-[206px] m-auto p-auto relative">
            <h1 className='ml-10 font-bold text-white text-lg mt-4'>Popular of the week</h1>
            <div
                className="flex overflow-x-scroll pb-10 hide-scroll-bar"
                ref={scrollContainerRef}
                onScroll={handleScroll}
            >
                <div className="flex flex-nowrap ml-7 mt-4">
                    <div className="inline-block px-3">
                        <div className="flex items-stretch w-[350px] h-[128px] max-w-xs overflow-hidden rounded-lg bg-tranparent duration-300 ease-in-out">
                            <h1 className='inline-block align-middle font-bold text-[38px] text-white mr-[12px] mt-[32px]'>1</h1>
                            <a href="">
                                <img
                                    src={image1} alt=""
                                    className="w-[107px] h-[128px] rounded-2xl flex-auto mr-[12px]"
                                />
                            </a>
                            <div className='w-[181px] h-[128px] flex-auto'>
                                <h2 className="text-white font-bold">The Last Of Us</h2>
                                <span className="flex h-[20px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5">
                                        <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-[12px]">Horor  • Thriller</p>
                                </span>
                                <span className="flex h-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5 text-yellow">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-white text-[12px] font-bold">4.9 | Movie</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="inline-block px-3">
                        <div className="flex items-stretch w-[350px] h-[128px] max-w-xs overflow-hidden rounded-lg bg-tranparent duration-300 ease-in-out">
                            <h1 className='inline-block align-middle font-bold text-[38px] text-white mr-[12px] mt-[32px]'>2</h1>
                            <a href="">
                                <img
                                    src={image1} alt=""
                                    className="w-[107px] h-[128px] rounded-2xl flex-auto mr-[12px]"
                                />
                            </a>
                            <div className='w-[181px] h-[128px] flex-auto'>
                                <h2 className="text-white font-bold">The Last Of Us</h2>
                                <span className="flex h-[20px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5">
                                        <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-[12px]">Horor  • Thriller</p>
                                </span>
                                <span className="flex h-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5 text-yellow">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-white text-[12px] font-bold">4.9 | Movie</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="inline-block px-3">
                        <div className="flex items-stretch w-[350px] h-[128px] max-w-xs overflow-hidden rounded-lg bg-tranparent duration-300 ease-in-out">
                            <h1 className='inline-block align-middle font-bold text-[38px] text-white mr-[12px] mt-[32px]'>3</h1>
                            <a href="">
                                <img
                                    src={image1} alt=""
                                    className="w-[107px] h-[128px] rounded-2xl flex-auto mr-[12px]"
                                />
                            </a>
                            <div className='w-[181px] h-[128px] flex-auto'>
                                <h2 className="text-white font-bold">The Last Of Us</h2>
                                <span className="flex h-[20px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5">
                                        <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-[12px]">Horor  • Thriller</p>
                                </span>
                                <span className="flex h-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5 text-yellow">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-white text-[12px] font-bold">4.9 | Movie</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="inline-block px-3">
                        <div className="flex items-stretch w-[350px] h-[128px] max-w-xs overflow-hidden rounded-lg bg-tranparent duration-300 ease-in-out">
                            <h1 className='inline-block align-middle font-bold text-[38px] text-white mr-[12px] mt-[32px]'>4</h1>
                            <a href="">
                                <img
                                    src={image1} alt=""
                                    className="w-[107px] h-[128px] rounded-2xl flex-auto mr-[12px]"
                                />
                            </a>
                            <div className='w-[181px] h-[128px] flex-auto'>
                                <h2 className="text-white font-bold">The Last Of Us</h2>
                                <span className="flex h-[20px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5">
                                        <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-[12px]">Horor  • Thriller</p>
                                </span>
                                <span className="flex h-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5 text-yellow">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-white text-[12px] font-bold">4.9 | Movie</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="inline-block px-3">
                        <div className="flex items-stretch w-[350px] h-[128px] max-w-xs overflow-hidden rounded-lg bg-tranparent duration-300 ease-in-out">
                            <h1 className='inline-block align-middle font-bold text-[38px] text-white mr-[12px] mt-[32px]'>5</h1>
                            <a href="">
                                <img
                                    src={image1} alt=""
                                    className="w-[107px] h-[128px] rounded-2xl flex-auto mr-[12px]"
                                />
                            </a>
                            <div className='w-[181px] h-[128px] flex-auto'>
                                <h2 className="text-white font-bold">The Last Of Us</h2>
                                <span className="flex h-[20px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5">
                                        <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-[12px]">Horor  • Thriller</p>
                                </span>
                                <span className="flex h-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5 text-yellow">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-white text-[12px] font-bold">4.9 | Movie</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="inline-block px-3">
                        <div className="flex items-stretch w-[350px] h-[128px] max-w-xs overflow-hidden rounded-lg bg-tranparent duration-300 ease-in-out">
                            <h1 className='inline-block align-middle font-bold text-[38px] text-white mr-[12px] mt-[32px]'>6</h1>
                            <a href="">
                                <img
                                    src={image1} alt=""
                                    className="w-[107px] h-[128px] rounded-2xl flex-auto mr-[12px]"
                                />
                            </a>
                            <div className='w-[181px] h-[128px] flex-auto'>
                                <h2 className="text-white font-bold">The Last Of Us</h2>
                                <span className="flex h-[20px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5">
                                        <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-[12px]">Horor  • Thriller</p>
                                </span>
                                <span className="flex h-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5 text-yellow">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-white text-[12px] font-bold">4.9 | Movie</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                {!isScrollAtStart && (
                    <button
                        className="bg-blindigo500ue hover:bg-green500 text-white font-bold rounded-full w-10 h-10 absolute top-7 left-0"
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

export default PopulerOfTheWeek;