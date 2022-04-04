import React, { useState } from "react";
import DisplayEntries from "./components/DisplayEntries/DisplayEntries";


function App() {

  const [entries, setEntries] = useState([{name: 175, text: '04-01-2022'},{name: 175, text: '04-01-2022'}])
    return (
    <div >
      <DisplayEntries parentEntries={entries}/>
      
    </div>
  );
}

export default App;

