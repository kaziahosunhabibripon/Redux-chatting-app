import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import firebase from "firebase/app";
import {auth, provider} from '../firebaseConfig/firebase';
const Login = () => {
    const signIn = ()=>{
        auth.signInWithPopup(provider).catch((error)=>alert(error.message));
    };
    return (
        <div className="login">
            {/* <h2>Login</h2> */}
            <div className="login_logo">
                <img src="https://i.ibb.co/rddBLbr/chatting.png" alt="chatting_logo" />
            </div>
            <Button onClick={signIn}>Sign in</Button>
        </div>
    );
};

export default Login;