'use client';
import Image from 'next/image'

export default function OurVenue() {
  return (
    <main>
      
      <div className="width-container flow">

        <div className="hoz-padding flow">
          <h1 className='body-font'>The Big Day</h1>
          <p>Our wedding is taking place on Thursday 11th April 2024 at Eastington Park in Gloucestershire</p>
        </div>

        <div className="grid hoz-padding">

          <div className='fadeInLeft animate flow'>
            <h3>When To Arrive</h3>
            <p>Guests are welcome to arrive from 12:30PM ready to be seated at 1:40PM in time for the ceremony to begin at 2:00PM.</p>
          </div>

          <div className='fadeInRight animate flow'>
            <h3>What Happens Next?</h3>
            <p>After the ceremony there will be a drinks reception with canapés as well as some photographs going on.</p>
            <p>Then we&apos;ll be sitting down for the wedding breakfast and speeches before the party starts; ending at midnight.</p>
          </div>

        </div>

        <div className="grid hoz-padding">

          <div className='fadeInLeft animate flow'>
            <h3>What Are We Eating</h3>
            <h4><strong>Starter:</strong></h4>
            <p>Mozzarella and sun-dried tomato arancini with slow cooked pepperonata and micro basil.</p>
            <h4><strong>Main:</strong></h4>
            <p>Pan fried chicken breast with squash pomme purée, green beans, sage, and chilli jus.</p>
            <h4><strong>Dessert:</strong></h4>
            <p>Sticky toffee pudding with toffee sauce and banoffee fudge ice cream.</p>
            <p><strong>If you have any dietry requirements please let us know when you RSVP and we can make arrangements with the caterers to accomodate you.</strong></p>
          </div>

          <div className='fadeInRight animate flow'>
            <h3>What Should You Wear</h3>
            <p>Go big or go home, but make sure you&apos;ll be able to last til midnight at the party.</p>
            <h3>Gifting</h3>
            <p>While your company is enough, should you wish to gift us something, we ask you donate money to one of the charities listed as they mean a lot to us and our families:</p>
            <ul>
                <li>Cancer Research UK</li>
                <li>Marie Curie</li>
                <li>British Heart Foundation</li>
            </ul>
          </div>

        </div>

      </div>

    </main>
  )
}
