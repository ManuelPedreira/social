import { useState } from "react";
import { Post, RequestStatus } from "../postTypes";
import { postNewPost } from "../postCalls";
import useToast from "../../providers/ToastContext/useToast";

const useNewPost = (
  setLocalPosts: React.Dispatch<React.SetStateAction<Post[]>>
) => {
  const [newPostText, setNewPostText] = useState<string>("");
  const [newPostRequestStatus, setNewPostRequestStatus] =
    useState<RequestStatus>(RequestStatus.IDLE);

  const { createToast } = useToast();

  const sendNewPost = (newPostText: string) => {
    setNewPostRequestStatus(RequestStatus.LOADING);

    const newPost: Post = {
      userId: 4,
      title: newPostText,
      body: newPostText,
    };

    postNewPost(newPost)
      .then((post) => {
        setLocalPosts((currentLocalPosts) => [
          ...currentLocalPosts,
          { ...post, id: Number(new Date()) }, //falsear Id, no usar en entorno real
        ]);
        setNewPostText("");
        setNewPostRequestStatus(RequestStatus.IDLE);
        createToast({ text: "Post Sent!" });
      })
      .catch((e) => {
        setNewPostRequestStatus(RequestStatus.ERROR);
        createToast({ text: e.message, type: "ERROR", timeOut: 10000 });
      });
  };

  return { newPostText, setNewPostText, newPostRequestStatus, sendNewPost };
};

export default useNewPost;
