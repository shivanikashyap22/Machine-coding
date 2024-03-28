import React, { useEffect, useState } from "react";

const CountDownTimer = () => {
  const [countDown, setCountDown] = useState(5);
  useEffect(() => {
    if (countDown === 0) {
      return;
    }
    const interval = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return <div>CountDownTimer{countDown}</div>;
};

export default CountDownTimer;
