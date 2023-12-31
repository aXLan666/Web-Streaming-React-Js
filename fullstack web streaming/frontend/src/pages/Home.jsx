import React from "react";
import PNavbar from '../components/Home_Components/1 Hero/Hero'
import BestOfAction from '../components/Home_Components/2 Best of Action/Carousel'
import ContinueWatching from '../components/Home_Components/3 Continue Watching/Carousel'
import PopulerOfTheWeek from '../components/Home_Components/4 Populer of the week/Carousel'
import JustRelease from "../components/Home_Components/5 Just Release/Carousel";
import YourWatchlist from "../components/Home_Components/6 Your Watchlist/Carousel";

function Home() {

    return (
        <>
            <PNavbar />
            <BestOfAction />
            <ContinueWatching />
            <PopulerOfTheWeek />
            <JustRelease />
            <YourWatchlist />
        </>
    )
}

export default Home