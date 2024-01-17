import React, { useState } from 'react';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''}) 
    const addNewPost = () => {

        const newPost = {
            ...post, id:Date.now()
        }
        create(newPost)
        
    }
    return (
        
        <div>
            <input placeholder='title' onChange={e => setPost({...post, title: e.target.value})}></input>
            <input placeholder='body' onChange={e => setPost({...post, body: e.target.value})}></input>
            <button onClick={addNewPost}>Add</button>
        </div>
    );
};

export default PostForm;