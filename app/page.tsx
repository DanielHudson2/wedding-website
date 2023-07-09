'use client';
import CountdownTimer from './components/CountdownTimer'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <CountdownTimer />

      <div className='text-with-image'>

        <div className='text-with-image__content'>
          <h2>We're getting married!</h2>
          <p>Well it's about time, we just didn't want to rush into it, after all 10 years isn't that long really.</p>
          <p>The big day is on Thursday 11th April 2024 at Eastington Park in Gloucestershire and we can't wait!</p>
        </div>

        <Image
          src='/us.jpg'
          width='434'
          height='577'
          alt='Daniel and Celine'
        />
        
      </div>

    </main>
  )
}
