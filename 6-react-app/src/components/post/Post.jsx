import "./Post.css";

const Post = (props) => {
  return (
    <div className="post">
      <h3>Title: {props.title}</h3>
      <p>Body: {props.body}</p>
    </div>
  );
};

export default Post;
