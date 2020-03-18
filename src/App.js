import React from 'react';
import './App.css';
import records from './records.json' 
import TreeHierachy from './TreeHierachy';

function App() {
  return (
    <div className="App">
      <TreeHierachy records={records}/>
    </div>
  );
}



export default App;
