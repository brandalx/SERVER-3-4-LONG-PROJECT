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
  const config = {
    headers: {
      'x-api-key': localStorage.getItem('x-api-key')
    }
  }
  try {
    const response = await axios.put(`https://toysrestapi.cyclic.app/users/${userid}`, values, config)
    console.log(response.data)

    setStatus({ success: true })
  } catch (error) {
    console.error(error)
    setStatus({ success: false, message: error.response.data.msg })
  }

  setSubmitting(false)
}
const userid = localStorage.getItem('userid')
const EditUser = () => (
  <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
    {({ isSubmitting, status }) => (
      <Form data-aos='fade-up' data-aos-duration='700' className='form-group'>
        {' '}
        <div id='quickstart' className='container py-5'>
          <h2 className=' text-center'>
            Edit your info{' '}
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
                d='M15.2929 1.29289C15.6834 0.902369 16.3166 0.902369 16.7071 1.29289L19.7071 4.29289C20.0977 4.68342 20.0977 5.31658 19.7071 5.70711L7.70713 17.7071C7.57897 17.8353 7.41839 17.9262 7.24256 17.9701L3.24256 18.9701C2.90178 19.0553 2.54129 18.9555 2.29291 18.7071C2.04453 18.4587 1.94468 18.0982 2.02988 17.7575L3.02988 13.7575C3.07384 13.5816 3.16476 13.4211 3.29291 13.2929L15.2929 1.29289ZM4.90299 14.5112L4.37439 16.6256L6.48877 16.097L17.5858 5L16 3.41421L4.90299 14.5112Z'
                fill='#FF4A6E'
              />
              <path fillRule='evenodd' clipRule='evenodd' d='M22 22H2V20H22V22Z' fill='#FF4A6E' />
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

              {status && status.success && <div className='text-success'>User info updated!</div>}
              {status && !status.success && (
                <div className='text-danger'>Failed to edit user info: {status.message}</div>
              )}
            </div>
          </div>
          {/* <hr className="w-75 mx-auto" style={{ color: "#ff4a6e" }} /> */}
        </div>
      </Form>
    )}
  </Formik>
)

export default EditUser
