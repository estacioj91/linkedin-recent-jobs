import logo from './logo.svg';
import './App.css';
import UserContext from './UserContext';
import { useContext } from 'react';
import { useState } from 'react';

function One(){
  const {count, setCount} = useContext(UserContext);

  return (
    <button onClick={() => {
      setCount(count+1)
    }}>+</button>
  )
}
function Two(){
  const {count, setCount} = useContext(UserContext);
  return (
    <div className="">{count}</div>
  )
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <UserContext.Provider value={{count, setCount}}>
        <One></One>
        <Two></Two>
      </UserContext.Provider>
    </div>
  );
}

export default App;
