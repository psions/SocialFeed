import React, { useState } from 'react';
import "./LikeButton.css"

const LikeButton = (props) => {

    const[likeButtonClass, setLikeButtonClass] = useState("inactive")
    const[dislikeButtonClass, setDislikeButtonClass] = useState("inactive")

    function handleLike(){
        if(likeButtonClass === "inactive"){
            setLikeButtonClass("active");
            setDislikeButtonClass("inactive")
        }
        else{
            setLikeButtonClass("inactive")
        }
    }

    function handleDislike(){
        if(dislikeButtonClass === "inactive"){
            setDislikeButtonClass("active");
            setLikeButtonClass("inactive");
        }
        else{
            setDislikeButtonClass("inactive")
        }
    }
    return ( 
        <div>
            <button className={likeButtonClass} onClick={handleLike}>Like</button>
            <button className={dislikeButtonClass} onClick={handleDislike}>Dislike</button>
            
        </div>
     );
}
 
export default LikeButton;