import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

type PostsListProps = {
  isPosting: boolean;
  onStopPosting: () => void;
};

type Post = {
  body: string;
  author: string;
};

function PostsList({ isPosting, onStopPosting }: PostsListProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  function addPostHandler(postData: Post) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author="author 2" body="test 123" />
      </ul>
    </>
  );
}

export default PostsList;
