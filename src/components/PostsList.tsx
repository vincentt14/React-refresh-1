import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Vincent" body="React JS is awesome." />
        <Post author="author 2" body="test 123" />
      </ul>
    </>
  );
}

export default PostsList;
