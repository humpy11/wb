import  React, {Component} from 'react'; 
class NewToggleSw extends Component{
    constructor(props){
        super(props); 

        this.state ={
            ison: false,
        }

    }
    toggler =()=>{
        this.setState((prev)=>({ison: !prev.ison, }))
    }


    render(){
        return(
            <>
            <button onClick={this.toggler}>CLICK ME TO TOGGLE TO {this.state.ison? "OFF":"ON"}</button>
            <h1>PRESENT STATE IS {this.state.ison? "on":"off"}</h1>
            </>
        ); 
    }
}

export default NewToggleSw; 
