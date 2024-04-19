import { ReactNode } from "react";
import { InputContainer, StyledInput } from "./Input.styled";

type InputProps = {
  children?: ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
  className?: string;
};

const Input = ({
  onChange,
  placeholder,
  value,
  children,
  className,
}: InputProps) => {
  return (
    <InputContainer className={className}>
      {children}
      <StyledInput
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </InputContainer>
  );
};

export default Input;
