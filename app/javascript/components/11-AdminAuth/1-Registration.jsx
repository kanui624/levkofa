import React from "react";
import axios from "axios";
import { useFormik } from "formik";

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password_confirmation: "",
    },
    onSubmit: (values) => {
      axios
        .post(
          "/registrations",
          {
            user: {
              email: values.email,
              password: values.password,
              password_confirmation: values.password_confirmation,
            },
          },
          { withCredentials: true }
        )
        .then((response) => {
          console.log("registration response", response);
        })
        .catch((error) => {
          console.log("registration error", error);
        });
    },
  });

  return (
    <form id="registration-form" onSubmit={formik.handleSubmit}>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email Address"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <input
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <input
        id="password_confirmation"
        type="password"
        name="password_confirmation"
        placeholder="Confirm Password"
        onChange={formik.handleChange}
        value={formik.values.password_confirmation}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Registration;
