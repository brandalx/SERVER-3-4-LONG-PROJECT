import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
export default function MainTopBlocks() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='container'>
          <div className='pb-5'>
            {' '}
            <h2 data-aos='fade-up' data-aos-duration='600' className='text-center fw-bold '>
              Choose any form to start with
            </h2>
          </div>

          <div className='row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3 justify-content-center'>
            <div className='col' data-aos='fade-up' data-aos-duration='600'>
              <Link className='text-decoration-none text-dark' to='/create-user'>
                <div className='card cardintro rounded-4 border-0 h-100' styles='background: #fcffd186'>
                  <div className='card-body d-flex flex-column justify-content-center align-items-center text-center'>
                    <div>
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
                    </div>
                    <h5 className='card-title'>Registration</h5>
                    <p className='card-text text-body-secondary'>Fast register through registration form</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className='col' data-aos='fade-up' data-aos-duration='700'>
              <Link className='text-decoration-none text-dark' href='#quickstart' to='/login'>
                <div className='card cardintro rounded-4 border-0 h-100' styles='background: #fcffd186'>
                  <div className='card-body d-flex flex-column justify-content-center align-items-center text-center'>
                    <div>
                      <svg
                        className='move-on-hover__item4'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path fillRule='evenodd' clipRule='evenodd' d='M14.5 13H2.5V11H14.5V13Z' fill='#FF4A6E' />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M11.7071 7.79297L15.2071 11.293C15.5976 11.6835 15.5976 12.3167 15.2071 12.7072L11.7071 16.2072L10.2929 14.793L13.0858 12.0001L10.2929 9.20718L11.7071 7.79297Z'
                          fill='#FF4A6E'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M13.5 5C10.7824 5 8.42477 6.54837 7.2643 8.81567L5.48395 7.90442C6.97309 4.995 10.0027 3 13.5 3C18.4705 3 22.5 7.02944 22.5 12C22.5 16.9706 18.4705 21 13.5 21C10.0027 21 6.97309 19.005 5.48395 16.0956L7.2643 15.1843C8.42477 17.4516 10.7824 19 13.5 19C17.366 19 20.5 15.866 20.5 12C20.5 8.13401 17.366 5 13.5 5Z'
                          fill='#FF4A6E'
                        />
                      </svg>
                    </div>
                    <h5 className='card-title'>Log In</h5>
                    <p className='card-text text-body-secondary'>Quickly access your token to perform operations</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className='col' data-aos='fade-up' data-aos-duration='800'>
              <Link className='text-decoration-none text-dark' href='#quickstart' to='/user-info'>
                <div className='card cardintro rounded-4 border-0 h-100' styles='background: #fcffd186'>
                  <div className='card-body d-flex flex-column justify-content-center align-items-center text-center'>
                    <div>
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
                          d='M4 2C4 1.44772 4.44772 1 5 1H21C21.5523 1 22 1.44772 22 2V22C22 22.5523 21.5523 23 21 23H5C4.44772 23 4 22.5523 4 22V2ZM6 3V21H20V3H6Z'
                          fill='#FF4A6E'
                        />
                        <path fillRule='evenodd' clipRule='evenodd' d='M2 5H5V7H2V5Z' fill='#FF4A6E' />
                        <path fillRule='evenodd' clipRule='evenodd' d='M2 11H5V13H2V11Z' fill='#FF4A6E' />
                        <path fillRule='evenodd' clipRule='evenodd' d='M2 17H5V19H2V17Z' fill='#FF4A6E' />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M13 6.5C12.1716 6.5 11.5 7.17157 11.5 8C11.5 8.82843 12.1716 9.5 13 9.5C13.8284 9.5 14.5 8.82843 14.5 8C14.5 7.17157 13.8284 6.5 13 6.5ZM9.5 8C9.5 6.067 11.067 4.5 13 4.5C14.933 4.5 16.5 6.067 16.5 8C16.5 9.933 14.933 11.5 13 11.5C11.067 11.5 9.5 9.933 9.5 8Z'
                          fill='#FF4A6E'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M9.12602 17.5H16.874C16.4299 15.7748 14.8638 14.5 13 14.5C11.1362 14.5 9.57006 15.7748 9.12602 17.5ZM7 18.5C7 15.1863 9.68629 12.5 13 12.5C16.3137 12.5 19 15.1863 19 18.5C19 19.0523 18.5523 19.5 18 19.5H8C7.44772 19.5 7 19.0523 7 18.5Z'
                          fill='#FF4A6E'
                        />
                      </svg>
                    </div>
                    <h5 className='card-title'>Get User Info</h5>
                    <p className='card-text text-body-secondary'>
                      Fast display information based on your token and user profile{' '}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className='col' data-aos='fade-up' data-aos-duration='900'>
              <Link className='text-decoration-none text-dark' href='#quickstart' to='/edit-user'>
                <div className='card cardintro rounded-4 border-0 h-100' styles='background: #fcffd186'>
                  <div className='card-body d-flex flex-column justify-content-center align-items-center text-center'>
                    <div>
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
                    </div>
                    <h5 className='card-title'>Edit your info</h5>
                    <p className='card-text text-body-secondary'>Quick change your information</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className='col' data-aos='fade-up' data-aos-duration='1000'>
              <Link className='text-decoration-none text-dark' href='#quickstart' to='/product-table'>
                <div className='card cardintro rounded-4 border-0 h-100' styles='background: #fcffd186'>
                  <div className='card-body d-flex flex-column justify-content-center align-items-center text-center'>
                    <div>
                      <svg
                        className='move-on-hover__item4'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path fillRule='evenodd' clipRule='evenodd' d='M18 8H6V6H18V8Z' fill='#FF4A6E' />
                        <path fillRule='evenodd' clipRule='evenodd' d='M18 13H6V11H18V13Z' fill='#FF4A6E' />
                        <path fillRule='evenodd' clipRule='evenodd' d='M18 18H6V16H18V18Z' fill='#FF4A6E' />
                      </svg>
                    </div>
                    <h5 className='card-title'>Show Toys Table</h5>
                    <p className='card-text text-body-secondary'>
                      Peform toys route /GET request and display toys list from the data base
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className='col' data-aos='fade-up' data-aos-duration='1000'>
              <Link className='text-decoration-none text-dark' href='#quickstart' to='/posttoys'>
                <div className='card cardintro rounded-4 border-0 h-100' styles='background: #fcffd186'>
                  <div className='card-body d-flex flex-column justify-content-center align-items-center text-center'>
                    <div>
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
                          d='M6 3C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V8.91987C19 8.62794 18.8724 8.3506 18.6508 8.16061L12.9109 3.24074C12.7297 3.08539 12.4989 3 12.2602 3H6ZM3 4C3 2.34315 4.34315 1 6 1H12.2602C12.9763 1 13.6688 1.25618 14.2125 1.72223L19.9524 6.6421C20.6173 7.21205 21 8.0441 21 8.91987V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V4Z'
                          fill='#FF4A6E'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M12 6V2.5H14V6C14 6.55228 14.4477 7 15 7H19.5V9H15C13.3431 9 12 7.65685 12 6Z'
                          fill='#FF4A6E'
                        />
                        <path fillRule='evenodd' clipRule='evenodd' d='M11 18V10H13V18H11Z' fill='#FF4A6E' />
                        <path fillRule='evenodd' clipRule='evenodd' d='M16 15H8V13H16V15Z' fill='#FF4A6E' />
                      </svg>
                    </div>
                    <h5 className='card-title'>Post Toys</h5>
                    <p className='card-text text-body-secondary'>
                      Peform toys route /POST request and add new toys to the the data base
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className='col' data-aos='fade-up' data-aos-duration='1000'>
              <Link className='text-decoration-none text-dark' href='#quickstart' to='/edittoys'>
                <div className='card cardintro rounded-4 border-0 h-100' styles='background: #fcffd186'>
                  <div className='card-body d-flex flex-column justify-content-center align-items-center text-center'>
                    <div>
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
                    </div>
                    <h5 className='card-title'>Edit Toys</h5>
                    <p className='card-text text-body-secondary'>
                      Peform toys route /EDIT request and edit existing toys in the the data base
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className='col' data-aos='fade-up' data-aos-duration='1000'>
              <Link className='text-decoration-none text-dark' href='#quickstart' to='/deletetoy'>
                <div className='card cardintro rounded-4 border-0 h-100' styles='background: #fcffd186'>
                  <div className='card-body d-flex flex-column justify-content-center align-items-center text-center'>
                    <div>
                      <svg
                        className='move-on-hover__item4 '
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
                    </div>
                    <h5 className='card-title'>Delete Toys</h5>
                    <p className='card-text text-body-secondary'>
                      Peform toys route /DELETE request and delete existing toys from the the data base
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
