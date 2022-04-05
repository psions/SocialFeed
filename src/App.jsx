import React, { useState } from "react";
import DisplayEntries from "./DisplayEntries/DisplayEntries";
import CreatePost from "./CreatePost";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "react-bootstrap";

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

  function LikeButton(){

    return(
      <div className="LikeButton">
        <br/>
        <h2>Like Button Click</h2>
        <br/>
        <LikeButton message = "Like"/>

      </div>
    )

  }
  
export default {App,LikeButton};

