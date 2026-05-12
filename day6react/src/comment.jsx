import { useState } from "react";
import "./comment.css";
import CommentForm from "./commentForm";


export default function Comment() {
  let [commentArr, setCommentArr] = useState([
    {
      username: "@sk",
      text: "1st comment ",
      rating: 5,
    },
  ]);

  let handleComment = (comment) => {
    setCommentArr((currArr) => {
      //   return {
      //     ...currArr, //this {} make it as object, not array
      //     comment,
      //   };
      return [...currArr, comment]; //this is ok
    });
  };
  return (
    <div>
      <h3>All Comments</h3>
      {commentArr.map((comment, idx) => ( // in js using {} without return cause value undefing
        <div className="comment" key={idx}>
          <span>"{comment.text}"</span>
          &nbsp;
          <span>Rating={comment.rating}</span>
          <p>- {comment.username}</p>
        </div>
      ))}
      <br />
      <CommentForm addnewComment={handleComment} />
    </div>
  );
}
