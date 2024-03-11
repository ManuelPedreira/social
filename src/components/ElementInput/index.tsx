import { ReactNode } from "react";
import {
  ElementInputPlaceholderContainer,
  StyledInput,
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
      <StyledInput
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </ElementInputPlaceholderContainer>
  );
};

export default ElementInput;
