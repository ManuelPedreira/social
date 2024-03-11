import ElementInput from "../ElementInput";
import { SearchIconSVGContainer } from "./SearchInputPlaceholder.styled";

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
      <SearchIconSVGContainer />
    </ElementInput>
  );
};

export default SearchInput;
