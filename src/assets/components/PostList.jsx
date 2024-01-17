import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts }) => {
	return (
		<div>
			<h1>PostList</h1>
			{posts.map((post) => (
				<PostItem post={post} key={post.id}></PostItem>
			))}
		</div>
	);
};

export default PostList;
