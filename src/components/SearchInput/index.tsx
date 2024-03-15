import { StyledInput, StyledSearchIcon } from "./SearchInput.styled";

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
    <StyledInput
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      className={className}
    >
      <StyledSearchIcon />
    </StyledInput>
  );
};

export default SearchInput;
