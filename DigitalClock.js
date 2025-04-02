import React, {useState, useEffect} from 'react'; 
function DigitalClock(){



    const [time, settime] = useState(new Date());

    useEffect(()=>{
        const interval = setInterval(()=>{settime(new Date())}, 1000);
        return ()=> {
            clearInterval(interval);

        }

    },[]); 
    function pz(num){
        return (num <10? "0":"")+num; 
    }

    function formattime(){
        let hrs = time.getHours(); 
        let mins = time.getMinutes(); 
        let secs = time.getSeconds(); 
        let meridtime = hrs >= 12 ? "pm":"am"; 
        hrs = hrs % 12 || 12; 
        return `${pz(hrs)}:${pz(mins)}:${pz(secs)} ${pz(meridtime)}`;

    }


    return(
        <div className="clockcontainer">
            <div className="clock">
                <span>{formattime()}</span>
            </div>
        </div>

    );
}
export default DigitalClock;