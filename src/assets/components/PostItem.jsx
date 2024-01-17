import React, { useState } from 'react';

const PostItem = (props) => {
    console.log(props)
    return (
        <div>
            <div className="post">
				<div className="post__content">
					<div className="title">{props.post.title}</div>
					<div>{props.post.body}</div>
					<button>delete</button>

				</div>
			</div>
        </div>
    );
};

export default PostItem;