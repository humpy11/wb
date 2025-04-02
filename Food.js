function Food(){
    //outside of return statement you need not use {}
    const food1 = "Orange";
    const food2 = "Apple"; 

    return(
        //inside return statement u need to use {} braces to make variables 
        <food>
            <ul>
                <li>Banana</li>
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li>

            </ul>
          <hr></hr> 
        </food>

    );
}

export default Food;