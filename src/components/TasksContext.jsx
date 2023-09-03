import React, { createContext, useContext, useReducer } from 'react';
import { initialState } from './data';

const Context = createContext(null);
const TasksContextDispatch = createContext(null);


 const TasksContext = ({children}) => {
    const [state,dispatch]=useReducer(taskReducer,initialState);

  return (
    <Context.Provider value={state}>
        <TasksContextDispatch.Provider value={dispatch}>
            {children}
        </TasksContextDispatch.Provider>
    </Context.Provider>
  )
}

const taskReducer=( state , action )=>{
    switch(action.type){
        case "added":{
            return[...state,{
                ...action.note, 
                id : action.id,  
                }
            ]
        }
        case "change" :{
        }

        case "delete" : {
            return state.filter (note => note.id !== action.id)
        }

        default : {
            throw new Error ("Unknown Action Error",action.type);
        }
    }
}

export const useTask=()=>{
    return useContext(Context);
} 

export const useTaskDispatch=()=>{
    return useContext(TasksContextDispatch);
} 



export default TasksContext;