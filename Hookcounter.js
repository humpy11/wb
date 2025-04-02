import React, {useState} from'react';
function Hookcounter(){

    const [count, setcount] = useState(0);
    const dec =()=> setcount(count-1); 
    const inc =() => setcount(count+1); 
    const res =() => setcount(0); 


    return(
       <div className ="container">
        <p className="countdisplay">{count}</p>
        <button className="bttn" onClick={inc}>INCREASE</button>
        <button className="bttn" onClick = {dec}>DECREASE</button>
        <button className="bttn" onClick ={res}>RESET</button>

       </div>
    );




}




export default Hookcounter; 