import "./styles.css";

type ElementButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  className?: string;
};

const ElementButton = ({
  children,
  onClick,
  className = "",
}: ElementButtonProps) => {
  return (
    <div onClick={onClick} className={`elementButton ${className}`}>
      {children}
    </div>
  );
};

export default ElementButton;
