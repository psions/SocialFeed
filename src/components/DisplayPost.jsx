import React, { useState } from 'react';

const DisplayPost = (props) => {

    const [firstName, setFirstName] = useState('');
    const [comment, setComment] = useState('')

    function handleSubmit(formEvent){
        formEvent.preventDefault();
        alert('First Name: ${firstName} comment: ${comment}');
    }


    return ( 
        <form onSubmit= {handleSubmit}>
            <label>First Name </label>
            <input type= 'text' onChange={(event) => setFirstName(event.target.value)} value ={firstName}/>
            <label>Comment </label>
            <input type= 'text' onChange={(event) => setComment(event.target.value)} value ={comment}/>
            <button type='submit'>Add Comment</button>
            

        </form>
     );
}
 
export default DisplayPost;