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
import { RequestStatus } from "../../api/postTypes";
import { useState } from "react";

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
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const charsLeft = charsLimit - postMessage.length;

  const showExtended = isFocused || postMessage;

  return (
    <NewPostContainer>
      <StyledIcon colorByText="Leanne Graham" />
      <MessageContainer>
        <StyledTextArea
          value={postMessage}
          onChange={({ target }) => onChangePostMessage(target.value)}
          placeholder="What's going on?!"
          maxLength={charsLimit}
          onFocusChange={(isInFocus) => setIsFocused(isInFocus)}
        />
        {showExtended ? <HorizontalDividerBar /> : null}
        <BottomAreaContainer>
          {showExtended ? (
            <LimitCounter $charsCount={charsLeft}>{charsLeft}</LimitCounter>
          ) : null}
          {showExtended ? <VerticalDividerBar /> : null}
          <StyledButton
            onClick={() => {
              onSendPost(postMessage);
            }}
            disabled={!postMessage.length}
            showError={status === RequestStatus.ERROR}
          >
            {status === RequestStatus.LOADING ? <StyledSpinner /> : "Send"}
          </StyledButton>
        </BottomAreaContainer>
      </MessageContainer>
    </NewPostContainer>
  );
};

export default NewPost;
