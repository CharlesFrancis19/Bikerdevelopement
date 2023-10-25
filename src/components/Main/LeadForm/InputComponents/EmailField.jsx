import { useState } from "react";
import FloatingPlaceholder from "./FloatingPlaceholder";
import formValidations from "@/utils/formValidations";
import { twMerge } from "tailwind-merge";

export default function EmailField(props) {
  const { register, getValues, errors, setValidationError } = props;
  const [isFocused, setIsFocused] = useState(false);
  const itemKey = "email";

  const checkIsValid = () => {
    if (getValues(itemKey) !== "") {
      let error = formValidations.validateEmail(getValues(itemKey), false);
      if (error?.status === "error") {
        setValidationError(itemKey, error?.msg, true);
      } else {
        setValidationError(itemKey, error?.msg, false);
      }
    }
  };

  return (
    <div>
      <div className="relative">
        <FloatingPlaceholder isFocused={isFocused} hasError={errors[itemKey]}>
          <span>Email</span>
        </FloatingPlaceholder>
        <input
          id="email"
          type="email"
          {...register(itemKey)}
          className={twMerge(
            `block w-full p-3 shadow-sm rounded border-[1px] border-[#caced1] focus:outline-none ${
              errors[itemKey]
                ? "focus:border-[#E83E3E] hover:border-[#E83E3E] placeholder-shown:border-[#E83E3E] text-[#E83E3E] caret-[#E83E3E]"
                : "focus:border-[#022B50] hover:border-[#022B50] placeholder-shown:border-[#caced1] text-[#231F20] caret-[#022B50]"
            } ${
              errors[itemKey]
                ? "border-[#E83E3E]"
                : isFocused
                ? "border-[#022B50]"
                : "border-[#caced1]"
            }`
          )}
          placeholder=""
          autoComplete="off"
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            checkIsValid();
            setIsFocused(getValues(itemKey) != "");
          }}
        />
      </div>
      {errors[itemKey] && (
        <p className="text-red-500 text-sm mt-1">{errors[itemKey].message}</p>
      )}
    </div>
  );
}
