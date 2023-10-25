import React from "react";
import { twMerge } from "tailwind-merge";

const InputField = (props) => {
  const { register, getValues, errors, itemKey, inputAttributes } = props;
  console.log("PROPS", props)
  return (
    <>
      <input
        {...inputAttributes}
        {...register(itemKey)}
        className={twMerge(
          `block w-full p-3 shadow-sm rounded border-[1px] border-[#caced1] focus:outline-none ${
            errors[itemKey]
              ? "focus:border-[#E83E3E] hover:border-[#E83E3E] placeholder-shown:border-[#E83E3E] text-[#E83E3E] caret-[#E83E3E]"
              : "focus:border-[#022B50] hover:border-[#022B50] placeholder-shown:border-[#caced1] text-[#022B50] caret-[#022B50]"
          } ${
            errors[itemKey]
              ? "border-[#E83E3E]"
              : getValues(itemKey) != ""
              ? "border-[#022B50]"
              : "border-[#caced1]"
          }`
        )}
      />
      {errors[itemKey] && (
        <p className="text-red-500 text-sm mt-1">{errors[itemKey].message}</p>
      )}
    </>
  );
};

export default InputField;
