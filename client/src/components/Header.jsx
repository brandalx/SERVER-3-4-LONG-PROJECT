import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./Navbar";

export const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <header className="page-header css-selector styled ">
      <div className="container">
        <Navbar />
      </div>
      <div className="container-fluid partMain">
        <div className="container">
          <h1
            data-aos="fade-right"
            className="text-white text-center fw-bolder display-4 text-focus-in roll-in-blurred-left"
          >
            Toys REST API
            <svg
              className="move-on-hover mb-2"
              width="80px"
              height="50"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className="move-on-hover__item1"
                y="21"
                width="30"
                height="9"
                rx="4"
                fill="#C77DFF"
              />
              <rect
                className="move-on-hover__item2"
                x="6"
                y="11"
                width="18"
                height="8"
                rx="4"
                fill="#FDE781"
              />
              <ellipse
                className="move-on-hover__item3"
                cx="15"
                cy="4.5"
                rx="4"
                ry="4.5"
                fill="#FC5C7C"
              />
            </svg>
          </h1>
          <p className="text-white text-center">Front end side</p>
          <div className="row align-items-center">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 justify-content-center">
              <div className="col" data-aos="fade-up" data-aos-duration="700">
                <a
                  className="text-decoration-none text-dark"
                  href="#introduction"
                >
                  <div
                    className="card cardintro rounded-4 border-0 h-100"
                    styles="background: #d1ffd186"
                  >
                    <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                      <div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 4C3 2.34315 4.34315 1 6 1H18C19.6569 1 21 2.34315 21 4V22C21 22.3375 20.8298 22.6522 20.5473 22.8369C20.2649 23.0216 19.9084 23.0514 19.5992 22.9162L16 21.3415L12.4008 22.9162C12.1453 23.0279 11.8547 23.0279 11.5992 22.9162L8 21.3415L4.40082 22.9162C4.09164 23.0514 3.73509 23.0216 3.45265 22.8369C3.17022 22.6522 3 22.3375 3 22V4ZM6 3C5.44772 3 5 3.44772 5 4V20.471L7.59918 19.3338C7.8547 19.2221 8.1453 19.2221 8.40082 19.3338L12 20.9085L15.5992 19.3338C15.8547 19.2221 16.1453 19.2221 16.4008 19.3338L19 20.471V4C19 3.44772 18.5523 3 18 3H6Z"
                            fill="#FF4A6E"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 12H6.5V10H13V12Z"
                            fill="#FF4A6E"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 16H6.5V14H13V16Z"
                            fill="#FF4A6E"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.5 12H15.5V10H17.5V12Z"
                            fill="#FF4A6E"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.5 16H15.5V14H17.5V16Z"
                            fill="#FF4A6E"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 8H6.5V6H13V8Z"
                            fill="#FF4A6E"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.5 8H15.5V6H17.5V8Z"
                            fill="#FF4A6E"
                          />
                        </svg>
                      </div>
                      <h5 className="card-title">Documentation</h5>

                      <p className="card-text text-body-secondary">
                        Everything you need to know about this Toys REST API
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col" data-aos="fade-up" data-aos-duration="800">
                <a
                  className="text-decoration-none text-dark"
                  href="#quickstart"
                >
                  <div
                    className="card cardintro rounded-4 border-0 h-100"
                    styles="background: #fcffd186"
                  >
                    <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                      <div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1 10.5C1 7.73858 3.23858 5.5 6 5.5H18C20.7614 5.5 23 7.73858 23 10.5V17.5C23 19.7091 21.2091 21.5 19 21.5H18.5C17.241 21.5 16.0554 20.9072 15.3 19.9L13.8 17.9C13.6111 17.6482 13.3148 17.5 13 17.5H10.6085C10.2637 17.5 9.94324 17.6776 9.7605 17.97L8.72925 19.62C7.9983 20.7895 6.71642 21.5 5.33726 21.5H5C2.79086 21.5 1 19.7091 1 17.5V10.5ZM6 7.5C4.34315 7.5 3 8.84315 3 10.5V17.5C3 18.6046 3.89543 19.5 5 19.5H5.33726C6.02684 19.5 6.66778 19.1448 7.03325 18.56L8.0645 16.91C8.61272 16.0329 9.57413 15.5 10.6085 15.5H13C13.9443 15.5 14.8334 15.9446 15.4 16.7L16.9 18.7C17.2777 19.2036 17.8705 19.5 18.5 19.5H19C20.1046 19.5 21 18.6046 21 17.5V10.5C21 8.84315 19.6569 7.5 18 7.5H6Z"
                            fill="#FF4A6E"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.5 13.5H4.5V11.5H9.5V13.5Z"
                            fill="#FF4A6E"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8 10V15H6V10H8Z"
                            fill="#FF4A6E"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 3.5V6.5H11V3.5H13Z"
                            fill="#FF4A6E"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.5 15H15.5V13H17.5V15Z"
                            fill="#FF4A6E"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.5 12H17.5V10H19.5V12Z"
                            fill="#FF4A6E"
                          />
                        </svg>
                      </div>
                      <h5 className="card-title">Fast start</h5>
                      <p className="card-text text-body-secondary">
                        Quickly access Toys REST API via this site with speedy
                        requests.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-12  mt-5  fw-semibold ">
              <p data-aos="fade-left" className="text-white text-center">
                This is simple front-end side of Toys Rest API to perform an API
                requests instead of using Postman.
              </p>
              <p className="mt-2 text-white text-center fw-lighter blockquote-footer opacity-75">
                For more info please, read out{" "}
                <a
                  className="  text-primary bg-light p-1 rounded-2"
                  href="https://toysrestapi.cyclic.app"
                >
                  {" "}
                  Documentation{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
