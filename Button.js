function Button(){
const handleClick =(name) => {
    let count = 0;
if (count < 3){
    count++; 
    console.log();

}

};


const handleClick2 =(name) => console.log(`${name} PLEASE STOP`);
    return(
        <button  onClick={()=>handleClick("bHEN")} className ="btn">
            CLICK ME PLS
        </button>
    );

}
export default Button;