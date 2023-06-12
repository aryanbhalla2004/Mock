import { useEffect, useState, useRef} from "react"
import "./style.css";

interface props {
  seconds: number,
  setTimeRunning: (isRunning: boolean) => void;
}

const formatTime = (time: number) => {
  let min:any = Math.floor(time/60);
  let sec:any = Math.floor(time - min * 60);

  if(min < 10) min = '0' + min;
  if(sec < 10) sec = '0' + sec;

  return min + ':' + sec;
}

export const CountDown = (props: props) => {
  const [countDown, setCountDown] = useState<number>(props.seconds);
  const timerId = useRef<any>(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if(countDown <= 0) {
      clearInterval(timerId.current);
      props.setTimeRunning(false);
    }
  }, [countDown, props])

  return (
    <span className="timing-clock">{formatTime(countDown)}</span>
  )
}