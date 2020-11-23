import {useState} from 'react';
//import { List } from "./List";

//import React from 'react';
import {List} from './List';
import {Form} from './Form';

function App() {
  const [description, setDescription] = useState('no clicked');
  const [tab,setTab] = useState('list');

  const changeDescription = () => {
    setDescription('clicked');
  }
  return (
    <div>
      <header>{ /** add */ }
        <ul>
          <li onClick={() => setTab('list')}>list</li>
          <li onClick={() => setTab('form')}>form</li>
        </ul>
      </header>
      <hr/>
      zero~
      {description}
      {
        tab === 'list' ? <List title="list~"/> : <Form />
      }
      <button onClick={() => setDescription('clicked')}> push me ... </button>
    </div>
  );
}

export default App;