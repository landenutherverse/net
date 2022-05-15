import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import headerImage from './assets/carousel-1.png';

const headerItem = (
  <div className="">
    <div
      style={{ backgroundImage: `url(${headerImage})` }}
      className="bg-cover bg-center bg-no-repeat h-32 md:h-[32rem] bg-black"
    ></div>
    {/* <img src={headerImage} className="select-none" /> */}
    <p className="font-futura md:absolute bottom-0 h-20 md:h-12 flex items-center flex-col md:flex-row w-full bg-black md:bg-black/60 text-gray-200 text-left py-4 md:py-0 px-4">Combining the best of the Internet, Video Gaming and
      Virtual Reality <a className="font-futura-bold font-bold pl-2 text-white" href="#">Learn more</a></p>
  </div >
);

const ArrowLeft = (clickHandler) => {
  return (
    <div
      className="absolute bottom-2/4 left-4 z-20"
      onClick={clickHandler}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:h-16 md:w-16" viewBox="0 0 20 20" fill="rgba(255, 255, 255, .5)">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
      </svg>
    </div>
  )
}

const ArrowRight = (clickHandler) => {
  return (
    <div
      className="absolute bottom-2/4 right-4 z-20"
      onClick={clickHandler}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:h-16 md:w-16" viewBox="0 0 20 20" fill="rgba(255, 255, 255, .5)">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
      </svg>
    </div>
  )
}

export default function Header() {
  return (
    <div className="relative md:mx-6 lg:max-w-5xl lg:mx-auto mb-8">
      <Carousel showThumbs={false} showStatus={false} showIndicators={false} renderArrowNext={ArrowRight} renderArrowPrev={ArrowLeft} >
        {headerItem}
        {headerItem}
      </Carousel>
    </div>
  )
}
