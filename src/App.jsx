import React, { useState, Fragment } from 'react';
import DisplayEntries from "./DisplayEntries/DisplayEntries";
import CreatePost from "./CreatePost";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LikeButton from './components/LikeButton/LikeButton';
import DisplayPost from './components/DisplayPost'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import MatrialUi from './components/MaterialUi/MaterialUi';

function App() {
  const [entries, setEntries] = useState([{name: 'Madara', text: 'Wake up to reality! Nothing ever goes as planned in this world. The longer you live, the more you realize that in this reality, only pain, suffering, and futility exist.'},
  {name: 'Reiko Mikami ', text: 'It’s just pathetic to give up on something before you even give it a shot.'}])
  
  function addNewEntry(entry){
    
    let tempEntries = [entry, ...entries];
    
    setEntries(tempEntries)
  }
  
  return (
    
    <Fragment className='container-fluid'>
      <MatrialUi/>
      
      <div className='row'>
        <div classNmae='col-md-6'>
          <div className= 'border-box'>
            <NavBar />
            <DisplayEntries parentEntries={entries}/>
          </div>
            <div className= 'border-box'>
              <CreatePost addNewEntryProperty = {addNewEntry} />
            
            
          </div>
        </div>
      </div>
     
      <LikeButton />
      
    </Fragment>
  );
}


  
export default App;

