import { Outlet } from "react-router-dom";

import PostsList from "../PostsList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8089/posts");
  const resData = await response.json();
  return resData.posts;
}
