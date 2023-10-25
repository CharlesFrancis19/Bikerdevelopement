import { useState } from "react";
import FloatingPlaceholder from "./FloatingPlaceholder";
import Dropdown from "./SelectDropdown";

const CityField = (props) => {
  const { setValue, getValues, errors } = props;
  const itemKey = "city";

  const fields = [
    { value: "1", label: "Some city #1" },
    { value: "2", label: "Some city #2" },
    { value: "3", label: "Some city #3" },
    { value: "4", label: "Some city #4" },
    { value: "5", label: "Some city #5" },
  ];

  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (selectedOption) => {
    setValue(itemKey, selectedOption?.value, { shouldValidate: true });
  };

  const handleInputChange = (input) => {
    setInputValue(input);
  };

  const dropdownProps = {
    options: fields,
    onChange: handleChange,
    inputValue: inputValue,
    onInputChange: handleInputChange,
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(getValues(itemKey) != null),
  };

  return (
    <div>
      <div className="relative">
        <FloatingPlaceholder isFocused={isFocused} hasError={errors.language}>
          <span>City</span>
        </FloatingPlaceholder>
        <Dropdown
          itemKey={itemKey}
          getValues={getValues}
          errors={errors}
          dropdownProps={dropdownProps}
        />
      </div>
      {errors.language && (
        <p className="text-red-500 text-sm mt-1">{errors.language.message}</p>
      )}
    </div>
  );
};

export default CityField;
