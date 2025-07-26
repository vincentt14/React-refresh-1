import classes from "./Post.module.css";

type PostProps = {
  author: string;
  body: string;
};

function Post({ author, body }: PostProps) {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </div>
  );
}

export default Post;
