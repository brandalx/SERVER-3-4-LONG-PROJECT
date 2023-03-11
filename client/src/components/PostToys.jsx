import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'

const initialValues = {
  name: '',
  info: '',
  category: '',
  img_url: '',
  price: ''
}

const validate = (values) => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length < 2 || values.name.length > 150) {
    errors.name = 'You should provide at least two characters of information about the toy'
  }

  if (!values.info) {
    errors.info = 'Required'
  } else if (values.info.length < 2 || values.info.length > 150) {
    errors.info = 'You should provide at least two characters of information about the toy'
  }

  if (!values.category) {
    errors.category = 'Required'
  } else if (values.category.length < 2 || values.category.length > 150) {
    errors.category = 'You should provide at least two characters of information about the toy'
  }

  if (!values.img_url) {
    errors.img_url = 'Required'
  } else if (values.img_url.length < 2 || values.img_url.length > 150) {
    errors.img_url = 'You should provide at least two characters of information about the toy'
  }

  if (!values.price) {
    errors.price = 'Required'
  } else if (values.price < 2 || values.price > 150) {
    errors.price = 'Price should be at least bigger or equal two and smaller than 150'
  }

  return errors
}

const onSubmit = async (values, { setSubmitting, setStatus }) => {
  try {
    const response = await axios.post('https://toysrestapi.cyclic.app/toys', values, {
      headers: {
        'x-api-key': localStorage.getItem('x-api-key')
      }
    })
    console.log(response.data)
    setStatus({ success: true })
  } catch (error) {
    console.error(error)
    setStatus({ success: false, message: error.response.data.err })
  }

  setSubmitting(false)
}

const PostToys = () => (
  <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
    {({ isSubmitting, status }) => (
      <Form data-aos='fade-up' data-aos-duration='600' className='form-group'>
        {' '}
        <div className='container py-5'>
          <h2 className=' text-center'>
            Post new toy item
            <svg
              className='move-on-hover__item4 ms-2 mb-1'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clip-rule='evenodd'
                d='M6 3C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V8.91987C19 8.62794 18.8724 8.3506 18.6508 8.16061L12.9109 3.24074C12.7297 3.08539 12.4989 3 12.2602 3H6ZM3 4C3 2.34315 4.34315 1 6 1H12.2602C12.9763 1 13.6688 1.25618 14.2125 1.72223L19.9524 6.6421C20.6173 7.21205 21 8.0441 21 8.91987V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V4Z'
                fill='#FF4A6E'
              />
              <path
                fillRule='evenodd'
                clip-rule='evenodd'
                d='M12 6V2.5H14V6C14 6.55228 14.4477 7 15 7H19.5V9H15C13.3431 9 12 7.65685 12 6Z'
                fill='#FF4A6E'
              />
              <path fillRule='evenodd' clip-rule='evenodd' d='M11 18V10H13V18H11Z' fill='#FF4A6E' />
              <path fillRule='evenodd' clip-rule='evenodd' d='M16 15H8V13H16V15Z' fill='#FF4A6E' />
            </svg>
          </h2>
          <p className='text-center opacity-50 text-secondary'>
            Please note that you need to log in first in order to perform this action
          </p>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-8 mx-auto'>
              <div className='mb-3'>
                <label className='form-label' htmlFor='name'>
                  Name of toy
                </label>
                <Field className='form-control' type='text' name='name' />

                <small id='emailHelp' className='form-text text-muted'>
                  <ErrorMessage name='name' component='div' />
                </small>
              </div>

              <div className='mb-3'>
                <label className='form-label' htmlFor='info'>
                  Info about toy
                </label>
                <Field className='form-control' type='text' name='info' />

                <small id='emailHelp' className='form-text text-muted'>
                  <ErrorMessage name='info' component='div' />
                </small>
              </div>

              <div className='mb-3'>
                <label className='form-label' htmlFor='category'>
                  Category of toy
                </label>
                <Field className='form-control' type='text' name='category' />

                <small id='emailHelp' className='form-text text-muted'>
                  <ErrorMessage name='category' component='div' />
                </small>
              </div>

              <div className='mb-3'>
                <label className='form-label' htmlFor='img_url'>
                  Image of toy
                </label>
                <Field className='form-control' type='text' name='img_url' />

                <small id='emailHelp' className='form-text text-muted'>
                  <ErrorMessage name='img_url' component='div' />
                </small>
              </div>

              <div className='mb-3'>
                <label className='form-label' htmlFor='price'>
                  Price of toy
                </label>
                <Field className='form-control' type='text' name='price' />

                <small id='emailHelp' className='form-text text-muted'>
                  <ErrorMessage name='price' component='div' />
                </small>
              </div>

              <button className='btn btn-primary submitbtn' type='submit' disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>

              {status && status.success && <div className='text-success'>New toy added successfully!</div>}
              {status && !status.success && (
                <div className='text-danger'>Failed to add new toy, reason: {status.message}</div>
              )}
            </div>
          </div>
          {/* <hr className="w-75 mx-auto" style={{ color: "#ff4a6e" }} /> */}
        </div>
      </Form>
    )}
  </Formik>
)

export default PostToys
