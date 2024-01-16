import { bindActionCreators } from "redux"
import { FINISH_TODO,EDIT_TODO,ADD_TODO,DELETE_TODO } from "../constants/actions.JS"
export function onEdit(todoText,todo){

return {
    type:EDIT_TODO,
    payload:{
  todoText:todoText,
  todo:todo
    }
  }

}
export function addTodo(inputText){

return{type:ADD_TODO,payload:{todoText:inputText}}
}
export function onFinished(finished,todo){
  
  return {
      type:FINISH_TODO,
      payload:{
        finished:finished,
        todo
      }
    }
    
      }
export function onDelete(todo){
    return   {
          type:DELETE_TODO,
          payload:{
      
        todo:todo
          }
        }
    
       }

      