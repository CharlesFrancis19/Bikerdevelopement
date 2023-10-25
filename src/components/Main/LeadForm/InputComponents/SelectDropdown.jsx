import Select from "react-select";

const Dropdown = (props) => {
  const { itemKey, getValues, errors, dropdownProps } = props;

  return (
    <Select
      styles={{
        indicatorSeparator: (baseStyles, state) => ({
          ...baseStyles,
          display: "none",
        }),
        clearIndicator: (baseStyles, state) => ({
          ...baseStyles,
          cursor: "pointer",
        }),
        dropdownIndicator: (baseStyles, state) => ({
          ...baseStyles,
          color: errors[itemKey]
            ? "#E83E3E"
            : getValues(itemKey) != null
            ? "#022B50"
            : "#606162",
          ":hover": {
            color: "#022B50",
            cursor: "pointer",
          },
        }),
        control: (baseStyles, state) => ({
          ...baseStyles,
          border: errors[itemKey]
            ? "1px solid #E83E3E"
            : state.isFocused || getValues(itemKey) != null
            ? "1px solid #022B50"
            : "1px solid #caced1",
          ":hover": {
            border: errors[itemKey] ? "1px solid #E83E3E" : "1px solid #022B50",
          },
          boxShadow: "none",
          padding: "6px",
          fontSize: "16px",
        }),
        input: (baseStyles, state) => ({
          ...baseStyles,
          color: errors[itemKey] ? "#E83E3E" : "#231F20",
        }),
        menu: (baseStyles, state) => ({
          ...baseStyles,
          zIndex: "20",
          borderColor: "transparent",
          boxShadow: "0px 4px 18px 0px rgba(169, 169, 169, 0.25)",
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          cursor: "pointer",
          color: "#231F20",
          backgroundColor: state.isFocused ? "#E6EAEE" : "none",
        }),
        placeholder: (baseStyles, state) => ({
          ...baseStyles,
          display: "none",
        }),
      }}
      {...dropdownProps}
    />
  );
};

export default Dropdown;
