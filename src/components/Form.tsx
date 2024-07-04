import React, { useState, ChangeEvent, FormEvent } from "react";
import * as Yup from "yup";
import Reveal from "./Reveal";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  contactType: string;
  message: string;
  consent: boolean;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    contactType: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleBlur = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    const schema = Yup.object().shape({
      firstName: Yup.string().required("This field is required"),
      lastName: Yup.string().required("This field is required"),
      email: Yup.string()
        .email()
        .required("Please enter a valid email address"),
      contactType: Yup.string().required("Please select a query type"),
      message: Yup.string().required("This field is required"),
      consent: Yup.boolean().oneOf(
        [true],
        "To submit this form, please consent to being contacted"
      ),
    });

    try {
      await schema.validateAt(name, { [name]: value });
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: (error as Yup.ValidationError).message,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const schema = Yup.object().shape({
      firstName: Yup.string().required("This field is required"),
      lastName: Yup.string().required("This field is required"),
      email: Yup.string()
        .email()
        .required("Please enter a valid email address"),
      contactType: Yup.string().required("Please select a query type"),
      message: Yup.string().required("This field is required"),
      consent: Yup.boolean().oneOf(
        [true],
        "To submit this form, please consent to being contacted"
      ),
    });

    try {
      await schema.validate(formData, { abortEarly: false });
      console.log("Form Validation:", formData);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      const newErrors: { [key: string]: string } = {};
      (error as Yup.ValidationError).inner.forEach((err) => {
        if (err.path) {
          newErrors[err.path] = err.message;
        }
      });
      setErrors(newErrors);
      setIsSuccess(false);
    }
  };

  return (
    <div className="relative">
      {isSuccess && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white rounded-lg shadow-lg z-50 transition-all">
          <div className="flex flex-col">
            <div className="flex flex-row gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-check"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 12l2 2l4 -4" />
                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
              </svg>
              Message Sent!
            </div>
            <h1>Thanks for completing the form. We'll be in touch soon!</h1>
          </div>
        </div>
      )}
      <div className="flex flex-col items-left rounded-lg justify-center w-full md:w-[600px] h-full">
        <Reveal width="100%">
          <h1 className="font-bold text-3xl text-neutral-grey-900">
            Contact Us
          </h1>
        </Reveal>
        <form className="flex flex-col space-y-4 mt-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex flex-col items-left w-full">
              <Reveal width="100%">
                <span className="flex items-center">
                  <span className="text-sm text-neutral-grey-700 py-2">
                    First Name
                  </span>
                  <span className="text-neutral ml-1">*</span>
                </span>
              </Reveal>
              <Reveal width="100%">
                <input
                  className={`rounded-lg border w-full ${
                    errors.firstName
                      ? "border-red-500"
                      : "border-neutral-grey-500"
                  }`}
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Reveal>
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="flex flex-col items-left w-full">
              <Reveal width="100%">
                <span className="flex items-center">
                  <span className="text-sm text-neutral-grey-700 py-2">
                    Last Name
                  </span>
                  <span className="text-neutral ml-1">*</span>
                </span>
              </Reveal>
              <Reveal width="100%">
                <input
                  className={`rounded-lg border w-full ${
                    errors.lastName
                      ? "border-red-500"
                      : "border-neutral-grey-500"
                  }`}
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Reveal>
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-left w-full">
            <Reveal width="100%">
              <span className="flex items-center">
                <span className="text-sm text-neutral-grey-700 py-2">
                  Email Address
                </span>
                <span className="text-neutral ml-1">*</span>
              </span>
            </Reveal>
            <Reveal width="100%">
              <input
                className={`rounded-lg border w-full ${
                  errors.email ? "border-red-500" : "border-neutral-grey-500"
                }`}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Reveal>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col items-left w-full">
            <Reveal width="100%">
              <span className="flex items-center">
                <span className="text-sm text-neutral-grey-700 py-2">
                  Query Type
                </span>
                <span className="text-neutral ml-1">*</span>
              </span>
            </Reveal>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <label
                className={`rounded-lg border w-full md:w-1/2 hover:cursor-pointer ${
                  errors.contactType
                    ? "border-red-500"
                    : "border-neutral-grey-500"
                } ${
                  formData.contactType === "General Enquiry"
                    ? "bg-zinc-700"
                    : ""
                }`}
              >
                <input
                  className="mx-3"
                  type="radio"
                  name="contactType"
                  value="General Enquiry"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                General Enquiry
              </label>
              <label
                className={`rounded-lg border w-full md:w-1/2 hover:cursor-pointer ${
                  errors.contactType
                    ? "border-red-500"
                    : "border-neutral-grey-500"
                } ${
                  formData.contactType === "Support Request"
                    ? "bg-zinc-700"
                    : ""
                }`}
              >
                <input
                  className="mx-3"
                  type="radio"
                  name="contactType"
                  value="Support Request"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Support Request
              </label>
            </div>
            {errors.contactType && (
              <p className="text-red-500 text-sm">{errors.contactType}</p>
            )}
          </div>
          <div className="flex flex-col items-left w-full">
            <Reveal width="100%">
              <span className="flex items-center">
                <span className="text-sm text-neutral-grey-700 py-2">
                  Message
                </span>
                <span className="text-neutral ml-1">*</span>
              </span>
            </Reveal>
            <Reveal width="100%">
              <textarea
                className={`rounded-lg border w-full ${
                  errors.message ? "border-red-500" : "border-neutral-grey-500"
                }`}
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
            </Reveal>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          <div className="flex flex-col items-left w-full">
            <label className="flex items-center space-x-2 py-4">
              <input
                className="mr-2"
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
              />
              <span className="text-primary-green-600 font-medium">
                I consent to being contacted by you
              </span>
              <span className="text-neutral ml-1">*</span>
            </label>
            {errors.consent && (
              <p className="text-red-500 text-sm">{errors.consent}</p>
            )}
          </div>
          <Reveal width="100%">
            <button className="bg-zinc-900 text-white rounded-lg">
              Submit
            </button>
          </Reveal>
        </form>
      </div>
    </div>
  );
};

export default Form;
