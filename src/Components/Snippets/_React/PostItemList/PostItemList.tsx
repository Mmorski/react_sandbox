import React, { useState } from "react";
import PostItem from "../PostItem/PostItem";
import style from './PostItemList.module.css';

//--- How to use in state. Need to find a place where I can place this interface to make it visisble from the parent component
//--- Leave props: any for now
//--- P.S. Probably shoud use destructurization
//--- const PostItemList = (props: any) => {

const PostItemList = ({remove, posts}: any) => {
    return (
        <div className={style["post-list"]}>
            <h1>PostItemList</h1>
            {posts.map((post: any) => 
                <PostItem remove={remove} post={post} key={post.id}/>
            )}
      </div>
    );
}

export default PostItemList;
