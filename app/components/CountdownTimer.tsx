import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const targetDate: Date = new Date('2024-04-11'); // Set your target date here
    targetDate.setHours(14, 0, 0, 0);
    const currentTime: Date = new Date();

    const difference: number = targetDate.getTime() - currentTime.getTime();
    const countdownInSeconds: number = Math.floor(difference / 1000);

    setCountdown(countdownInSeconds);

    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
