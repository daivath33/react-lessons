import { useState, useEffect } from "react";
import PostWithComments from "../postWithComments/PostWithComments";

const PostsWithComments = () => {
  const [posts, setPost] = useState([]);
  const postsExists = posts.length > 0;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((data) => {
        setPost(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {postsExists && (
        <>
          <PostWithComments post={posts[0]} />
          <PostWithComments post={posts[1]} />
        </>
      )}
    </div>
  );
};

export default PostsWithComments;
