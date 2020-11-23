//import {useState} from 'react';
//import { List } from "./List";

import React from 'react';
import {List} from './List';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {description: 'no clicked'}
  }
  changeDescription(){
    this.setState({
      description: 'clicked'
    })
  }
  render() {
    const {description} = this.state;
    return (
      <div>
        {description}
        クラスコンポーネントにしてみました。
        <List title="一覧"/>
        <button onClick={()=>this.changeDescription()}>push me</button>
      </div>
    )
  }
}
/* ************************
function App() {
  const [description, setDescription] = useState('no clicked');
  const changeDescription = () => {
    setDescription('clicked');
  }
  return (
    <div>
      zero~
      {description}{
      <List title="取り扱い言語一覧"/> { }
      <button onClick={changeDescription}> push me ... </button>
    </div>
  );
}
********************** */


export default App;
