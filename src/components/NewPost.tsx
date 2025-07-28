import classes from "./NewPost.module.css";

type NewPostProps = {
  onBodyChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onAuthorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function NewPost({ onBodyChange, onAuthorChange }: NewPostProps) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </p>
    </form>
  );
}

export default NewPost;
