import React from 'react';
import Image from 'next/image';

function FloatingFlowers() {
	return (
		<div className='flowers'>

		<Image
			src='/flowers-left.png'
			alt='flowers'
			className='flowers-left fadeInLeft animate'
			width='750'
			height='1000'
		/>

		<Image
			src='/flowers-right.png'
			alt='flowers'
			className='flowers-right fadeInRight animate'
			width='619'
			height='684'
		/>

		</div>
	)
}

export default FloatingFlowers;