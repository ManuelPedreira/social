import { ReactNode } from "react";
import "./styles.css";

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
    <label className={`elementInput ${className}`}>
      {children}
      <input onChange={onChange} placeholder={placeholder} value={value} />
    </label>
  );
};

export default ElementInput;
