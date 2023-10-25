import { twMerge } from "tailwind-merge";

const FloatingPlaceholder = ({ children, isFocused, hasError = false }) => {
  return (
    <div
      className={twMerge(
        `absolute pointer-events-none top-[50%] left-4 translate-y-[-50%] transition-all duration-[0.2s] ease-linear z-10 ${
          isFocused
            ? "top-[-2%] left-3 text-[12px] bg-white px-1"
            : "text-[16px]"
        } ${
          hasError
            ? "text-[#E83E3E]"
            : isFocused
            ? "text-[#022B50]"
            : "text-[#606162]"
        }`
      )}
    >
      {children}
    </div>
  );
};

export default FloatingPlaceholder;
