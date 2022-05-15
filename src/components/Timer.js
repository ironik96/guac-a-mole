import React from "react";
import { useTimer } from "react-timer-hook";

export default function Timer({ expiryTimestamp, onExpire }) {
  const { seconds, minutes, isRunning } = useTimer({
    expiryTimestamp,
    onExpire: onExpire,
  });
  return (
    <h1>
      Time Left: <span>{minutes}</span>:<span>{seconds}</span> min
    </h1>
  );
}
