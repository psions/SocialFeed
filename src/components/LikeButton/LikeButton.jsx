import React, { useState } from 'react';
import "./LikeButton.css"

const LikeButton = (props) => {

    const[buttonClass, setButtonClass] = useState("active")

    function handleClick(){
        if(buttonClass === "inactive"){
            setButtonClass("active");

        }
        else{
            setButtonClass("inactive")
        }
    }
    return ( 
        <div>
            <button className={buttonClass} onClick={handleClick}>{props.message}</button>
            
        </div>
     );
}
 
export default LikeButton;