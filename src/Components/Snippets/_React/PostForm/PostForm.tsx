import React, { useState } from "react";
import style from './PostForm.module.css';

//--- "Any" get rid of it!
const PostForm = ({create}: any) => {

    const [post, setPost] = useState({title: "", description: ""})

    //--- "Any" get rid of it!
    //--- Also do type for the post object
    const addPost = (e: any) => {
        e.preventDefault();

        const newPost = {
            ...post,
            id: Date.now()
        };

        create(newPost);
        setPost({title: "", description: ""});
    }

    return (
        <form className={style["post-form"]}>
            <h1>PostForm</h1>
            <input
                value={post.title}
                type="text"
                placeholder="Post's title"
                onChange={e => setPost({...post, title: e.target.value})}
            />
            <input
                value={post.description}
                type="text"
                placeholder="Post's description"
                onChange={e => setPost({...post, description: e.target.value})}
            />
            <button onClick={addPost}>Create post</button>
        </form>
    );
}

export default PostForm;
