import React from "react";
import axios from "axios";
import { useFormik } from "formik";

const Registration = (props) => {
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
          if (response.data.status === "created") {
            props.handleSuccessfulAuth(response.data);
          }
          console.log("registered");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <form id="registration-form" onSubmit={formik.handleSubmit}>
      <input
        id="email-registration"
        type="email"
        name="email"
        placeholder="Email Address"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <input
        id="password-registration"
        type="password"
        name="password"
        placeholder="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <input
        id="password_confirmation-registration"
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
