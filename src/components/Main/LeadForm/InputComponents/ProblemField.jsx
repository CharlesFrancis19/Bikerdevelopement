import { useState } from "react";
import FloatingPlaceholder from "./FloatingPlaceholder";
import Dropdown from "./SelectDropdown";

const ServiceField = (props) => {
  const { setValue, getValues, errors } = props;
  const itemKey = "service";

  const fields = [
    { value: "1", label: "Some service #1" },
    { value: "2", label: "Some service #2" },
    { value: "3", label: "Some service #3" },
    { value: "4", label: "Some service #4" },
    { value: "5", label: "Some service #5" },
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
          <span>Service</span>
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

export default ServiceField;


