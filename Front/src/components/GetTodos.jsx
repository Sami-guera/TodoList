import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TodoCard from "./TodoCard"
function GetTodos() {
    const username = useParams().username;
    const [todoList, setTodoList] = useState([]);

    const getTask = async () => {
        const reponse = await fetch(`http://localhost:1337/todos?author=${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        })
        const data = await reponse.json();
        setTodoList(data);
    }

    const handleDelete = async (id) => {
        try {
            reponse = await fetch(`http://localhost:1337/todos/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            });
            if (!reponse.ok) {
                console.log('une erreur à eue lieu lors du delete')
            }
            getTask();
        } catch (error) {
            console.log(error);
        }
    }
    const handleUpdate = async (id, update) => {
        try {
            const reponse = await fetch(`http://localhost:1337/todos/${id}`, {
                'method': 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
                body : JSON.stringify(update),
            });
            if (!reponse.ok) {
                console.log("erreur lors de l'update");
            }
            getTask();
        } catch (error){
            console.log(error);
        }
    }
getTask();

    return (
        <div className="todoList">
            <p>oui</p>
            {todoList.map(todo => (
                <li key={todo.id}>
                    <TodoCard todo={todo} onDelete={handleDelete} onUpdate={handleUpdate} />
                </li>
            ))}
        </div>
    )
}
export default GetTodos;