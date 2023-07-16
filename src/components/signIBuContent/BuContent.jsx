import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useSignInBuMutation } from "../../store/api/AuthSlices";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BuContent() {
  const navigate = useNavigate()

  const [signInBu, {error = {}}] = useSignInBuMutation()

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string().required("password is required"),
    email: Yup.string().required(" email is required"),
  });

  const handleSubmit = (values) => {
    signInBu({
      email: values.email,
      password: values.password,
    }).unwrap().then(() => {
      navigate("/landlord/Dashboard")
    }).catch((err) => {
      console.log(err)
    })

    if(error.status === 401) {
      toast.error("Invalid email or passoword")
    }
  }

  return (
    <div className="md:w-[500px] w-[90%] items-center bg-white md:p-11 p-6 rounded-lg  mb-2 shadow-2xl border-2">
      <h2 className="text-center font-medium text-2xl text-[#00befe]">
        Sign in Business
      </h2>
      <ToastContainer/>
      <Formik 
      initialValues={initialValues} 
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <Field
              type="text"
              id="email"
              name="email"
              placeholder="E-mail"
              className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 mt-6 outline-[#00befe]"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-left text-red-400"
            />
          </div>

          <div>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 mt-6 outline-[#00befe]"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-left text-red-400"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 rounded-[8px] bg-[#00befe] px-12 py-3 text-white 
         hover:bg-sky-500 text-[18px]"
          >
            Sign In
          </button>
        </Form>
      </Formik>

      <div className="flex justify-between items-center pt-4">
        <p className="text-sm">Don’t have account?</p>
        <Link
          to="/busines/signUp"
          className="text-sm md:text-lg text-[#00befe] font-medium"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default BuContent;
