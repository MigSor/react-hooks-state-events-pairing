export default function Description({ video }) {
  return (
    <>
      <h1>{video.title}</h1>
      <p>
        {video.views} | Uploaded {video.createdAt}
      </p>
    </>
  );
}
