import "./login.css";
import RoomIcon from '@mui/icons-material/Room';
import CancelIcon from '@mui/icons-material/Close';
import { useState, useRef } from "react";
import axios from "axios";


export default function Login({setShowLogin, myStorage, setCurrentUser}) {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const nameRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            username: nameRef.current.value,
            password: passwordRef.current.value,
        };

        if (user.username.length < 3 || user.username.length > 20){
            var errorMessage = "Ensure your username is within 3 to 20 characters";
            window.alert(errorMessage);
            setError(true);
        }
        else if (user.password.length < 3 || user.password.length > 20){
            var errorMessage2 = "Ensure your password is within 3 to 20 characters";
            window.alert(errorMessage2);
            setError(true);
        }
        else {

        try {
            const res = await axios.post("/users/login", user);
            myStorage.setItem("user", res.data.username)
            setCurrentUser(res.data.username)
            setError(false);
            setShowLogin(false);
            setSuccess(true);

        }catch(err){
            setError(true);
        }
    }

    }
    return (
        <div className="loginContainer">
            <div className="logo">
            <RoomIcon/>
            PinPlace
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" ref={nameRef}></input>
                <input type="password" placeholder="password" ref={passwordRef}></input>
                <button className="loginButton">Sign In</button>
                
                {success && 
                <span className="success">You are now signed in!</span>
            }
            {error && 
                <span className="failure">Something went wrong.</span>
            }
            </form>
            <CancelIcon className="loginCancel" onClick={()=> setShowLogin(false)}/>
        </div>
    );
}