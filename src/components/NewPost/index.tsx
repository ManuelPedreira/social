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
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";

const NewPost = ({ charsLimit }: { charsLimit: number }) => {
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [postMessageInputValue, setPostMessageInputValue] = useState<string>("");
  const { sendPost, isPending, isError } = useNewPost();
  const { createToast } = useToast();
  const { t } = useTranslation();

  const charsLeft = charsLimit - postMessageInputValue.length;

  const isExtendedView = isInputFocused || postMessageInputValue;

  const onSendPost = () => {
    sendPost({
      userId: "663359a2100837edcc68548e",
      title: postMessageInputValue.substring(
        0,
        postMessageInputValue.length > 20 ? 20 : postMessageInputValue.length
      ),
      body: postMessageInputValue,
    })
      .then(() => {
        createToast({ text: t("toast-post-send") });
        setPostMessageInputValue("");
      })
      .catch((error) => {
        const text = error instanceof AxiosError ? error.message : "Something went wrong";
        createToast({ type: "ERROR", timeOut: 10000, text });
        console.error(error);
      });
  };

  return (
    <NewPostContainer>
      <StyledIcon colorByText="Patricia Lebsack" />
      <MessageContainer>
        <StyledTextArea
          value={postMessageInputValue}
          onChange={({ target }) => setPostMessageInputValue(target.value)}
          placeholder={t("new-post-input-placeholder")}
          maxLength={charsLimit}
          onFocusChange={(isInFocus) => setIsInputFocused(isInFocus)}
        />
        {isExtendedView ? <HorizontalDividerBar /> : null}
        <BottomAreaContainer>
          {isExtendedView ? (
            <>
              <LimitCounter
                title={t("new-post-chars-left", { count: charsLeft })}
                $charsCount={charsLeft}
              >
                {charsLeft}
              </LimitCounter>
              <VerticalDividerBar />
            </>
          ) : null}
          <StyledButton
            onClick={onSendPost}
            disabled={!postMessageInputValue.length}
            showError={isError}
          >
            {isPending ? <StyledSpinner /> : t("new-post-button-send")}
          </StyledButton>
        </BottomAreaContainer>
      </MessageContainer>
    </NewPostContainer>
  );
};

export default NewPost;
