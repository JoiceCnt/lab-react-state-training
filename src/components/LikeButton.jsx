import { useState } from "react";

function LikeButton() {
  const [like, setLike] = useState(0);
  return (
    <div className="like">
      <button onClick={() => setLike(like + 1)}> {like} increase </button>
      <button onClick={() => setLike(like - 1)}>{like} decrease </button>
    </div>
  );
}

export default LikeButton;
