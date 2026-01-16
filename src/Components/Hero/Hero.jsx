import React from 'react';
import Title from '../Title';
import DescriptionText from '../DescriptionText';
import Slider from './Slider';
import Buttons from './Buttons';

function Hero() {
    return (
        <div className='flex flex-col-reverse md:flex-row mt-20 items-center'>
            <div className="hero-left flex-1 space-y-5">
                <Title className=''>Welcome to ShopHub</Title>
                <DescriptionText>Shop from the largest collection of quality products at unbeatable prices. <br />
                    Fast shipping, secure payment, and 24/7 customer support.
                </DescriptionText>

                <div>
                    <Buttons/>
                </div>
            </div>
            <div className="hero-right flex-1">
                <Slider/>
            </div>
        </div>
    );
}

export default Hero;