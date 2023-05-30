import { useState, useEffect } from "react";
import Post from "../post/Post";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const postsExists = posts.length > 0;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <Post title="Test" body="Hello world" />
      {postsExists && (
        <>
          <Post title={posts[0].title} body={posts[0].body} />
          <Post title={posts[1].title} body={posts[1].body} />
        </>
      )}
    </div>
  );
};

export default Posts;
