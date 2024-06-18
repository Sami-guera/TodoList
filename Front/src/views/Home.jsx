import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import FormTodoCreate from '../components/FormTodoCreate';
import GetTodos from '../components/GetTodos';
function Home() {
const user = useParams().username;


    return (
        <div>
       <p>Bienvenue <strong>{user}</strong></p>
       <FormTodoCreate/>
       <GetTodos />
</div>
    )
}
export default Home;