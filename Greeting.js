import PropTypes from 'prop-types';
function Greeting(props){
    
        const welcome = <h2 className="wc">WELCOME {props.username}</h2>
        
        const login = <h2 className="login">PLEASE LOGIN FIRST!</h2>
    

        return(props.islogged ? welcome :login);
}

Greeting.defaultProps ={
    islogged: false, 
    username: "guest"
}

export default Greeting;