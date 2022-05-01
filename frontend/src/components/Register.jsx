import "./register.css";
import RoomIcon from '@mui/icons-material/Room';
import CancelIcon from '@mui/icons-material/Close';
import { useState, useRef } from "react";
import axios from "axios";

export default function Register({setShowRegister}) {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            username: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        if (newUser.username.length < 3 || newUser.username.length > 20){
            setError(true);
            var errorMessage = "Ensure your username is within 3 to 20 characters";
            window.alert(errorMessage);
        }
        else if (newUser.password.length < 3 || newUser.password.length > 20){
            setError(true);
            var errorMessage2 = "Ensure your password is within 3 to 20 characters";
            window.alert(errorMessage2);
        }

        else {
        try {
            await axios.post("/users/register", newUser);
            setError(false);
            setSuccess(true);

        }catch(err){
            setError(true);
        }
    }

    }
    return (
        <div className="registerContainer">
            <div className="logo">
            <RoomIcon/>
            PinPlace
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" ref={nameRef}></input>
                <input type="email" placeholder="email" ref={emailRef}></input>
                <input type="password" placeholder="password" ref={passwordRef}></input>
                <button className="registerButton">Register</button>
                {success && 
                <span className="success">Successful! You can now sign in.</span>
            }
            {error &&
                <span className="failure">Something went wrong.</span>
            }
            </form>
            <CancelIcon className="registerCancel" onClick={()=> setShowRegister(false)}/>
        </div>
    );
}