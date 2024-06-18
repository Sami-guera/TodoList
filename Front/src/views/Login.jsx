import React from "react";
import { useState } from "react";

function Login(){

    const [email, setEmail] = useState('') ;
    const [password, setPassword] = useState('') ;


    const handleSubmit = async (event) => {
        event.preventDefault();

      
       
            const body = JSON.stringify({
                'identifier': email,
                'password': password
            })
            const reponse = await fetch("http://localhost:1337/auth/local", {
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
                console.log("login réussit")
                console.log(data.user.username)
                window.location.href = `/home/${data.user.username}`;
            }
    



    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" value="login"/>
        </form>
    )
}export default Login