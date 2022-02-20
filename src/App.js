import { useReducer } from 'react';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
import './App.css';

const initState = {
  items: [
    {id: 0, name: 'milk'}, 
    {id: 1, name: 'coffee'},
    {id: 2, name: 'mochi'},
  ]
};

const listReducer = (state, action) => {
  console.log(action);
  switch(action.type){
    case 'ADD_ITEM' :
      return {
        ...state,
        items: state.items.concat([{id: state.items.length, name: action.payload}])
      }
  case 'REMOVE_ITEM' :
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      }
  default: 
    return state;
  }

}


function App() {

  const [state, dispatch ] = useReducer(listReducer, initState)
  const { items } = state;

  return (
    <div className="app-container">
      <div className="input-container">
        <AddItem dispatch={dispatch}/>
      </div>
      <div className="list-container">
        {
          items.map(item => {
            return (
              <ListItem key={item.id} item={item} dispatch={dispatch}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
