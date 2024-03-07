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
    <div
      onClick={!disabled ? onClick : undefined}
      className={`elementButton ${className} ${disabled ? "disabled" : ""}`}
    >
      {children}
    </div>
  );
};

export default ElementButton;
