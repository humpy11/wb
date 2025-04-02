
import React, {useState, useEffect} from 'react';



function BMIResult() {

  const [height, seth] =  useState(0); 
const [weight, setw] = useState(0); 
const [bmi, setbmi] = useState(0); 
const updateh =(e)=>{
  seth(height=> e.target.value);

}

const updatew = (e) =>{
  setw(weight=> e.target.value);
}
useEffect(()=>{
  setbmi(height*weight); 

}, [height, weight]

);

  return (
    <div>
      <input className="hinput" onChange={updateh}></input>
      <input class= "winput" onChange= {updatew}></input>
      <h1>BMI IS {bmi}</h1>
    </div>
  );
}

export default BMIResult;
