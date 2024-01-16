// action contain type and payload type is a string and payload is an object
//action={
// type:
// payload:{}
// }
//state=list hai setstate function ka access nhi h apne paas
function todoReducers(state=[],action){
if(action.type=='add_todo'){//adding todo in our todo list

    let todoText=action.payload.todoText;
return [...state,{id:state.length+1,todoData:todoText,isFinished:false}];

}
else if(action.type=='edit_todo'){
    
    let todoText=action.payload.todoText;
    let todo=action.payload.todo;
    const updatedList=state.map((t)=>{
        if(todo.id==t.id){
        
        t.todoData=todoText;    
        }
         return t;
        })

    return updatedList;

}
else if(action.type=='delete_todo'){

    let todo=action.payload.todo;
    const updatedList=state.filter((t)=>{
        return todo.id!=t.id;
            })
return updatedList;

}
else if(action.type=='finished_todo'){
let finished=action.payload.finished;
let todo=action.payload.todo;

    const updatedList = state.map((t) => {
        if (todo.id == t.id) {
          t.isFinished = finished;
        }
        return t;
      });
      return updatedList;
}
else{
    return state;
}

}

export default todoReducers