import React, { useCallback, useState } from "react";
import { debounce } from "lodash";
import axios from "axios";
import Select from "react-select";
import FloatingPlaceholder from "./FloatingPlaceholder";
import { getTypeDetails } from "@/utils/helperFunctions";

const SelectType = (props) => {
  const { setValue, getValues, errors, setSelectedPlace } = props;
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
  const [TypeDetails, setTypeDetails] = useState([]);

  const searchCities = useCallback(
    debounce((searchKey) => {
      if (searchKey) {
        setIsLoading(true);
        axios({
          url: `${process.env.basePath}/api/getType`,
          method: "POST",
          data: { query: searchKey, countryCode: "in" },
        })
          .then((res) => {
            if (res.data?.status) {
              setTypeDetails(res?.data?.cities);
              const loadedOptions = res?.data?.cities?.map((item) => {
                let Type, state, country, location;
                let alternateLocation;
                if (item?.description) {
                  [Type, state, country] = item.description.split(", ");
                  location = `${Type}, ${state}`;
                } else {
                  alternateLocation = item.label;
                }
                return {
                  value: item.place_id,
                  label: location ? location : alternateLocation,
                };
              });
              setOptions(loadedOptions);
              console.log("API Response ", res.data);
            }
          })
          .catch((fail) => {
            console.error("failed: ", fail);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        setOptions([]);
      }
    }, 250),
    []
  );

  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
    searchCities(inputValue);
  };

  const handleSelectChange = (selected) => {
    // setSelectedOption(selected);
    if (selected) {
      const selectedType = TypeDetails.find((item) => {
        return item.place_id === selected?.value;
      });
      getTypeDetails(
        selectedType?.place_id,
        setSelectedOption,
        setSelectedPlace,
        selectedType?.description
      );
    } else {
      setSelectedOption(null);
    }
    setValue("Type", selected?.label, { shouldValidate: true });
  };

  return (
    <div>
      <div className="relative">
        <FloatingPlaceholder isFocused={isFocused} hasError={errors.Type}>
          <span>Type</span>
        </FloatingPlaceholder>
        <Select
          styles={{
            indicatorSeparator: (baseStyles, state) => ({
              ...baseStyles,
              display: "none",
            }),
            dropdownIndicator: (baseStyles, state) => ({
              ...baseStyles,
              display: "none",
            }),
            clearIndicator: (baseStyles, state) => ({
              ...baseStyles,
              cursor: "pointer",
            }),
            control: (baseStyles, state) => ({
              ...baseStyles,
              border: errors.Type
                ? "1px solid #E83E3E"
                : state.isFocused || isFocused
                ? "1px solid #022B50"
                : "1px solid #caced1",
              ":hover": {
                border: errors.Type ? "1px solid #E83E3E" : "1px solid #022B50",
              },
              boxShadow: "none",
              padding: "6px",
              fontSize: "16px",
            }),
            input: (baseStyles, state) => ({
              ...baseStyles,
              color: errors.Type ? "#E83E3E" : "#231F20",
            }),
            menu: (baseStyles, state) => ({
              ...baseStyles,
              zIndex: "20",
              color: "#231F20",
              borderColor: "transparent",
              boxShadow: "0px 4px 18px 0px rgba(169, 169, 169, 0.25)",
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              cursor: "pointer",
              backgroundColor: state.isFocused ? "#E6EAEE" : "none",
            }),
            placeholder: (baseStyles, state) => ({
              ...baseStyles,
              display: "none",
            }),
          }}
          options={options}
          value={selectedOption}
          onChange={handleSelectChange}
          onInputChange={handleInputChange}
          isClearable={true}
          isSearchable={isSearchable}
          isDisabled={isDisabled}
          isLoading={isLoading}
          menuIsOpen={inputValue.length}
          placeholder=""
          noOptionsMessage={() => "No results found"}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(getValues("Type") != null)}
        />
      </div>
      {errors.Type && (
        <p className="text-red-500 text-sm mt-1">{errors.Type.message}</p>
      )}
    </div>
  );
};

export default SelectType;
