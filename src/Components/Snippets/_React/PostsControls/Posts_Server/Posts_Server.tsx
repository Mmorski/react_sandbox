import React, { useEffect, useState } from "react";
import PostItemList from "../../PostItemList/PostItemList";
import PostForm from "../../PostForm/PostForm";
import style from './Posts_Server.module.css';
import axios from "axios";
import { StringMappingType } from "typescript";
import PostService from "../../API/PostService";

const Posts_Server = () => {

  const [posts, setPosts]: any = useState([]);

  useEffect(() => {
    fetchPosts();
  }, [])

  const createPost = (post: any) => {
    setPosts([...posts, post]);
  }

  const removePost = (post: any) => {
    setPosts(posts.filter((p: any) => p.id !== post.id))
  }

  async function fetchPosts() {
    const posts = await PostService.getAllPosts();
    setPosts(posts);
  }

  return (
    <div className={style["posts-server"]}>
      <PostItemList remove={removePost} posts={posts}/>
      <PostForm create={createPost}/>
    </div>
  );
}

export default Posts_Server;
