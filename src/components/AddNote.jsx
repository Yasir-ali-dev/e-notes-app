import React, {  useState } from 'react';
import { useTaskDispatch } from './TasksContext';

const AddNote = () => {
  const [note,setNote]=useState({
    id : "", 
    title : "",
    text :"",
    completed:false,
    image :""
  });
  const dispatch =useTaskDispatch();

  const handleChange=(e)=>{
    const {name,value,checked}=e.target;
    if(value){
      setNote({
        ...note,
        [name]: value,
      });
    }
    else{
      setNote({
        ...note,
        [name]: checked,
      });
    }
  }

  const getImage=(e)=>{
    setNote({
      ...note,
      image : e.target.value
    });
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const id = new Date().getMilliseconds()*Math.floor(Math.random()*100000);
    dispatch({
      type:"added",
      note:note,
      id:id 
    })
    setNote({
      id : "", 
      title : "",
      text :"",
      completed:false,
      image :""
    })
  }
  const handleUpperCase=(e)=>{
    e.preventDefault()
    setNote((prevNote)=> {
      return{
        ...prevNote,
        text : note.text.toUpperCase()
      } 
    })
  }

  const handleLowerCase=(e)=>{
    e.preventDefault();
    setNote(prevNote => {
      return {
        ...prevNote,
        text : prevNote.text.toLowerCase()
      }
    })
  }

  const handleCapitalize =(e)=>{
    e.preventDefault()
    
  }

  const handleClear =(e)=>{
    e.preventDefault();
    setNote(prevNote => {
      return {
        ...prevNote,
        text : "",
      }
    })
  } 

  return (
    <form className='note-form' onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='Title' 
        value={note.title}  
        name='title'
        onChange={handleChange}
        className='note-input'
      />

      <textarea 
        name="text" 
        placeholder='Enter Description ...'
        value={note.text} 
        onChange={handleChange} 
        cols="80" 
        rows="10"
        type="text"
        className='note-input'
      
      ></textarea>
      <div className="group-btn">
        <button className='a-link' onClick={handleUpperCase}>uppercase</button>
        <button className='a-link' onClick={handleCapitalize}>Capitalize</button>
        <button className='a-link' onClick={handleLowerCase} >lowercase</button>
        <button className='a-link' onClick={handleClear}>Clear text</button>
      </div>

      <input type="submit" className='btn' value={"Submit!"}/>

    </form>
  )
}

export default AddNote;