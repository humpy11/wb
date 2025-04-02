import React, {useState} from 'react'; 

function Onchangecomp(){
    const[name, setname] = useState("Guest"); 
    const[dept, setdept] = useState("Deptname");
    const[gender, setgender] = useState(); 
const [color, setcolor] = useState("#ffffff")

    const namer = (e) =>{
        setname(e.target.value);
    }
    const depter = (e) =>{
        setdept(e.target.value);
    }
    const genderer = (e) =>{
        setgender(e.target.value);
    }
    const colorer = (e) =>{
        setcolor(e.target.value);
    }

    return(
        <>
        <input type = "text" value = {name} onChange={namer}></input>
        <p>Name: {name}</p>

        <select value={dept} onChange={depter}>
            <option value = "CS IT">CS IT</option>
            <option value = "MECHANICAL">MECHANICAL</option>
            <option value = "ELECTRICAL">ELECTRICAL</option>

        </select>
        <p>
            DEPARTMENT: {dept}
        </p>
        <label><input type = "radio"  value = "male" checked={gender ==="male"} onChange={genderer}></input>MALE</label>
        <label><input type = "radio"   value="female"  checked ={gender==="female"} onChange={genderer}></input>FEMALE</label>
        <p>GENDER: {gender}</p>
        

        <div className= "thebox" style={{backgroundColor : color}}></div>
        
        <label><input onChange={colorer} value ={color} type="color"></input>PICK YOUR COLOR</label>
        </>
    );

}
export default Onchangecomp; 