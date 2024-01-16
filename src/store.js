import {createStore,combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit';

//import todoreducer function

import todoReducers from './slices/todoSlice.js';
// import todoReducers from './components/reducers/todoReducer';

// const reducer=combineReducers({todo:todoReducers});

// const store=createStore(reducers);

console.log("todoreducer>",todoReducers);
const store = configureStore({
//todoReducers-> is an object that contain reducers
//yahan reducer me state dete hai todoReducers ki jo state wahi state humne aage paas kar di


    reducer:todoReducers,
    
//we can apply middleware here
devTools:process.env.NODE_ENV!='production'//-> iska matlab agar environment production environment nhi hai to hum log dev tools enable kr denge
});
console.log("todoreducer>",todoReducers);
console.log("store>",store);
// store se yeh print ho rha hai
/*
@@observable
: 
()=> {…}
dispatch
: 
ƒ ()
getState
: 
ƒ a()
liftedStore
: 
{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}
replaceReducer
: 
ƒ replaceReducer(r)
subscribe
: 
ƒ subscribe(listener)
[[Prototype]]
: 
Object
*/


export default store;