import { Dispatch, SetStateAction, useEffect } from 'react';

const CountDownTimer = ({
  timeLeft,
  setTimeLeft,
}: {
  timeLeft: number;
  setTimeLeft: Dispatch<SetStateAction<number>>;
}) => {
  useEffect(() => {
    if (timeLeft > 0) {
      const setTimer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(setTimer);
    }
  }, [timeLeft]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <span className='text-[14px] text-negative font-medium'>
      {formatTime(timeLeft)}
    </span>
  );
};

export default CountDownTimer;
