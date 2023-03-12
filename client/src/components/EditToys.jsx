import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'

const initialValues = {
  idtoy: '',
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
    errors.name = 'You should provide at least two characters of name about the toy'
  }

  if (!values.info) {
    errors.info = 'Required'
  } else if (values.info.length < 2 || values.info.length > 150) {
    errors.info = 'You should provide at least two characters of information about the toy'
  }

  if (!values.category) {
    errors.category = 'Required'
  } else if (values.category.length < 2 || values.category.length > 150) {
    errors.category = 'You should provide at least two characters of category about the toy'
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

  if (!values.idtoy) {
    errors.idtoy = 'You can find toy id in toys table'
  } else if (values.idtoy.length < 2 || values.idtoy.length > 150) {
    errors.idtoy = 'You should provide at least two characters of id for the toy'
  }

  return errors
}

const onSubmit = async (values, { setSubmitting, setStatus }) => {
  idtoy = values.idtoy
  delete values.idtoy

  console.log(values)
  try {
    const response = await axios.put(`https://toysrestapi.cyclic.app/toys/${idtoy}`, values, {
      headers: {
        'x-api-key': localStorage.getItem('x-api-key')
      }
    })
    console.log(response.data)
    setStatus({ success: true })
  } catch (error) {
    console.error(error)
    setStatus({ success: false, message: error.response.data[0].message })
    values.name = ''
    values.info = ''
    values.category = ''
    values.img_url = ''
    values.price = ''
    values.idtoy = ''
  }

  setSubmitting(false)
}

const EditToys = () => (
  <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
    {({ isSubmitting, status }) => (
      <Form data-aos='fade-up' data-aos-duration='600' className='form-group'>
        {' '}
        <div className='container py-5'>
          <h2 className=' text-center'>
            Edit existing toy item
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
                clipRule='evenodd'
                d='M17.7929 1.79289C18.1834 1.40237 18.8166 1.40237 19.2071 1.79289L22.2071 4.79289C22.5976 5.18342 22.5976 5.81658 22.2071 6.20711L13.2071 15.2071C13.0541 15.3601 12.8556 15.4594 12.6414 15.4899L9.14143 15.9899C8.82984 16.0345 8.51547 15.9297 8.2929 15.7071C8.07034 15.4845 7.96555 15.1702 8.01006 14.8586L8.51006 11.3586C8.54066 11.1444 8.63991 10.9459 8.7929 10.7929L17.7929 1.79289ZM10.4428 11.9714L10.1785 13.8215L12.0286 13.5572L20.0858 5.5L18.5 3.91421L10.4428 11.9714Z'
                fill='#FF4A6E'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 6.5C4.17157 6.5 3.5 7.17157 3.5 8V19C3.5 19.8284 4.17157 20.5 5 20.5H16C16.8284 20.5 17.5 19.8284 17.5 19V11.5H19.5V19C19.5 20.933 17.933 22.5 16 22.5H5C3.067 22.5 1.5 20.933 1.5 19V8C1.5 6.067 3.067 4.5 5 4.5H12.5V6.5H5Z'
                fill='#FF4A6E'
              />
            </svg>
          </h2>

          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-8 mx-auto'>
              <div>
                <ul className='py-3 text-center opacity-50 text-secondary'>
                  <li> Please note that you need to log in first in order to perform this action </li>
                  <li>Additionally, you can only item you created (by toy id)</li>
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

              {status && status.success && (
                <div className='text-success'>Toy edited successfully! You can see it in the Toys Table</div>
              )}
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

export default EditToys
