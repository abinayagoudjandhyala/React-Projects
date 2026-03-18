import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../data";

const Post = () => {
  const { id } = useParams();

  const post = blogData.find((p) => p.id === parseInt(id));

  if (!post) return <h2>Post not found</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;