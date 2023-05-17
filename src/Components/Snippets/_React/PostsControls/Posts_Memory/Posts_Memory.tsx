import React, { useState } from "react";
import PostItemList from "../../PostItemList/PostItemList";
import PostForm from "../../PostForm/PostForm";
import style from './Posts_Memory.module.css';

const Posts_Memory = () => {

  const [posts, setPosts] = useState([
    {id: 1, title: "Post-1", description: "description: Post-1 from memory"},
    {id: 2, title: "Post-2", description: "description: Post-2 from memory"},
    {id: 3, title: "Post-3", description: "description: Post-3 from memory"}
  ]);

  const createPost = (post: any) => {
    setPosts([...posts, post]);
  }

  const removePost = (post: any) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className={style["posts-memory"]}>
      <PostItemList remove={removePost} posts={posts}/>
      <PostForm create={createPost}/>
    </div>
  );
}

export default Posts_Memory;
