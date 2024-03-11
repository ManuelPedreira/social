import ElementInput from "../ElementInput";
import { StyledSearchIcon } from "./SearchInputPlaceholder.styled";

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
      <StyledSearchIcon />
    </ElementInput>
  );
};

export default SearchInput;
