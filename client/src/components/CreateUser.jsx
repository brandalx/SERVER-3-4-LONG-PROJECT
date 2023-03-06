import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'

const initialValues = {
  name: '',
  email: '',
  password: ''
}

const validate = (values) => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Required'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long'
  }

  return errors
}

const onSubmit = async (values, { setSubmitting, setStatus }) => {
  try {
    const response = await axios.post('https://toysrestapi.cyclic.app/users', values)
    console.log(response.data)
    setStatus({ success: true })
  } catch (error) {
    console.error(error)
    setStatus({ success: false, message: error.response.data.msg })
  }

  setSubmitting(false)
}

const CreateUser = () => (
  <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
    {({ isSubmitting, status }) => (
      <Form data-aos='fade-up' data-aos-duration='600' className='form-group'>
        {' '}
        <div className='container py-5'>
          <h2 className=' text-center'>
            Lets register first!{' '}
            <svg
              className='move-on-hover__item4'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17 12.75C14.6528 12.75 12.75 14.6528 12.75 17C12.75 19.3472 14.6528 21.25 17 21.25C18.3898 21.25 19.6237 20.5837 20.4004 19.55C20.6492 19.2188 21.1193 19.1521 21.4505 19.4009C21.7817 19.6497 21.8484 20.1198 21.5996 20.451C20.5518 21.8456 18.8814 22.75 17 22.75C13.8244 22.75 11.25 20.1756 11.25 17C11.25 13.8244 13.8244 11.25 17 11.25C20.1756 11.25 22.75 13.8244 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17C21.25 14.6528 19.3472 12.75 17 12.75Z'
                fill='#FF4A6E'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M19.686 14.6398C20.023 14.8805 20.1011 15.3489 19.8603 15.686L17.3603 19.186C17.243 19.3503 17.0643 19.4604 16.8647 19.4912C16.6652 19.5221 16.4616 19.4712 16.3 19.3501L14.3 17.8501C13.9687 17.6015 13.9015 17.1314 14.15 16.8001C14.3986 16.4687 14.8687 16.4015 15.2 16.6501L16.5859 17.6895L18.6397 14.8141C18.8805 14.4771 19.3489 14.399 19.686 14.6398Z'
                fill='#FF4A6E'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10 2.75C7.92893 2.75 6.25 4.42893 6.25 6.5C6.25 8.57107 7.92893 10.25 10 10.25C12.0711 10.25 13.75 8.57107 13.75 6.5C13.75 4.42893 12.0711 2.75 10 2.75ZM4.75 6.5C4.75 3.60051 7.10051 1.25 10 1.25C12.8995 1.25 15.25 3.60051 15.25 6.5C15.25 9.3995 12.8995 11.75 10 11.75C7.10051 11.75 4.75 9.3995 4.75 6.5Z'
                fill='#FF4A6E'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10 11.75C5.99594 11.75 2.75 14.9959 2.75 19C2.75 19.4142 2.41421 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19C1.25 14.1675 5.16751 10.25 10 10.25C10.4142 10.25 10.75 10.5858 10.75 11C10.75 11.4142 10.4142 11.75 10 11.75Z'
                fill='#FF4A6E'
              />
            </svg>
          </h2>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-8 mx-auto'>
              <div className='mb-3'>
                <label className='form-label' htmlFor='name'>
                  Name
                </label>
                <Field className='form-control' type='text' name='name' />

                <small id='emailHelp' className='form-text text-muted'>
                  <ErrorMessage name='name' component='div' />
                </small>
              </div>

              <div className='mb-3'>
                <label className='form-label' htmlFor='email'>
                  Email
                </label>
                <Field className='form-control' type='email' name='email' />
                <small id='emailHelp' className='form-text text-muted'>
                  We'll never share your email with anyone else.
                </small>
                <small id='emailHelp' className='form-text text-muted'>
                  <ErrorMessage name='email' component='div' />
                </small>
              </div>

              <div className='mb-3'>
                <label className='form-label' htmlFor='password'>
                  Password
                </label>
                <Field className='form-control' type='password' name='password' />
                <small id='emailHelp' className='form-text text-muted'>
                  <ErrorMessage name='password' component='div' />
                </small>
              </div>

              <button className='btn btn-primary submitbtn' type='submit' disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>

              {status && status.success && <div className='text-success'>User created successfully!</div>}
              {status && !status.success && <div className='text-danger'>Failed to create user: {status.message}</div>}
            </div>
          </div>
          {/* <hr className="w-75 mx-auto" style={{ color: "#ff4a6e" }} /> */}
        </div>
      </Form>
    )}
  </Formik>
)

export default CreateUser
