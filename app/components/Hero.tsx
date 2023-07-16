import React from 'react';
import CountdownTimer from './CountdownTimer';
import FloatingFlowers from './FloatingFlowers';

function Hero() {
    return (
        <div className='hero'>

            <h1>Celine & Daniel</h1>

            <p>Thursday 11th April 2024 | Eastington Park, Gloucestershire</p>

            <CountdownTimer />

            <FloatingFlowers />

        </div>
    )
}

export default Hero;