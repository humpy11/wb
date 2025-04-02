function Button(){
    let count = 0;
const handleClick =(name) => {
    
if (count < 3){
    count++; 
    console.log(`${name} u clicked me ${count} times`);

}
else{
    console.log(`${name} you nigga, stop clicking me!!`);
}

};



    return(
        <button  onClick={()=>handleClick("bHEN")} className ="btn">
            CLICK ME PLS
        </button>
    );

}
export default Button;