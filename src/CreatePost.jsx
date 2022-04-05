import React, { useState } from 'react';
import './CreatePost.css';



const CreatePost = (props) => {

    const [name, setName] = useState(0);
    const [text, setText] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            name: name,
            text : text
        };
        console.log(newEntry)
        props.addNewEntryProperty(newEntry)
    }


    
    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
            <label>Name</label>
            <input type= 'name' className='form-control' value ={name} onChange={(event) => setName((event.target.value))}/>
            </div>
            <div className='form-group'>
            <label>Comment</label>
            <input type= 'text' className='form-control' value = {text} onChange={(event) => setText(event.target.value)} />
            </div>
            <button type = 'submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Add</button>
        </form>
     );



}
 
export default CreatePost;