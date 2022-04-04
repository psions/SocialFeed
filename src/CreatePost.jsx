import React, { useState } from 'react';



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
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type= 'name' value ={name} onChange={(event) => setName((event.target.value))}/>
            <label>Comment</label>
            <input type= 'text' value = {text} onChange={(event) => setText(event.target.value)} />
            <button type = 'submit'>Add</button>
        </form>
     );



}
 
export default CreatePost;