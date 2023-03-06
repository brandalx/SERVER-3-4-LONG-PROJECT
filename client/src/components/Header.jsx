import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Navbar } from './Navbar'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
export const Header = () => {
  return (
    <header className='page-header css-selector styled '>
      <div className='container'>
        <Navbar />
      </div>
      <div className='container-fluid partMain'>
        <div className='container'>
          <h1
            data-aos='fade-right'
            className='text-white text-center fw-bolder display-4 text-focus-in roll-in-blurred-left'
          >
            Toys REST API
            <svg
              className='move-on-hover mb-2'
              width='80px'
              height='50'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect className='move-on-hover__item1' y='21' width='30' height='9' rx='4' fill='#C77DFF' />
              <rect className='move-on-hover__item2' x='6' y='11' width='18' height='8' rx='4' fill='#FDE781' />
              <ellipse className='move-on-hover__item3' cx='15' cy='4.5' rx='4' ry='4.5' fill='#FC5C7C' />
            </svg>
          </h1>
          <p className='text-white text-center'>Front end side</p>
          <div className='row align-items-center'>
            <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 justify-content-center'>
              <div className='col' data-aos='fade-up' data-aos-duration='600'>
                <a className='text-decoration-none text-dark' href='https://toysrestapi.cyclic.app/'>
                  <div className='card cardintro rounded-4 border-0 h-100' styles='background: #d1ffd186'>
                    <div className='card-body d-flex flex-column justify-content-center align-items-center text-center'>
                      <div>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M3 4C3 2.34315 4.34315 1 6 1H18C19.6569 1 21 2.34315 21 4V22C21 22.3375 20.8298 22.6522 20.5473 22.8369C20.2649 23.0216 19.9084 23.0514 19.5992 22.9162L16 21.3415L12.4008 22.9162C12.1453 23.0279 11.8547 23.0279 11.5992 22.9162L8 21.3415L4.40082 22.9162C4.09164 23.0514 3.73509 23.0216 3.45265 22.8369C3.17022 22.6522 3 22.3375 3 22V4ZM6 3C5.44772 3 5 3.44772 5 4V20.471L7.59918 19.3338C7.8547 19.2221 8.1453 19.2221 8.40082 19.3338L12 20.9085L15.5992 19.3338C15.8547 19.2221 16.1453 19.2221 16.4008 19.3338L19 20.471V4C19 3.44772 18.5523 3 18 3H6Z'
                            fill='#FF4A6E'
                          />
                          <path fillRule='evenodd' clipRule='evenodd' d='M13 12H6.5V10H13V12Z' fill='#FF4A6E' />
                          <path fillRule='evenodd' clipRule='evenodd' d='M13 16H6.5V14H13V16Z' fill='#FF4A6E' />
                          <path fillRule='evenodd' clipRule='evenodd' d='M17.5 12H15.5V10H17.5V12Z' fill='#FF4A6E' />
                          <path fillRule='evenodd' clipRule='evenodd' d='M17.5 16H15.5V14H17.5V16Z' fill='#FF4A6E' />
                          <path fillRule='evenodd' clipRule='evenodd' d='M13 8H6.5V6H13V8Z' fill='#FF4A6E' />
                          <path fillRule='evenodd' clipRule='evenodd' d='M17.5 8H15.5V6H17.5V8Z' fill='#FF4A6E' />
                        </svg>
                      </div>
                      <h5 className='card-title'>Documentation</h5>

                      <p className='card-text text-body-secondary'>
                        Everything you need to know about this Toys REST API
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className='col' data-aos='fade-up' data-aos-duration='700'>
                <a className='text-decoration-none text-dark' href='https://toysrestapi.cyclic.app/api-docs/'>
                  <div className='card cardintro rounded-4 border-0 h-100' styles='background: #d1ffd186'>
                    <div className='card-body d-flex flex-column justify-content-center align-items-center text-center'>
                      <div>
                        <svg width='23' height='23' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M8.78551 12.1108C8.50426 12.1108 8.26278 12.0114 8.06108 11.8125C7.86222 11.6108 7.76278 11.3693 7.76278 11.0881C7.76278 10.8097 7.86222 10.571 8.06108 10.3722C8.26278 10.1733 8.50426 10.0739 8.78551 10.0739C9.05824 10.0739 9.29688 10.1733 9.50142 10.3722C9.70597 10.571 9.80824 10.8097 9.80824 11.0881C9.80824 11.2756 9.75994 11.4474 9.66335 11.6037C9.5696 11.7571 9.44602 11.8807 9.29261 11.9744C9.1392 12.0653 8.97017 12.1108 8.78551 12.1108ZM11.5197 12.1108C11.2385 12.1108 10.997 12.0114 10.7953 11.8125C10.5964 11.6108 10.497 11.3693 10.497 11.0881C10.497 10.8097 10.5964 10.571 10.7953 10.3722C10.997 10.1733 11.2385 10.0739 11.5197 10.0739C11.7925 10.0739 12.0311 10.1733 12.2356 10.3722C12.4402 10.571 12.5425 10.8097 12.5425 11.0881C12.5425 11.2756 12.4942 11.4474 12.3976 11.6037C12.3038 11.7571 12.1802 11.8807 12.0268 11.9744C11.8734 12.0653 11.7044 12.1108 11.5197 12.1108ZM14.2539 12.1108C13.9727 12.1108 13.7312 12.0114 13.5295 11.8125C13.3307 11.6108 13.2312 11.3693 13.2312 11.0881C13.2312 10.8097 13.3307 10.571 13.5295 10.3722C13.7312 10.1733 13.9727 10.0739 14.2539 10.0739C14.5267 10.0739 14.7653 10.1733 14.9699 10.3722C15.1744 10.571 15.2767 10.8097 15.2767 11.0881C15.2767 11.2756 15.2284 11.4474 15.1318 11.6037C15.038 11.7571 14.9145 11.8807 14.7611 11.9744C14.6076 12.0653 14.4386 12.1108 14.2539 12.1108Z'
                            fill='#FF4A6E'
                          />
                          <path
                            d='M4.37074 11.5398V10.6832C4.86222 10.6832 5.20313 10.5852 5.39347 10.3892C5.58381 10.1932 5.67898 9.87642 5.67898 9.43892V8.49716C5.67898 7.97159 5.75142 7.55114 5.89631 7.2358C6.04403 6.91761 6.24858 6.67756 6.50994 6.51562C6.77415 6.35369 7.08665 6.24574 7.44744 6.19176C7.80824 6.13778 8.20313 6.1108 8.6321 6.1108V7.46591C8.29688 7.46591 8.04119 7.50994 7.86506 7.59801C7.69176 7.68324 7.57386 7.81676 7.51136 7.99858C7.44886 8.17756 7.41761 8.40483 7.41761 8.6804V9.92472C7.41761 10.1406 7.37784 10.3466 7.2983 10.5426C7.21875 10.7358 7.07102 10.9077 6.85511 11.0582C6.6392 11.206 6.33097 11.3239 5.9304 11.4119C5.52983 11.4972 5.00994 11.5398 4.37074 11.5398ZM8.6321 16.8963C8.20313 16.8963 7.80824 16.8693 7.44744 16.8153C7.08665 16.7614 6.77415 16.6534 6.50994 16.4915C6.24858 16.3295 6.04403 16.0895 5.89631 15.7713C5.75142 15.456 5.67898 15.0355 5.67898 14.5099V13.5639C5.67898 13.1264 5.58381 12.8097 5.39347 12.6136C5.20313 12.4176 4.86222 12.3196 4.37074 12.3196V11.4631C5.00994 11.4631 5.52983 11.5071 5.9304 11.5952C6.33097 11.6804 6.6392 11.7983 6.85511 11.9489C7.07102 12.0966 7.21875 12.2685 7.2983 12.4645C7.37784 12.6577 7.41761 12.8636 7.41761 13.0824V14.3267C7.41761 14.5994 7.44886 14.8253 7.51136 15.0043C7.57386 15.1861 7.69176 15.3196 7.86506 15.4048C8.04119 15.4929 8.29688 15.5369 8.6321 15.5369V16.8963ZM4.37074 12.3196V10.6832H5.90057V12.3196H4.37074ZM18.4205 11.4631V12.3196C17.9319 12.3196 17.591 12.4176 17.3978 12.6136C17.2075 12.8097 17.1123 13.1264 17.1123 13.5639V14.5099C17.1123 15.0355 17.0384 15.456 16.8907 15.7713C16.7458 16.0895 16.5413 16.3295 16.2771 16.4915C16.0157 16.6534 15.7046 16.7614 15.3438 16.8153C14.9859 16.8693 14.591 16.8963 14.1592 16.8963V15.5369C14.4944 15.5369 14.7487 15.4929 14.922 15.4048C15.0981 15.3196 15.2174 15.1861 15.2799 15.0043C15.3424 14.8253 15.3737 14.5994 15.3737 14.3267V13.0824C15.3737 12.8636 15.4134 12.6577 15.493 12.4645C15.5725 12.2685 15.7203 12.0966 15.9362 11.9489C16.1521 11.7983 16.4603 11.6804 16.8609 11.5952C17.2614 11.5071 17.7813 11.4631 18.4205 11.4631ZM14.1592 6.1108C14.591 6.1108 14.9859 6.13778 15.3438 6.19176C15.7046 6.24574 16.0157 6.35369 16.2771 6.51562C16.5413 6.67756 16.7458 6.91761 16.8907 7.2358C17.0384 7.55114 17.1123 7.97159 17.1123 8.49716V9.43892C17.1123 9.87642 17.2075 10.1932 17.3978 10.3892C17.591 10.5852 17.9319 10.6832 18.4205 10.6832V11.5398C17.7813 11.5398 17.2614 11.4972 16.8609 11.4119C16.4603 11.3239 16.1521 11.206 15.9362 11.0582C15.7203 10.9077 15.5725 10.7358 15.493 10.5426C15.4134 10.3466 15.3737 10.1406 15.3737 9.92472V8.6804C15.3737 8.40483 15.3424 8.17756 15.2799 7.99858C15.2174 7.81676 15.0981 7.68324 14.922 7.59801C14.7487 7.50994 14.4944 7.46591 14.1592 7.46591V6.1108ZM18.4205 10.6832V12.3196H16.8907V10.6832H18.4205Z'
                            fill='#FF4A6E'
                          />
                          <circle cx='11.5' cy='11.5' r='10.5' stroke='#FF4A6E' strokeWidth='2' />
                        </svg>
                      </div>
                      <h5 className='card-title'>Automated docs Swagger</h5>

                      <p className='card-text text-body-secondary'>Toys REST API Swagger automated documantation</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className='col' data-aos='fade-up' data-aos-duration='800'>
                <Link to={{ pathname: '/create-user', hash: '#quickstart' }} className='text-decoration-none text-dark'>
                  <div className='card cardintro rounded-4 border-0 h-100' styles='background: #fcffd186'>
                    <div className='card-body d-flex flex-column justify-content-center align-items-center text-center'>
                      <div>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M1 10.5C1 7.73858 3.23858 5.5 6 5.5H18C20.7614 5.5 23 7.73858 23 10.5V17.5C23 19.7091 21.2091 21.5 19 21.5H18.5C17.241 21.5 16.0554 20.9072 15.3 19.9L13.8 17.9C13.6111 17.6482 13.3148 17.5 13 17.5H10.6085C10.2637 17.5 9.94324 17.6776 9.7605 17.97L8.72925 19.62C7.9983 20.7895 6.71642 21.5 5.33726 21.5H5C2.79086 21.5 1 19.7091 1 17.5V10.5ZM6 7.5C4.34315 7.5 3 8.84315 3 10.5V17.5C3 18.6046 3.89543 19.5 5 19.5H5.33726C6.02684 19.5 6.66778 19.1448 7.03325 18.56L8.0645 16.91C8.61272 16.0329 9.57413 15.5 10.6085 15.5H13C13.9443 15.5 14.8334 15.9446 15.4 16.7L16.9 18.7C17.2777 19.2036 17.8705 19.5 18.5 19.5H19C20.1046 19.5 21 18.6046 21 17.5V10.5C21 8.84315 19.6569 7.5 18 7.5H6Z'
                            fill='#FF4A6E'
                          />
                          <path fillRule='evenodd' clipRule='evenodd' d='M9.5 13.5H4.5V11.5H9.5V13.5Z' fill='#FF4A6E' />
                          <path fillRule='evenodd' clipRule='evenodd' d='M8 10V15H6V10H8Z' fill='#FF4A6E' />
                          <path fillRule='evenodd' clipRule='evenodd' d='M13 3.5V6.5H11V3.5H13Z' fill='#FF4A6E' />
                          <path fillRule='evenodd' clipRule='evenodd' d='M17.5 15H15.5V13H17.5V15Z' fill='#FF4A6E' />
                          <path fillRule='evenodd' clipRule='evenodd' d='M19.5 12H17.5V10H19.5V12Z' fill='#FF4A6E' />
                        </svg>
                      </div>
                      <h5 className='card-title'>Fast start</h5>
                      <p className='card-text text-body-secondary'>
                        Quickly access Toys REST API via this site with speedy requests.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className='col-12  mt-5  fw-semibold '>
              <p data-aos='fade-left' className='text-white text-center'>
                This is simple front-end side of Toys Rest API to perform an API requests instead of using Postman.
              </p>
              <p className='mt-2 text-white text-center fw-lighter blockquote-footer opacity-75'>
                For more info please, read out{' '}
                <a className='  text-primary bg-light p-1 rounded-2' href='https://toysrestapi.cyclic.app'>
                  {' '}
                  Documentation{' '}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
