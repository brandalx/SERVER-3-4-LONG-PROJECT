import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'

const initialValues = {
  idtoy: ''
}

const validate = (values) => {
  const errors = {}

  if (!values.idtoy) {
    errors.idtoy = 'You can find toy id in toys table'
  } else if (values.idtoy.length < 2 || values.idtoy.length > 150) {
    errors.idtoy = 'You should provide at least two characters of id for the toy'
  }

  return errors
}

const onSubmit = async (values, { setSubmitting, setStatus, resetForm }) => {
  idtoy = values.idtoy
  delete values.idtoy

  console.log(values)
  try {
    const response = await axios.delete(`https://toysrestapi.cyclic.app/toys/${idtoy}`, {
      headers: {
        'x-api-key': localStorage.getItem('x-api-key')
      }
    })
    resetForm()
    console.log(response.data)
    setStatus({ success: true })
  } catch (error) {
    resetForm()
    console.error(error)
    setStatus({ success: false, message: error.response.data[0].message })
  }

  setSubmitting(false)
}

const DeleteToy = () => (
  <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
    {({ isSubmitting, status }) => (
      <Form data-aos='fade-up' data-aos-duration='600' className='form-group'>
        {' '}
        <div className='container py-5'>
          <h2 className=' text-center'>
            Delete existing toy item
            <svg
              className='move-on-hover__item4 ms-2 mb-1'
              width='20'
              height='19'
              viewBox='0 0 20 19'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.44666 14.5533C4.19997 14.3067 4.19997 13.9067 4.44666 13.66L13.66 4.44666C13.9067 4.19998 14.3067 4.19997 14.5533 4.44666V4.44666C14.8 4.69334 14.8 5.09329 14.5533 5.33997L5.33997 14.5533C5.09329 14.8 4.69334 14.8 4.44666 14.5533V14.5533Z'
                fill='#FF4A6E'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.5533 14.5533C14.8 14.3067 14.8 13.9067 14.5533 13.66L5.33997 4.44666C5.09329 4.19998 4.69334 4.19997 4.44666 4.44666V4.44666C4.19998 4.69334 4.19998 5.09329 4.44666 5.33997L13.66 14.5533C13.9067 14.8 14.3067 14.8 14.5533 14.5533V14.5533Z'
                fill='#FF4A6E'
              />
              <rect
                x='1'
                y='1'
                width='18'
                height='17'
                rx='3'
                stroke='#FF4A6E'
                stroke-width='2'
                stroke-linejoin='round'
              />
            </svg>
          </h2>

          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-8 mx-auto'>
              <div>
                <ul className='py-3 text-center opacity-50 text-secondary'>
                  <li> Please note that you need to log in first in order to perform this action </li>
                  <li>Additionally, you can delete only item you created (by toy id)</li>
                </ul>
              </div>
              <div className='mb-3'>
                <label className='form-label' htmlFor='idtoy'>
                  <b> Toy id</b>
                </label>
                <Field className='form-control' type='text' name='idtoy' />

                <small id='emailHelp' className='form-text text-muted'>
                  <ErrorMessage name='idtoy' component='div' />
                </small>
              </div>

              <button className='btn btn-primary submitbtn' type='submit' disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>

              {status && status.success && (
                <div className='text-success'>Toy deleted successfully! You can check it out in Toys Table</div>
              )}
              {status && !status.success && (
                <div className='text-danger'>Failed to delete toy, reason: {status.message}</div>
              )}
            </div>
          </div>
          {/* <hr className="w-75 mx-auto" style={{ color: "#ff4a6e" }} /> */}
        </div>
      </Form>
    )}
  </Formik>
)

export default DeleteToy
