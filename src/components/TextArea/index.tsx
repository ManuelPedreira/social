import { useEffect, useRef } from "react";
import { TextAreaContainer } from "./TextArea.styled";

type TextAreaProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  maxLength?: number;
  onEnter?: () => void;
  className?: string;
  onFocusChange?: (isFocus: boolean) => void;
};

const TextArea = ({
  value,
  onChange,
  placeholder,
  maxLength,
  onEnter,
  className,
  onFocusChange,
}: TextAreaProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef && textAreaRef.current?.style) {
      textAreaRef.current.style.height = "0px";
      const scrollHeight = textAreaRef.current.scrollHeight;

      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);

  return (
    <TextAreaContainer
      ref={textAreaRef}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      onKeyDown={(target) => {
        if (onEnter && target.key === "Enter") onEnter();
      }}
      placeholder={placeholder}
      className={className}
      onFocus={() => (onFocusChange ? onFocusChange(true) : undefined)}
      onBlur={() => (onFocusChange ? onFocusChange(false) : undefined)}
    />
  );
};

export default TextArea;
