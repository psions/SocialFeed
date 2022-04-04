import React, { useState } from "react";
import DisplayEntries from "./components/DisplayEntries/DisplayEntries";


function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '04-01-2022'},{weight: 175, date: '04-01-2022'}])
    return (
    <div >
      <DisplayEntries parentEntries={entries}/>
      
    </div>
  );
}

export default App;

