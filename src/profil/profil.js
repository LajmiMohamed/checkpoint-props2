import React from 'react'
import img from "./photoprofil.jpg";

const Profil =props=> {
   
    
    return (
       
        <div>
            <img style={{width:"500px",height:"500px"}}src={img}/>
           
            <p> {`My name is ${props.fullName} and i'm ${props.profession} in ${props.bio}` }</p>
            <a href="/" onClick={props.handleName(props.fullName)}>my Name</a>
        </div>
    )
};

export default Profil;
