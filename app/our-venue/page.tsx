'use client';
import Image from 'next/image'

export default function OurVenue() {
  return (
    <main>
      
      <div className="width-container">

        <div className="hoz-padding">
          <h1 className='body-font'>Our Venue</h1>
        </div>

        <div className='text-with-image'>

          <div className='text-with-image__content fadeInLeft animate'>
            <h2>Eastington Park</h2>
            <p>Our venue is a beautiful manor house in Eastington (just outside of Stonehouse).</p>
            <p>After struggling to find our perfect venue Eastington Park was the last one we viewed and we fell in love with it immediately.</p>
            <p>It was important that the venue felt 'us' and it's not something we felt at any other venue until we walked into Eastington.</p>
          </div>

          <Image
            src='/eastington.jpg'
            width='680'
            height='453'
            alt='Eastington Park'
            className='fadeInRight animate'
          />
          
        </div>

        <div className="hoz-padding">
          <h3>The Important Bits</h3>
          <ul>
            <li>Eastington Park has accomodation which you can find more about <a href="/accomodation">here</a>.</li>
            <li>The address is Eastington Park, Gloucestershire, GL10 3RY you can get directions <a href="https://www.google.com/maps/place/Eastington+Park/@51.7496031,-2.3139865,17z/data=!3m1!4b1!4m6!3m5!1s0x487109f746679a5d:0xbf145f5aa0e00283!8m2!3d51.7495998!4d-2.3114116!16s%2Fg%2F1pp2x67g7?entry=ttu" target='_blank' rel="noopener noreferrer">here</a>.</li>
            <li>You are able to drive all the way to the front door for dropoffs but we ask that everyone uses the provided carpark which is signposted on the driveway.</li>
          </ul>
          <br></br>
          <p>You can find out anything else you need by visting Eastington Park's website <a href="https://www.eastingtonpark.co.uk/" target='_blank' rel="noopener noreferrer">www.eastingtonpark.co.uk</a></p>
          <br></br>
        </div>

      </div>

    </main>
  )
}
