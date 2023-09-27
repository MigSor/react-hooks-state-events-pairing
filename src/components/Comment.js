import { useState } from "react";
import LikeDislikeButton from "./LikeDislikeButton";

export default function Comment({ comment }) {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  function addLikes() {
    setLikeCount(likeCount + 1);
  }

  function addDislikes() {
    setDislikeCount(dislikeCount + 1);
  }

  return (
    <div>
      <h3>{comment.user}</h3>
      <p>{comment.comment}</p>
      <LikeDislikeButton
        text="LIKE"
        emoji="👍"
        like={likeCount}
        callback={addLikes}
      />
      <LikeDislikeButton
        text="DISLIKE"
        emoji="👍"
        dislike={dislikeCount}
        callback={addDislikes}
      />
    </div>
  );
}
