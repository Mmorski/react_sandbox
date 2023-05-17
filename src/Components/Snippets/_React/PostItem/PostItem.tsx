import React, { useState } from "react";
import style from './PostItem.module.css';

//--- How to use in state. Need to find a place where I can place this interface to make it visisble from the parent component
//--- Leave props: any for now

interface PostItemProps {
    id: number;
    title: string;
    description: string;
}

const PostItem = (props: any) => {
    return (
        <div className={style["post"]}>
            <h1>PostItem</h1>
            <div className="post_content">
                <strong>{props.post.id}, {props.post.title}</strong>
                <div>
                    {props.post.description}
                </div>
            </div>
            <div className="post_btn">
                <button onClick={() => props.remove(props.post)}>Delete</button>
            </div>
      </div>
    );
}

export default PostItem;
