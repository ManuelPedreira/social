import {
  StyledIcon,
  MessageContainer,
  NewPostContainer,
  StyledButton,
  StyledTextArea,
  HorizontalDividerBar,
  BottomAreaContainer,
  LimitCounter,
  VerticalDividerBar,
  StyledSpinner,
} from "./NewPost.styled";
import { useState } from "react";
import useNewPost from "../../api/hooks/useNewPost";
import useToast from "../../providers/ToastContext/useToast";

const NewPost = ({ charsLimit }: { charsLimit: number }) => {
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [postMessage, setPostMessage] = useState<string>("");
  const { sendPost, isPending, isError } = useNewPost();
  const { createToast } = useToast();

  const charsLeft = charsLimit - postMessage.length;

  const isExtendedView = isInputFocused || postMessage;

  const onSendPost = () => {
    sendPost({ userId: 3, title: "", body: postMessage })
      .then(() => {
        createToast({ text: "Post Sent!" });
        setPostMessage("");
      })
      .catch((error) => createToast({ type: "ERROR", timeOut: 10000, text: error.message }));
  };

  return (
    <NewPostContainer>
      <StyledIcon colorByText="Patricia Lebsack" />
      <MessageContainer>
        <StyledTextArea
          value={postMessage}
          onChange={({ target }) => setPostMessage(target.value)}
          placeholder="What's going on?!"
          maxLength={charsLimit}
          onFocusChange={(isInFocus) => setIsInputFocused(isInFocus)}
        />
        {isExtendedView ? <HorizontalDividerBar /> : null}
        <BottomAreaContainer>
          {isExtendedView ? (
            <>
              <LimitCounter $charsCount={charsLeft}>{charsLeft}</LimitCounter>
              <VerticalDividerBar />
            </>
          ) : null}
          <StyledButton onClick={onSendPost} disabled={!postMessage.length} showError={isError}>
            {isPending ? <StyledSpinner /> : "Send"}
          </StyledButton>
        </BottomAreaContainer>
      </MessageContainer>
    </NewPostContainer>
  );
};

export default NewPost;
