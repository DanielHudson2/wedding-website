'use client';
import Image from 'next/image'

export default function OurVenue() {
  return (
    <main>
      
      <div className="width-container flow">

        <div className="hoz-padding flow">
          <h1 className='body-font'>Accomodation</h1>
          <p>If you are planning on staying in the area while you are attending our wedding we&apos;ve put together a bit of information on accomodation options for you.</p>
        </div>

        <div className='text-with-image'>

          <div className='text-with-image__content fadeInLeft animate flow'>
            <h2>Eastington Park</h2>
            <p>We are really clever so we found a venue with plenty of accomodation so that if you&apos;d like you can stay with us and you&apos;ll even get breakfast in the morning.</p>
            <p>Eastington Park handles all the accomodation themselves so if you&apos;d like to book then you can get in touch with them directly using <a href="tel:+441453827926">+44(0)1453 827926</a></p>
            <p>You can find our more about their accomodation <a href="https://www.eastingtonpark.co.uk/accommodation/" target="_blank" rel="noopener noreferrer">here</a>.</p>
          </div>

          <Image
            src='/eastington.jpg'
            width='680'
            height='453'
            alt='Eastington Park'
            className='fadeInRight animate'
          />
          
        </div>

        <div className="grid hoz-padding">

          <div className='fadeInLeft animate flow'>
            <h3>Travelodge</h3>
            <p>The next closest accomodation is Stonehouse Travelodge, it is a very short drive away so is perfect if you can&apos;t get a room in Eastington Park but still want to be close by.</p>
            <p>You can find out more about this accommodation <a href="https://www.travelodge.co.uk/hotels/99/Stonehouse-hotel" target="_blank" rel="noopener noreferrer">here</a>.</p>
          </div>

          <div className='fadeInRight animate flow'>
            <h3>Others</h3>
            <p>We are sure there&apos;s plenty of other accomodation in the area you could find if those don&apos;t work for you, here is a <a href="https://www.google.com/search?q=hotels+in+stonehouse+gloucestershire" target="_blank" rel="noopener noreferrer">Google Search</a> to get you started.</p>
          </div>

        </div>

        <br></br>

      </div>

    </main>
  )
}
