import react, {useState} from 'react'; 
function TestComp(){
    const [name, setname] = useState("Guest");
    const[age, setage] = useState(0); 

    const incage =() => {
        setage(age+1);

    }
    const updatename =()=>{
        setname("Bhenedix");
    }

    return(
        <>
        <p>Name: {name}</p>
        <button onClick={updatename}>SET NAME</button>

        <p>Age: {age}</p>
        <button onClick ={incage}>INCREASE AGE</button>

        </>
    );

}
export default TestComp;