import { useEffect, useRef, useState } from "react";
import { TextAreaContainer } from "./TextArea.styled";

type TextAreaProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  maxLength?: number;
  onEnter?: () => void;
  className?: string;
};

const TextArea = ({
  value,
  onChange,
  placeholder,
  maxLength,
  onEnter,
  className,
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
    />
  );
};

export default TextArea;
