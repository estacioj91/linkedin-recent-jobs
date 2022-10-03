import './App.css';
import { useReducer } from 'react';
import countReducer from './countReducer.js'
function App() {
  const INIT = {
    count: 0
  }

  const [state, dispatch] = useReducer(countReducer, INIT);
  function handleClick(e){
    if(e.target.innerText === '+'){
      dispatch('increase')
    }
    else if(e.target.innerText === '-'){
      dispatch('decrease')
    }
  }
  return (
    <div className="App">
      <div>{state.count}</div>
      <button onClick={handleClick}>-</button><button onClick={handleClick}>+</button>
    </div>
  );
}

export default App;
