import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(0);
  const [targetDatePassed, setTargetDatePassed] = useState(false);

  useEffect(() => {
    const targetDate: Date = new Date('2024-04-11T14:00:00'); // Set your target date here
    const currentTime: Date = new Date();

    if ( currentTime > targetDate ) {
      setTargetDatePassed(true);
    } else {
      const difference: number = targetDate.getTime() - currentTime.getTime();
      const countdownInSeconds: number = Math.floor(difference / 1000);
  
      setCountdown(countdownInSeconds);
  
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
  
      return () => clearInterval(timer);
    }
  }, []);

  if ( targetDatePassed ) {

    return (
      	<div className="countdown-timer">
			We did it! we got married.
		</div>
    );

  }

  const formatTime = (time: number) => {
    return time < 10 ? `${time}` : time;
  };

  const days = Math.floor(countdown / (24 * 60 * 60));
  const hours = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((countdown % (60 * 60)) / 60);

  return (
    <div className="countdown-timer">
      {days} days, {formatTime(hours)} hours, {formatTime(minutes)} minutes
    </div>
  );
};

export default CountdownTimer;
