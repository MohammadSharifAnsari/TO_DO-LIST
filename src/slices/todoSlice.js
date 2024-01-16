import { createSlice } from "@reduxjs/toolkit";


const initialState={
    todoList:[]
}

const todoSlice=createSlice({
    name:'todo',
    initialState,
    // all logic of reducer we can write inside our reduces key
    reducers:{
        addTodo:(todo,action)=>{
//yahan par jaise reducers function me hum log har baar new array return karte hai wahqan array mutate(push pop nhi hoti) but yahan par array ko mutate kar sakte hain
let todoText=action.payload.todoText;

todo.todoList.push({id:todo.todoList.length+1,todoData:todoText,isFinished:false});
},
editTodo:(state,action)=>{

    let todoText=action.payload.todoText;
    let todo=action.payload.todo;
     state.todoList=state.todoList.map((t)=>{
        if(todo.id==t.id){
        
        t.todoData=todoText;    
        }
         return t;
        })

  
},
todoFinish:(state,action)=>{
    let finished=action.payload.finished;
    let todo=action.payload.todo;
    
        const updatedList = state.todoList.map((t) => {
            if (todo.id == t.id) {
              t.isFinished = finished;
            }
            return t;
          });
         state.todoList=updatedList;
},

deleteTodo:(state,action)=>{
    let todo=action.payload.todo;
    state.todoList=state.todoList.filter((t)=>{
        return todo.id!=t.id;
            })


}


    }
})
// console.log(todoSlice);
// console.log("actions>",todoSlice.actions);
// console.log("reducers>",todoSlice);
export const {addTodo,deleteTodo,editTodo,todoFinish}=todoSlice.actions;
export default todoSlice.reducer;
