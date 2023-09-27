import Comment from "./Comment";
import { useState } from "react";

export default function Comments({ comments }) {
  const [searchComment, setSearchComment] = useState("");

  function handleChange(e) {
    setSearchComment(e.target.value);
    const justComments = comments.map((comment) => {
      return comment.comment;
    });

    console.log(
      justComments.filter((comment) => comment.includes(e.target.value))
    );
  }
  return (
    <div>
      <input type="text" onChange={handleChange} value={searchComment} />
      <h2>{comments.length} Comments</h2>
      {comments.map((comment) => {
        return (
          <>
            <Comment key={comment.id} comment={comment} />
          </>
        );
      })}
    </div>
  );
}
