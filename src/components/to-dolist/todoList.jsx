import { useContext, useState } from "react";
import Todo from "../to-do/Todo.jsx";
import { useDispatch, useSelector } from "react-redux";
// import TodoContext from "../context/TodoContext";
// import TodoDispatchContext from "../context/TodoDispatch.Context";

//jaese hi Addtodo ko click karen ek todo list me add ho jana chahiye mena ek entry List me add honi chaiye
function TodoList({onDelete,onEdit,todoFinish}) {
  // const { List} = useContext(TodoContext);
// const {dispatch}=useContext(TodoDispatchContext);
const dispatch=useDispatch();
const List=useSelector((state)=>{
  console.log("state>",state);

// return state.todo;
return state.todoList;
})
console.log("list>",List);

//   function onFinished(finished,todo){
  
// dispatch({
//   type:'finished_todo',
//   payload:{
//     finished:finished,
//     todo
//   }
// })

//   }
//   function onDelete(todo){
//     dispatch({
//       type:'delete_todo',
//       payload:{
  
//     todo:todo
//       }
//     })

//    }
// function onEdit(todoText,todo){

// dispatch({
//   type:'edit_todo',
//   payload:{
// todoText:todoText,
// todo:todo
//   }
// })
//                   }

  return (
    <div>
      <div>
        {List.length > 0 &&
          List.map((todo) => {
            return (
              <Todo
                id={todo.id}
                key={todo.id}
                todoData={todo.todoData}
                isFinished={todo.isFinished}
                todoFinish={(finished)=>{todoFinish({finished,todo})}}
                onDelete={()=>{onDelete({todo:todo})}}
                onEdit={(todoText)=>{onEdit({todoText,todo})}}
              />
            );
          })}

      </div>
    </div>
  );
}

export default TodoList;
