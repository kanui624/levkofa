import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import PageDems from "../9-UniComps/2-PageDems/0-PageDems";

const AdminLogin = (props) => {
  const handleSuccessfulAuth = (data) => {
    props.handleLogin(data);
    props.history.push("/");
  };

  const triggerHandleLogout = () => {
    axios
      .delete("/logout", { withCredentials: true })
      .then((response) => {
        props.handleLogout(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post(
          "/sessions",
          {
            user: {
              email: values.email,
              password: values.password,
            },
          },
          { withCredentials: true }
        )
        .then((response) => {
          if (response.data.logged_in) {
            handleSuccessfulAuth(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <PageDems>
      <div className="flex justify-center items-center h-full">
        <div className="grid">
          <h1>Status: {props.loggedInStatus}</h1>
          <form id="login-form" onSubmit={formik.handleSubmit}>
            <input
              id="email-login"
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <input
              id="password-login"
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <button type="submit">login</button>
          </form>
          <button onClick={() => triggerHandleLogout()}>logout</button>
        </div>
      </div>
    </PageDems>
  );
};

export default AdminLogin;
