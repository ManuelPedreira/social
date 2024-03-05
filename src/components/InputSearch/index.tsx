import SearchIconSVG from "../svg/SearchIconSVG";
import "./styles.css";

type InputSearchProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
};

const InputSearch = ({ onChange, placeholder, value }: InputSearchProps) => {
  return (
    <label className="inputSearch">
      <SearchIconSVG />
      <input onChange={onChange} placeholder={placeholder} value={value} />
    </label>
  );
};

export default InputSearch;
