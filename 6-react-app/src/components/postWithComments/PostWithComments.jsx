import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const PostWithComments = ({ post }) => {
  const [comments, setComments] = useState([]);
  const { title, body, id } = post;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setComments(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      {comments.length > 0 && (
        <div>
          <strong>{comments[0].email}</strong> - {comments[0].name}
          <div>{comments[0].body}</div>
        </div>
      )}
    </div>
  );
};

PostWithComments.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};
export default PostWithComments;
