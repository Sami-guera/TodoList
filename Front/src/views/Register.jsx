import React from "react";
import { useState } from "react";



function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password != passwordConf) {
            console.log('bad password');
            console.log(password + '\n');
            console.log(passwordConf + '\n');
        } else {

            const body = JSON.stringify({
                'username': username,
                'email': email,
                'password': password
            })
            const reponse = await fetch("http://localhost:1337/auth/local/register", {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                },
                body: body,
            })
            const data = await reponse.json();

            if(!reponse.ok){
                
                console.log(data.message);
            }else{
                console.log("enregistrement réussit");
                localStorage.setItem('token', data.jwt)
                window.location.href = '/login';
            }
        }



    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" required />
            <input type="password" value={passwordConf} onChange={(e) => setPasswordConf(e.target.value)} placeholder="password-confirmation" required />
            <input type="submit" value="valider" />
        </form>
    )
} export default Register