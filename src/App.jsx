import React, { useState } from "react";
import DisplayEntries from "./components/DisplayEntries/DisplayEntries";
import CreatePost from "./CreatePost";


function App() {

  const [entries, setEntries] = useState([{name: 'Madara', text: 'Wake up to reality! Nothing ever goes as planned in this world. The longer you live, the more you realize that in this reality, only pain, suffering, and futility exist.'},
  {name: 'Reiko Mikami ', text: 'It’s just pathetic to give up on something before you even give it a shot.'}])
 
  function addNewEntry(entry){
    
    let tempEntries = [entry, ...entries];
    
    setEntries(tempEntries)
  }
 
 
  return (
    <div >
      <DisplayEntries parentEntries={entries}/>
      <CreatePost addNewEntryProperty = {addNewEntry} />
      
    </div>
  );
}

export default App;

