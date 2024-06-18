import React from "react";
import { useState } from "react";

function TodoCard({ todo, onDelete, onUpdate }) {
    const [edition, setEdition] = useState(false);
    const [nouveauTitre, setNouveauTitre] = useState(todo.titre);
    const [nouvelleDesc, setNouvelleDesc] = useState(todo.desc);

    const handleEditSubmit = (e) => {
        e.preventDefault();
        onUpdate(todo.id, { titre: nouveauTitre, desc: nouvelleDesc });
        setEdition(false);
      };

    return (
        <div className="TodoCard">
            {edition ? (
                <form onSubmit={handleEditSubmit}>
                    <input type="text" value={nouveauTitre} onChange={(e) => setNouveauTitre(e.target.value)} />
                    <input type="text" value={nouvelleDesc} onChange={(e) => setNouvelleDesc(e.target.value)} />
                    <input type="submit" value="enregistrer" />
                    <button onClick={() => setEdition(false)}>annuler</button>
               
                </form>
            ) : (
                <>
                    <h3>{todo.titre}</h3>
                    <p>{todo.desc}</p>
                    <br />
                    <button onClick={() => onDelete(todo.id)}>Delete</button>
                    <button onClick={() => onUpdate(todo.id, { finie: !todo.finie })}>
                        {todo.finie ? "à faire" : "fait!"}
                    </button>
                    <button onClick={() => setEdition(true)} >edit</button>

                    
                </>



            )
            }   </div>

    )
}

export default TodoCard;