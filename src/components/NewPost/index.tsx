import { useState } from "react";
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
} from "./NewPost.styled";
import { RequestStatus } from "../../api/postTypes";

type NewPostProps = {
  postMessage: string;
  onChangePostMessage: React.Dispatch<React.SetStateAction<string>>;
  status: RequestStatus;
  onSendPost: (text: string) => void;
  charsLimit: number;
};

const NewPost = ({
  postMessage,
  onChangePostMessage,
  status,
  onSendPost,
  charsLimit,
}: NewPostProps) => {
  const charsLeft = charsLimit - postMessage.length;

  return (
    <NewPostContainer>
      <StyledIcon colorByText="Leanne Graham" />
      <MessageContainer>
        <StyledTextArea
          value={postMessage}
          onChange={({ target }) => onChangePostMessage(target.value)}
          placeholder="What is happening?!"
          maxLength={charsLimit}
        />
        {postMessage ? <HorizontalDividerBar /> : <></>}
        <BottomAreaContainer>
          {postMessage ? (
            <LimitCounter charsLeft={charsLeft}>{charsLeft}</LimitCounter>
          ) : (
            <></>
          )}
          {postMessage ? <VerticalDividerBar /> : <></>}
          <StyledButton
            onClick={() => {
              onSendPost(postMessage);
            }}
            disabled={!postMessage.length}
          >
            Send
          </StyledButton>
        </BottomAreaContainer>
      </MessageContainer>
    </NewPostContainer>
  );
};

export default NewPost;
