import { ElementButtonPlaceholderContainer } from "./ElementButtonPlaceholder.styled";
import "./styles.css";

type ElementButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  className?: string;
};

const ElementButton = ({
  children,
  onClick,
  disabled,
  className = "",
}: ElementButtonProps) => {
  return (
    <ElementButtonPlaceholderContainer
      onClick={!disabled ? onClick : undefined}
      className={`elementButton ${className} ${disabled ? "disabled" : ""}`}
    >
      {children}
    </ElementButtonPlaceholderContainer>
  );
};

export default ElementButton;
