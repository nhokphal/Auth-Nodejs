import { legacy_createStore as createStore } from 'redux';


const initialize = 0;
const reducer = (state = initialize, action) => 
{
    // eslint-disable-next-line default-case
    switch(action.type)
    {
        case 'increment':           
            return state + 1;
        case 'decrement':
            return state - 1;
        default: 
            return state;
    }
}

const store = createStore(reducer);
store.dispatch = ({type: 'increment'})
console.log(store.getState());
