import "./styles.css";

type ElementButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
};

const ElementButton = ({ children, onClick }: ElementButtonProps) => {
  return (
    <div onClick={onClick} className="elementButton">
      {children}
    </div>
  );
};

export default ElementButton;
