import { useReducer, useState } from "react";
import TodoList from "./components/to-dolist/todoList.jsx";
import TodoDispatchContext from "./components/context/TodoDispatch.Context.js";
import "./App.css";
import AddTodo from "./components/AddTodo/Addtodo.jsx";
import TodoContext from "./components/context/TodoContext.js";
import todoReducers from "./components/reducers/todoReducer.js";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
// import { onEdit,addTodo,onFinished,onDelete } from "./components/actions/todoaction.js";
import todoSlice,{ addTodo,editTodo,deleteTodo,todoFinish }  from "./slices/todoSlice.js";

//TodoContext is an object TodoContext.Provider is used as an parent which every child and descenders have an access of the states define in TodoContext.provider

function App() {
  //finished using ki koi todo complete hua hai ya nhi
  // const [List,setList]=useState([{id:1,todoData:"todo1",isFinished:false},{id:2,todoData:"todo2",isFinished:false}]);
  // const [List, dispatch] = useReducer(todoReducers, []);
  //argument 1 of useReducers take function of reducers and second argument use initial state
  //and it gives list object and dispatch function which expect only one argument action object
  // console.log("List=>", List);
  const dispatch=useDispatch();

  const action=bindActionCreators({ addTodo,editTodo,deleteTodo,todoFinish},dispatch); //iske jagah todoSlice me bane reducers ka us

  return (
    //yahan pay dispatch ki value dekar har jagah bhej sakte hain
//     <TodoContext.Provider value={{ List }}>
// <TodoDispatchContext.Provider value={{dispatch}}>
<>

      {/* <AddTodo addTodo={action.addTodo}/>
    <TodoList onEdit={action.onEdit} onFinished={action.onFinished} onDelete={action.onDelete} /> */}
     
      <AddTodo addTodo={action.addTodo}/>
      <TodoList onEdit={action.editTodo} todoFinish={action.todoFinish} onDelete={action.deleteTodo} />
     

  
     
      </>
     
        /* </TodoDispatchContext.Provider>
    </TodoContext.Provider> */
    
  );
}

export default App;
