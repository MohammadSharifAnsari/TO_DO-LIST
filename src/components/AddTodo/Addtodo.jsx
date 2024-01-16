import { useContext, useState } from "react";
import TodoDispatchContext from "../context/TodoDispatch.Context.js";
import { useDispatch } from "react-redux";
// import { addTodo } from "../actions/todoaction.js";

function AddTodo({addTodo}){

    const [inputText,setInputText]=useState('');
// const {dispatch}=useContext(TodoDispatchContext);
const dispatch=useDispatch();
    return (

<div>

<input type="text" placeholder="Add your todo.."
value={inputText}
onChange={(e)=>{setInputText(e.target.value)}}
/>

<button onClick={()=>{
    // dispatch(addTodo(inputText));
    //yahan payload object dena padta hai
    addTodo({todoText:inputText});//yeh add todo todo slice wala function hai jo use kar rhe hain
    console.log("addtodo>",addTodo);
    //yahan add todo app se aa rha hai jisme bindaction creater me bind hai now addtodo seedhe dispatch ke sath kaam kar rha hai
    // dispatch({type:'add_todo',payload:{todoText:inputText}});
    setInputText('');
}}>Add</button>


</div>

    )


}

export default AddTodo;