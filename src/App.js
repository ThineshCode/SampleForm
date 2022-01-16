import React,{useState} from 'react';
import './App.css';
import Form from './Form'
import Table from './Table'

function App() {
  const [tableProps, settableProps] = useState('')
  const displayTableProps = (props) => {
    console.log(props);
    settableProps(props)
  }
  return (
    <div className="App">
      <Form displayTableProps={displayTableProps}/>
      {tableProps ? <Table tableProps={tableProps}/> : '' }
    </div>
  );
}

export default App;
