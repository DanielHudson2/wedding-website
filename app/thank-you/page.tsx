'use client';
import Image from 'next/image'

export default function ThankYou() {
  return (
    <main>
      
      <div className="width-container">

        <div className="hoz-padding">
          <h1 className='body-font'>Thanks for your RSVP</h1>
        </div>

        <div className='text-with-image'>

          <div className='text-with-image__content fadeInLeft animate flow'>
            <p>If you can&apos;t make it then we are sorry you won&apos;t be able to join us.</p>
            <p>If you can then we can&apos;t wait to see you there, we are so excited and can&apos;t wait to share the day with everyone.</p>
            <p>If you&apos;ve got any questions then feel free to send us an email <a href="mailto:celineanddaniel@gmail.com">by clicking here.</a></p>
          </div>

          <Image
            src='/eastington.jpg'
            width='680'
            height='453'
            alt='Eastington Park'
            className='fadeInRight animate'
          />
          
        </div>

      </div>

    </main>
  )
}
