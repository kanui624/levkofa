import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import PageDems from "../9-UniComps/2-PageDems/0-PageDems";

const AudioComps = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      summary: "",
    },
    onSubmit: (data) => {
      axios
        .post("/api/v1/podcast", data)
        .then(() => console.log("yes!"))
        .catch((err) => console.log(err.response.data));
    },
  });

  return (
    <PageDems>
      <div className="flex justify-center items-center h-full">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <label htmlFor="summary">Summary</label>
          <input
            id="summary"
            name="summary"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.summary}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </PageDems>
  );
};

export default AudioComps;
