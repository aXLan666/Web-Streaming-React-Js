import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import image1 from "../images/The_Mandalorian.jpeg";

function Hero() {

    const [produkFilms, setProdukFilms] = useState([]);

    useEffect(() => {
        getProdukFilms(); // Call the function to fetch films from the API
    }, []);

    const getProdukFilms = async () => {
        const response = await axios.get("http://localhost:5009/produkfilms");
        setProdukFilms(response.data);
    };

    return (
        <>
            <div
                id="default-carousel"
                className="relative h-[910px] w-full"
                data-carousel="slide"
            >
                <div className="relative h-[910px] w-full overflow-hidden">
                    {produkFilms.map((produkFilm) => (
                        <div
                            className="image-wrapper duration-700 ease-in-out"
                            data-carousel-item
                            key={produkFilm.id}
                        >
                            <div className="gradient-overlay"></div>
                            <img
                                className="image"
                                src={produkFilm.urlImageHorizontal}
                                alt="Gradient Image"
                            />
                            <div className='absolute bottom-20 left-10'>
                                <div className='rounded-full bg-purple500 text-center w-fit h-fit mb-5 cursor-pointer'>
                                    <p className="font-['rubik'] text-white mx-3">Movie</p>
                                </div>
                                <div className=''>
                                    <h1 className="text-white font-['rubik'] text-[32px]">{produkFilm.title}</h1>
                                </div>
                                <div className=''>
                                    <div className=''>{produkFilm.releaseDate}</div>
                                </div>
                                <div className=''>
                                    <p className='about text-white'>{produkFilm.about}</p>
                                </div>
                                <div className='mt-5'>
                                    <div className='btn bg-green500 hover:bg-green500 mr-4 outline-none rounded-3 text-white'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-1">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                                        </svg>
                                        <p>Play Now</p>
                                    </div>
                                    <div className='btn mr-4 text-white'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                        </svg>
                                        <p>Watch Trailer</p>
                                    </div>
                                    <div className='btn text-white bg-transparent outline'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                        </svg>
                                        <p>Add Watchlist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="absolute bottom-16 right-10 z-30 flex  space-x-3">
                        <button
                            type="button"
                            className="w-3 h-3 rounded-full"
                            aria-current="true"
                            aria-label="Slide 1"
                            data-carousel-slide-to="0"
                        ></button>
                        <button
                            type="button"
                            className="w-3 h-3 rounded-full"
                            aria-current="false"
                            aria-label="Slide 2"
                            data-carousel-slide-to="1"
                        ></button>
                        <button
                            type="button"
                            className="w-3 h-3 rounded-full"
                            aria-current="false"
                            aria-label="Slide 3"
                            data-carousel-slide-to="2"
                        ></button>
                        <button
                            type="button"
                            className="w-3 h-3 rounded-full"
                            aria-current="false"
                            aria-label="Slide 4"
                            data-carousel-slide-to="3"
                        ></button>
                        <button
                            type="button"
                            className="w-3 h-3 rounded-full"
                            aria-current="false"
                            aria-label="Slide 5"
                            data-carousel-slide-to="4"
                        ></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero