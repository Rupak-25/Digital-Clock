import React,{useState,useEffect} from 'react'

const DigitalClock = () => {

    const [time,setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 24;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        let timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
        return timeString;
    }
  return (
    <>
     <div className='clock-container'>
        <div className="clock">
            <span>{formatTime()}</span>
        </div>
     </div> 
    </>
  )
}

export default DigitalClock
