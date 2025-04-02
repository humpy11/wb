import React, {Component} from 'react'; 
class ClassClock extends Component{
    constructor(props){
        super(props); 

        this.state ={
            time: new Date(),
        }


    }
    componentDidMount(){
         this.interval = setInterval(()=> {
            this.setState(()=>({time: new Date(), })); 
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval); 
    }

    formattime(){
        let hrs = this.state.time.getHours(); 
        let mins = this.state.time.getMinutes(); 
        let secs = this.state.time.getSeconds(); 
        return `${hrs}:${mins}:${secs}`;
    }






    render(){
        return(
            <>
            <h1>THE TIME IS</h1>
            <h2>{this.formattime()}</h2>
            </>
        );
    }
}
export default ClassClock; 