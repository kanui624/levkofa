import React from "react";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import PageDems from "../9-UniComps/2-PageDems/0-PageDems";

const AdminLogin = (props) => {
  const handleSuccessfulAuth = (data) => {
    props.handleLogin(data);
    props.history.push("/");
  };

  const triggerLogout = () => {
    axios
      .delete("/logout", { withCredentials: true })
      .then((response) => {
        props.handleLogout(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const adminEmail = { lke: "lev@kofa.com" };

  const AdminForm = () => {
    return (
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Incorrect Email")
            .matches(adminEmail.lke, "Incorrect Email")
            .required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
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
        }}
      >
        <Form>
          <Field
            id="email-login"
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <ErrorMessage name="email" />
          <Field
            id="password-login"
            type="password"
            name="password"
            placeholder="Password"
          />
          <ErrorMessage name="password" />
          <button type="submit">login</button>
        </Form>
      </Formik>
    );
  };

  const LogoutButton = () => {
    return <button onClick={() => triggerLogout()}>logout</button>;
  };

  const ConditionalLog = () => {
    if (props.loggedInStatus === "LOGGED_OUT") {
      return <AdminForm />;
    } else {
      return <LogoutButton />;
    }
  };

  return (
    <PageDems>
      <div className="flex justify-center items-center h-full">
        <div className="grid">
          <h1>Status: {props.loggedInStatus}</h1>
          <ConditionalLog />
        </div>
      </div>
    </PageDems>
  );
};

export default AdminLogin;
