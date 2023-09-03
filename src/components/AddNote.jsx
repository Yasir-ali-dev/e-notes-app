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

  return (
    <form className='note-form' onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='Title' 
        value={note.title}  
        name='title'
        onChange={handleChange}
      />

      <textarea 
        name="text" 
        placeholder='Enter Description ...'
        value={note.text} 
        onChange={handleChange} 
        cols="30" 
        rows="10"
        type="text"
      ></textarea>

      <label htmlFor="completed">Completed{" "}  
        <input 
          type="checkbox"
          value={note.completed}
          name='completed'
          id='completed'
          onChange={handleChange}
        />
      </label>
      <input type="file" id="select_image" name="image" onChange={getImage} />  

      <input type="submit"  value={"Submit!"}/>
    </form>
  )
}

export default AddNote;