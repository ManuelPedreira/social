import { useEffect, useState } from "react";
import { Post, RequestStatus } from "../postTypes";
import { postNewPost } from "../postCalls";

const useNewPost = (
  localPosts: Post[],
  setLocalPosts: React.Dispatch<React.SetStateAction<Post[]>>
) => {
  const [newPostText, setNewPostText] = useState<string>("");
  const [newPostRequestStatus, setNewPostRequestStatus] =
    useState<RequestStatus>(RequestStatus.IDLE);

  const sendNewPost = (newPostText: string) => {
    setNewPostRequestStatus(RequestStatus.LOADING);

    const newPost: Post = {
      userId: 1,
      title: newPostText,
      body: newPostText,
    };

    postNewPost(newPost)
      .then((post) => {
        setLocalPosts((currentLocalPosts) => [...currentLocalPosts, post]);
        setNewPostText("");
        setNewPostRequestStatus(RequestStatus.IDLE);
      })
      .catch(() => {
        setNewPostRequestStatus(RequestStatus.ERROR);
      });
  };

  // log of new Posts to console
  useEffect(() => console.log(localPosts), [localPosts]);

  return { newPostText, setNewPostText, newPostRequestStatus, sendNewPost };
};

export default useNewPost;
