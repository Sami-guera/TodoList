import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";


function FormTodoCreate() {
    const [titre, setTitre] = useState('');
    const [desc, setDesc] = useState('');
    const author = useParams().username;
    const handleSubmit = async (e) => {
        e.preventDefault();
        //on vérifie qu'un petit malin n'essaye pas d'envoyer une chaine de vide " "(sécurité à déplacer côté back à l'avenir) 
        if (titre.trim().length == 0) {
            console.log('Il faut un titre');
        } else {
            const body = JSON.stringify({
                'author': author,
                'titre': titre,
                'desc': desc
            })
            console.log(body);
            const reponse = await fetch("http://localhost:1337/todos", {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: body,
            })
            const data = await reponse.json();
            console.log(data);
        }
        setTitre('');
        setDesc('');
    }

    return (
        <div className="todoCreate">
            <h4>Formulaire de création de tâches</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" value={titre} required onChange={(e) => setTitre(e.target.value)} placeholder="titre"/>
                <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)}  placeholder="description (facultative)"/>
                <input type="submit" value={"enregistrer"} />
            </form>
        </div>
    )
}
export default FormTodoCreate