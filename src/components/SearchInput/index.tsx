import ElementInput from "../ElementInput";
import SearchIconSVG from "../svg/SearchIconSVG";

type SearchInputProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
  className?: string;
};

const SearchInput = ({
  onChange,
  placeholder,
  value,
  className,
}: SearchInputProps) => {
  return (
    <ElementInput
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      className={className}
    >
      <SearchIconSVG />
    </ElementInput>
  );
};

export default SearchInput;
