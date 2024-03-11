import { ReactNode } from "react";
import {
  ElementInputPlaceholderContainer,
  InputContainer,
} from "./ElementInputPlaceholder.styled";

type ElementInputProps = {
  children?: ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
  className?: string;
};

const ElementInput = ({
  onChange,
  placeholder,
  value,
  children,
  className = "",
}: ElementInputProps) => {
  return (
    <ElementInputPlaceholderContainer className={className}>
      {children}
      <InputContainer
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </ElementInputPlaceholderContainer>
  );
  /* return (
    <label className={`elementInput ${className}`}>
      {children}
      <input onChange={onChange} placeholder={placeholder} value={value} />
    </label>
  ); */
};

export default ElementInput;
