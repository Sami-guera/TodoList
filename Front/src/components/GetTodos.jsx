import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function GetTodos() {
    const username = useParams().username;
    const [todoList, setTodoList] = useState([]);

    const getTask = async () => {
        const reponse = await fetch(`http://localhost:1337/todos?author=${username}`,{
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        })
        const data = await reponse.json();
        setTodoList(data);
        console.log(data[0].titre)
    } 


    useEffect(() => {
        getTask()
    }
        , [])


    return (
        <div className="todoList">
            <p>oui</p>
            {todoList.map(todo => (
                <li key={todo.id}>
                    <h4>{todo.titre}</h4>
                    <p>{todo.desc}</p>
                    <p>{todo.finie ? 'finie': 'a faire'}</p>
                </li>
            ))}
        </div>
    )
}
export default GetTodos;