export default function LikeDislikeButton(props) {
  function handleClick() {
    props.callback();
  }

  return (
    <button onClick={handleClick}>
      {props.like && props.like > 0 ? <span>{props.like}</span> : null}
      {props.dislike && props.dislike > 0 ? <span>{props.dislike}</span> : null}

      <span style={{ margin: "0 10px " }}>{props.text}</span>
      <span>{props.emoji}</span>
    </button>
  );
}
