import { StyledButton } from "./Button.styled";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  className?: string;
};

const Button = ({
  children,
  onClick,
  disabled,
  className = "",
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={!disabled ? onClick : undefined}
      className={className}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
