import { useState, useEffect } from "react";

const Timer = () => {
  const [timeValue, setTimeValue] = useState<number>(60);
  const [interval, setMyInterval] = useState<any>();
  const [timerState, setTimerState] = useState<number>(1)
  const [type, setType] = useState(1);
  const typearray = ['play','pause'];
  useEffect(() => {
    if(timerState === 0){
        setMyInterval(
            setInterval(() => {
              setTimeValue((timeValue) => timeValue - 1);
            }, 1000)
          );
    } else {
        clearInterval(interval)
    }
  }, [timerState])

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="mt-[100px] w-[400px] h-[200px] rounded-xl  text-center p-[20px]">
        <input
          readOnly
          value={timeValue}
          className="outline-none  rounded-m w-[80%] p-2 text-center text-[30px]"
        />
        <div className="flex justify-around w-100 mt-[50px]">
          <button onClick={() => setTimerState(0)} className="p-3  rounded-md">
            Play
          </button>
          <button onClick={() => setTimerState(1)} className="p-3  rounded-md">
            Pause
          </button>
          <button onClick={() => setTimeValue(60)} className="p-3  rounded-md">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
