'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Slider() {

    const images = ['/slider-1.jpg','/slider-2.avif','/slider-3.avif']
    return (
        <div>
            <Carousel autoPlay={true} infiniteLoop={true}>
                {
                    images.map(img => 
                        <div>
                            <img src={img} alt="" />
                        </div>
                    )
                }
            </Carousel>
        </div>
    );
}

export default Slider;