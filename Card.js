
import pfp from "./assets/pfp.jpeg"
function Card(){
    return(
        <div className ="card">
            <img src ={pfp} className= "cardimage"/>
            <h3>Bhenedix Paul</h3>
            <p>I study Btech CSE</p>

        </div>

    );
}
export default Card