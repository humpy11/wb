import React, { useState } from 'react';
import Displayres from "./Displayres";

function Formprac() {
    const [name, setName] = useState("Guest");
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [attemptedSubmit, setAttemptedSubmit] = useState(false); // Track if submit was attempted

    const handleSubmit = (e) => {
        e.preventDefault();
        setAttemptedSubmit(true); // Mark that user clicked submit
        if (name && mail && pass) {
            setSubmitted(true);
        } else {
            setSubmitted(false);
        }
    };

    return (
        <>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <label>ENTER NAME/Reg No: 
                    <input onChange={(e) => setName(e.target.value)} placeholder="name" />
                </label>
                <label>ENTER EMAIL ID: 
                    <input onChange={(e) => setMail(e.target.value)} placeholder="mail" />
                </label>
                <label>ENTER PASSWORD: 
                    <input onChange={(e) => setPass(e.target.value)} placeholder="password" type="password" />
                </label>
                <button type="submit">SUBMIT</button>
            </form>

            {attemptedSubmit && (submitted ? <Displayres name={name} email={mail} /> : <h2>ERROR</h2>)}
        </>
    );
}

export default Formprac;
//refer registrationform and userdetails for better code tbh 
