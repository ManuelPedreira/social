import ElementInput from "../ElementInput";
import SearchIconSVG from "../svg/SearchIconSVG";

type SearchInputProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
};

const SearchInput = ({ onChange, placeholder, value }: SearchInputProps) => {
  return (
    <ElementInput onChange={onChange} placeholder={placeholder} value={value}>
      <SearchIconSVG />
    </ElementInput>
  );
};

export default SearchInput;
