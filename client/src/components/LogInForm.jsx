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
    const response = await axios.post(
      "https://toysrestapi.cyclic.app/users/login",
      values
    );
    console.log(response.data);
    const token = response.data.token;
    localStorage.clear();
    localStorage.setItem("x-api-key", token);
    setStatus({ success: true });
  } catch (error) {
    console.error(error);
    setStatus({
      success: false,
      message: error.response.data.msg || error.response.data.err,
    });
  }

  setSubmitting(false);
};

const LogInForm = () => (
  <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
    {({ isSubmitting, status }) => (
      <Form className="form-group">
        {" "}
        <div id="quickstart" className="container py-5">
          <h2 className=" text-center">
            Log in to get your token{" "}
            <svg
              className="move-on-hover__item4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clip-rule="evenodd"
                d="M14.5 13H2.5V11H14.5V13Z"
                fill="#FF4A6E"
              />
              <path
                fillRule="evenodd"
                clip-rule="evenodd"
                d="M11.7071 7.79297L15.2071 11.293C15.5976 11.6835 15.5976 12.3167 15.2071 12.7072L11.7071 16.2072L10.2929 14.793L13.0858 12.0001L10.2929 9.20718L11.7071 7.79297Z"
                fill="#FF4A6E"
              />
              <path
                fillRule="evenodd"
                clip-rule="evenodd"
                d="M13.5 5C10.7824 5 8.42477 6.54837 7.2643 8.81567L5.48395 7.90442C6.97309 4.995 10.0027 3 13.5 3C18.4705 3 22.5 7.02944 22.5 12C22.5 16.9706 18.4705 21 13.5 21C10.0027 21 6.97309 19.005 5.48395 16.0956L7.2643 15.1843C8.42477 17.4516 10.7824 19 13.5 19C17.366 19 20.5 15.866 20.5 12C20.5 8.13401 17.366 5 13.5 5Z"
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
      </Form>
    )}
  </Formik>
);

export default LogInForm;
