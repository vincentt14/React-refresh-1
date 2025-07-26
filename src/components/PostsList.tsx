import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Vincent" body="React JS is awesome." />
      <Post author="author 2" body="test 123" />
    </ul>
  );
}

export default PostsList;
