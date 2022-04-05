import React, { useState } from 'react';
import DisplayEntries from "./DisplayEntries/DisplayEntries";
import CreatePost from "./CreatePost";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LikeButton from './components/LikeButton/LikeButton';
import DisplayPost from './components/DisplayPost';
import './App.css'
function App() {

  const [entries, setEntries] = useState([{name: 'Madara', text: 'Wake up to reality! Nothing ever goes as planned in this world. The longer you live, the more you realize that in this reality, only pain, suffering, and futility exist.'},
  {name: 'Reiko Mikami ', text: 'It’s just pathetic to give up on something before you even give it a shot.'}])
 
  function addNewEntry(entry){
    
    let tempEntries = [entry, ...entries];
    
    setEntries(tempEntries)
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div classNmae='col-md-6'>
          <div className= 'border-box'>
            <DisplayEntries parentEntries={entries}/>
          </div>
            <div className= 'border-box'>
              <CreatePost addNewEntryProperty = {addNewEntry} />
            </div>
           

        </div>
        <div classNmae='col-md-6'>
          <div className='border-box'>
            <CreatePost addNewEntryProperty = {addNewEntry} />
          </div>
        </div>
      </div>
      <DisplayEntries parentEntries={entries}/>
      
      <LikeButton />
      <DisplayPost />
    </div>
  );
}


  
export default App;

