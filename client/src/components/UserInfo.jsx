import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const initialValues = {
  email: "",
  password: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  }

  return errors;
};

const onSubmit = async (values, { setSubmitting, setStatus }) => {
  try {
    const response = await axios.get(
      "https://toysrestapi.cyclic.app/users/userInfo",
      {
        headers: {
          "x-api-key": localStorage.getItem("x-api-key"),
        },
      }
    );

    console.log(response.data);
    // let finaluserinfo = {};
    // finaluserinfo = { data: response.data };
    setStatus({ success: true, data: response.data });
  } catch (error) {
    console.error(error);
    setStatus({
      success: false,
      message: error.response.data.msg || error.response.data.err,
    });
  }

  setSubmitting(false);
};

const UserInfo = () => (
  <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
    {({ isSubmitting, status }) => (
      <Form className="form-group pb-5">
        {" "}
        <div id="quickstart" className="container py-5">
          <h2 className=" text-center">
            Get User Info{" "}
            <svg
              className="move-on-hover__item4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 2C4 1.44772 4.44772 1 5 1H21C21.5523 1 22 1.44772 22 2V22C22 22.5523 21.5523 23 21 23H5C4.44772 23 4 22.5523 4 22V2ZM6 3V21H20V3H6Z"
                fill="#FF4A6E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 5H5V7H2V5Z"
                fill="#FF4A6E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 11H5V13H2V11Z"
                fill="#FF4A6E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 17H5V19H2V17Z"
                fill="#FF4A6E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13 6.5C12.1716 6.5 11.5 7.17157 11.5 8C11.5 8.82843 12.1716 9.5 13 9.5C13.8284 9.5 14.5 8.82843 14.5 8C14.5 7.17157 13.8284 6.5 13 6.5ZM9.5 8C9.5 6.067 11.067 4.5 13 4.5C14.933 4.5 16.5 6.067 16.5 8C16.5 9.933 14.933 11.5 13 11.5C11.067 11.5 9.5 9.933 9.5 8Z"
                fill="#FF4A6E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.12602 17.5H16.874C16.4299 15.7748 14.8638 14.5 13 14.5C11.1362 14.5 9.57006 15.7748 9.12602 17.5ZM7 18.5C7 15.1863 9.68629 12.5 13 12.5C16.3137 12.5 19 15.1863 19 18.5C19 19.0523 18.5523 19.5 18 19.5H8C7.44772 19.5 7 19.0523 7 18.5Z"
                fill="#FF4A6E"
              />
            </svg>
          </h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8 mx-auto">
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <Field className="form-control" type="email" name="email" />
                <small id="emailHelp" class="form-text text-muted">
                  <ErrorMessage name="email" component="div" />
                </small>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <Field
                  className="form-control"
                  type="password"
                  name="password"
                />
                <small id="emailHelp" class="form-text text-muted">
                  <ErrorMessage name="password" component="div" />
                </small>
              </div>

              <button
                className="btn btn-primary submitbtn"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              {status && status.success && (
                <div className="text-success">Login successfully!</div>
              )}
              {status && !status.success && (
                <div className="text-danger">
                  Failed to log in, reason:: {status.message}
                </div>
              )}
            </div>
          </div>
          {/* <hr className="w-75 mx-auto" style={{ color: "#ff4a6e" }} /> */}
        </div>
        <div className="container-fluid">
          <div className="container">
            {status && status.success && (
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-8 mx-auto mx-auto">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title"> Name: {status.data.name} </h5>
                      <p class="card-text">Email: {status.data.email}</p>

                      <p>Role: {status.data.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Form>
    )}
  </Formik>
);

export default UserInfo;
