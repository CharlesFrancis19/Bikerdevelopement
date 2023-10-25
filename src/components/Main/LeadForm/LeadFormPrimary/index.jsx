import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import WhatsappOptIn from "../InputComponents/WhatsAppOptin";
import EmailField from "../InputComponents/EmailField";
import PhoneNumberField from "../InputComponents/PhoneNumberField";
import formValidations from "@/utils/formValidations";
import Spinner from "../../Spinner";
import Dropdown from "../InputComponents/SelectDropdown";
import CityField from "../InputComponents/CityField";
import ServiceField from "../InputComponents/ProblemField";

export default function LeadFormPrimary(props) {
  return (
    <div className="w-full max-w-[27.5rem]">
      <LeadForm {...props} />
    </div>
  );
}

function LeadForm() {
  const [whatsappOptIn, setWhatsappOptIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const checkMobileValid = (value) => {
    let errorMessage = formValidations.validateMobile(value);
    return errorMessage === "";
  };

  const checkEmailValid = (value) => {
    let errorMessage = formValidations.validateEmail(value, false);
    return errorMessage.status === "success";
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email address")
      .email("Please enter a valid email address")
      .test("is-valid", "Please enter a valid email address", checkEmailValid),
    phone: yup
      .string()
      .required("Please enter your mobile number")
      .length(10, "Please enter a valid mobile number")
      .test("is-valid", "Please enter a valid mobile number", checkMobileValid),
    city: yup.string().required("Please select a City"),
    serviceType: yup.string().required("Please select a Service Type"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // pass validation schema to yupResolver
  });

  const onSubmit = async (formData) => {
    setIsLoading(true);
    console.log({ formData });
  };

  const setValidationError = (itemKey, errorMessage, hasError) => {
    if (hasError) {
      setError(itemKey, { type: "custom", message: errorMessage });
    } else {
      clearErrors(itemKey);
    }
  };

  return (
    <div className="w-full px-5 pt-7 pb-3 border border-[#3d709f] rounded shadow-[0_0_9px_hsla(0,0%,58%,.25)]   text-gray-400 bg-white">
      <p className="mb-4 text-center text-[22px] text-[#231F20] font-bold">
        Enter Details
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <EmailField
            register={register}
            getValues={getValues}
            errors={errors}
            setValidationError={setValidationError}
          />
          <PhoneNumberField
            register={register}
            getValues={getValues}
            errors={errors}
            setValidationError={setValidationError}
          />
          <CityField
            setValue={setValue}
            getValues={getValues}
            errors={errors}
          />
          <ServiceField
            setValue={setValue}
            getValues={getValues}
            errors={errors}
          />
          <WhatsappOptIn
            whatsappOptIn={whatsappOptIn}
            setWhatsappOptIn={setWhatsappOptIn}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#3d709f] disabled:bg-[#3d709f] disabled:cursor-not-allowed text-white font-bold p-3 rounded-md shadow-sm flex items-center gap-2 justify-center"
          >
            Get Started {isLoading && <Spinner />}
          </button>
        </div>
      </form>
    </div>
  );
}
