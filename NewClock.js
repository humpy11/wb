import React, {use, useEffect, useState} from'react'; 

function NewClock(){
    const [time, settime] = useState(); 

    useEffect(()=>{
       let interval =  setInterval(()=>{
            settime(new Date); 
        }, 1000)
        return ()=>{clearInterval(interval)}

    }, []); 

    function formattime(){
        let hrs = time.getHours(); 
        let mins = time.getMinutes(); 
        let secs = time.getSeconds(); 
        return `${hrs}:${mins}:${secs}`;
    }

    




    return(
        <>
        <h1>THE TIME IS</h1>
        <h2>{formattime()}</h2>
        </>
    );

}
export default NewClock; 