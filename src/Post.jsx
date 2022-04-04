import React from 'react';

const Post = ({post}) => {
    return ( <div>
        <h2>
        {post.name}
        
        </h2>
        <p>
        {post.text}
        </p>

        <button>ClickMe</button>
        <button>ClickMe</button>
    </div> );
}
 
export default Post;