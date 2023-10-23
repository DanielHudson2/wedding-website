import React from 'react';
import { useInView } from 'react-intersection-observer';

function OurStory() {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();

  return (
    <div className="our-story" id='ourStory'>
      <div className={`container left fadeInLeft ${inView1 ? 'animate' : ''}`} ref={ref1}>
        <div className="content flow">
          <p>
            <strong>May 2012</strong>
          </p>
          <p>When we met! <br />We met on Celine&apos;s first shift lifeguarding at GL1 in Gloucester.</p>
        </div>
      </div>

      <div className={`container right fadeInRight ${inView2 ? 'animate' : ''}`} ref={ref2}>
        <div className="content flow">
          <p>
            <strong>12 April 2013</strong>
          </p>
          <p>When we got together! <br />After a year of wearing her down, Celine agreed to go out with me.</p>
        </div>
      </div>

      <div className={`container left fadeInLeft ${inView3 ? 'animate' : ''}`} ref={ref3}>
        <div className="content flow">
          <p>
            <strong>September 2014</strong>
          </p>
          <p>
            Celine goes to uni. <br />Our first big test was when Celine moved to Bath for 3 years to get her degree, and we
            came out of it stronger than ever.
          </p>
        </div>
      </div>

      <div className={`container right fadeInRight ${inView4 ? 'animate' : ''}`} ref={ref4}>
        <div className="content flow">
          <p>
            <strong>March 2020</strong>
          </p>
          <p>
            Lockdown. <br />In our biggest test, we had to spend 3 months apart when Covid forced the country into lockdown.
            At the time it was awful, but now when we look back, we have realized that it made us closer than we&apos;ve ever
            been.
          </p>
        </div>
      </div>

      <div className={`container left fadeInLeft ${inView5 ? 'animate' : ''}`} ref={ref5}>
        <div className="content flow">
          <p>
            <strong>22 August 2021</strong>
          </p>
          <p>
            The big question. <br />After many years, I decided it was time to pop the question. After a few weeks of
            scrambling, I got myself organized and popped the question while we were on holiday in Devon.
          </p>
        </div>
      </div>

      <div className={`container right fadeInRight ${inView6 ? 'animate' : ''}`} ref={ref6}>
        <div className="content flow">
          <p>
            <strong>11 March 2022</strong>
          </p>
          <p>
            Our first home. <br />After many months of waiting, we finally moved into our first home in Longlevens and got
            started properly planning our wedding.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurStory;