import video from "../data/video.js";
import Video from "./Video.js";
import Description from "./Description.js";
import LikeDislikeButton from "./LikeDislikeButton.js";
import Comments from "./Comments.js";
import { useState } from "react";

function App() {
  console.log("Here's your data:", video);
  const [like, setLike] = useState(video.upvotes);
  const [dislike, setDislike] = useState(video.downvotes);
  const [videoState, setVideoState] = useState(video);
  const [hideComment, setHideComment] = useState(false);

  function toggleComments() {
    setHideComment(!hideComment);
  }

  function addUpvotes() {
    setLike(like + 1);
    console.log(like);
  }

  function addDownVotes() {
    setDislike(dislike + 1);
  }

  return (
    <div className="App">
      <Video url={video.embedUrl} />
      <Description video={video} />
      <LikeDislikeButton text={like} emoji="👍" callback={addUpvotes} />
      <LikeDislikeButton text={dislike} emoji="👎" callback={addDownVotes} />
      <br />
      <br />
      <button onClick={toggleComments}>
        {hideComment ? "Hide Comments" : "Show Comments"}
      </button>
      {hideComment && <Comments comments={video.comments} />}
    </div>
  );
}

export default App;
