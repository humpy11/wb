function Profilepic(){
    const imageurl = "./assets/pfp.jpeg";
    const handleClick = (e) => e.target.style.display="none";
    return (<img onClick={(e) => handleClick(e)} src ={imageurl}/>);
}
export default Profilepic;