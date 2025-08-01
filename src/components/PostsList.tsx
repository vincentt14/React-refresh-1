import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import classes from "./PostsList.module.css";

type PostData = {
  body: string;
  author: string;
  id: string;
};

function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post: PostData) => (
            <Post key={post.id} id={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding posts.</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
