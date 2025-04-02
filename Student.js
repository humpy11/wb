import PropTypes from 'prop-types'

function Student(props){
    console.log("Props received:", props);

    return(
        
        <div className="info">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isstudent ? "YESSIR":"NAHHH" }</p>
        </div>

    );

}
Student.defaultProps={
    name:"Guest",
    age: 0,
    isstudent: false, 

}  
Student.propTypes={
    name:PropTypes.string,
    age: PropTypes.number,
    isstudent: PropTypes.bool,
    //doesnt stop application from running just issues a warning

}

export default Student;