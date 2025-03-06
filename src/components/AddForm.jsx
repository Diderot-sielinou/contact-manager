import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import validationSchema from "../validate.js";
import { addContacts } from "../app/features/counter/counterSlice";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";



export default function AddForm() {
  const dispatch = useDispatch()
  let navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      job: "",
      address: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addContacts(values))
      resetForm();
      navigate("/")
    },
  });

  return (
    <div className=" w-[90%] m-auto md:w-full h-[100vh] flex items-center justify-center ">
      <form
        onSubmit={formik.handleSubmit}
        className=" p-3 lg:p-10 md:p-4  container max-w-3xl border-2 border-gray-300 rounded-2xl  shadow-2xl"
      >
        <div className="relative mb-3">
          <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
            Full Name{" "}
            <svg
              width={7}
              height={7}
              className="ml-1"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                fill="#EF4444"
              />
            </svg>
          </label>
          <input
            type="text"
            id="default-search"
            className="block w-full h-8 px-5 py-2  leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
            placeholder="Name..."
            required=""
            {...formik.getFieldProps("fullName")}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className=" text-red-600 text-xs my-1">
              {formik.errors.fullName}
            </div>
          ) : null}
        </div>

        <div className="relative mb-3">
          <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
            Email{" "}
            <svg
              width={7}
              height={7}
              className="ml-1"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                fill="#EF4444"
              />
            </svg>
          </label>
          <input
            type="text"
            id="default-search"
            className="block w-full h-8 px-5 py-2  leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
            placeholder="Email address..."
            required=""
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className=" text-red-600 text-xs my-1">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div className="relative mb-3">
          <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
            phone{" "}
            <svg
              width={7}
              height={7}
              className="ml-1"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                fill="#EF4444"
              />
            </svg>
          </label>
          <input
            type="text"
            id="default-search"
            className="block w-full h-8 px-5 py-2  leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
            placeholder="phone number..."
            required=""
            {...formik.getFieldProps("phone")}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className=" text-red-600 text-xs my-1">
              {formik.errors.phone}
            </div>
          ) : null}
        </div>
        <div className="relative mb-3">
          <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
            job{" "}
            <svg
              width={7}
              height={7}
              className="ml-1"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                fill="#EF4444"
              />
            </svg>
          </label>
          <input
            type="text"
            id="default-search"
            className="block w-full h-8 px-5 py-2 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
            placeholder="job..."
            required=""
            {...formik.getFieldProps("job")}
          />
          {formik.touched.job && formik.errors.job ? (
            <div className=" text-red-600 text-xs my-1">
              {formik.errors.job}
            </div>
          ) : null}
        </div>
        <div className="relative mb-3">
          <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
            addresse
            <svg
              width={7}
              height={7}
              className="ml-1"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                fill="#EF4444"
              />
            </svg>
          </label>
          <input
            type="text"
            id="default-search"
            className="block w-full h-8 px-5 py-2 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
            placeholder="address..."
            required=""
            {...formik.getFieldProps("address")}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className=" text-red-600 text-xs my-1">
              {formik.errors.address}
            </div>
          ) : null}
        </div>
        <button
          disabled={!(formik.isValid && formik.dirty)}
          className=" flex items-center justify-center mx-auto w-30 h-8 md:w-50 md:h-11 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7"
        >
          Save contact
        </button>
      </form>
    </div>
  );
}
