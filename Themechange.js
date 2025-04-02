import React, {useEffect, useState} from 'react'; 
function Themechange(){
    const [dark, setdark] = useState(true); 

    const toggler = () =>{
        dark? setdark(false): setdark(true);
    }

    return(
       <div className="changer"style={{backgroundColor: dark?"black":"white", color: dark?"black":"white"}}>
        <button onClick={toggler}>
            
            SWITCH TO {dark? "dark":"white"} MODE
        </button>

       </div>


    );

}
export default  Themechange;