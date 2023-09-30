'use client';
import OurStory from './components/OurStory';
import Hero from './components/Hero';
import Image from 'next/image'

export default function Home() {
  return (
    <main>

      <Hero />

      <div className='text-with-image width-container fancy-border'>

        <div className='text-with-image__content fadeInLeft animate'>
          <h2>We&apos;re getting married!</h2>
          <p>Well it&apos;s about time, we just didn&apos;t want to rush into it, after all 10 years isn&apos;t that long really.</p>
          <p>The big day is on Thursday 11th April 2024 at Eastington Park in Gloucestershire and we can&apos;t wait!</p>
        </div>

        <Image
          src='/us.jpg'
          width='434'
          height='577'
          alt='Daniel and Celine'
          className='fadeInRight animate'
        />
        
      </div>

      <div className='row row--secondary'>

        <div className='row__content width-container'>

          <h2>Our Story</h2>

          <OurStory />

        </div>

      </div>

    </main>
  )
}
