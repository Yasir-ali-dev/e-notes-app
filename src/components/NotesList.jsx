import { useState } from 'react';
import { useTask, useTaskDispatch } from './TasksContext';
import {AiOutlineCheck , } from "react-icons/ai";
import {BsCheck2All} from "react-icons/bs"

const NotesList = () => {
    const notes = useTask();
    return (
    <ul className='card'>
        {notes.map((note)=>{
            return <Note key={note.id} note={note}/>
        })}
    </ul>
  )
}

const Note=({note })=>{
    const dispatch= useTaskDispatch();
    const [isEdited,setIsEdited]=useState(false);

    let editedContent;

    if(isEdited){
        editedContent=(
         <>

         </>   
        )
    }

    const handleEdit=()=>{

    }

    return (
        <li>
            <h2>{note.title}</h2>
            <img src={note.image} alt={note.title} width={"250px"} />
            <p>{note.text}</p>
            
            <button onClick={handleEdit} >Edit</button>

            <button
            >
                { !note.completed ? <AiOutlineCheck size={"2em"}/> : <BsCheck2All size={"2em"}/> }
            </button>
            <button onClick={
                () => dispatch({id: note.id , type :"delete" })}
            >Delete</button>
        </li>
    )

}

export default NotesList
