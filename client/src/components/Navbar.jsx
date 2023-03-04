import { useState } from 'react'
import { Burger } from './Burger'
export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container-fluid'>
        <a className='navbar-brand ' href='https://toysrestapi.cyclic.app/'>
          <svg
            className='roll-in-blurred-left move-on-hover'
            width='60'
            height='28'
            viewBox='0 0 30 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect className='move-on-hover__item1' y='20' width='30' height='8' rx='4' fill='white' />
            <rect className='move-on-hover__item2' x='6' y='10' width='18' height='8' rx='4' fill='white' />
            <circle className='move-on-hover__item3' cx='15' cy='4' r='4' fill='white' />
          </svg>

          <span className='text-white' styles='font-weight: bold; background:none !important'>
            <b> Toys REST API</b>
          </span>
        </a>

        <Burger />
        <div className='collapse navbar-collapse justify-content-between' id='navbarTogglerDemo02'>
          <div className='col-lg-8'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a target='_blank' className='nav-link fw-bold text-white' href='https://toysrestapi.cyclic.app/'>
                  Cyclic
                </a>
              </li>
              <li className='nav-item'>
                <a
                  target='_blank'
                  className='nav-link fw-bold text-white'
                  href='https://toysrestapi.cyclic.app/api-docs'
                >
                  Automated docs
                </a>
              </li>
              <li className='nav-item'>
                <a
                  arget='_blank'
                  className='nav-link fw-bold text-white'
                  href='https://github.com/brandalx/SERVER-3-4-LONG-PROJECT'
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className='col-lg-2' data-aos='fade-left'>
            <a target='_blank' href='https://toysrestapi.cyclic.app'>
              <button className='mainbtn'>
                Documentation
                <svg
                  className='ms-2 mb-1'
                  width='11'
                  height='19'
                  viewBox='0 0 11 19'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2.15 0.374951L10.575 8.77495C10.675 8.87495 10.746 8.98328 10.788 9.09995C10.83 9.21662 10.8507 9.34162 10.85 9.47495C10.85 9.60828 10.829 9.73328 10.787 9.84995C10.745 9.96662 10.6743 10.075 10.575 10.175L2.15001 18.6C1.91667 18.8333 1.62501 18.95 1.27501 18.95C0.925005 18.95 0.625006 18.825 0.375006 18.575C0.125006 18.325 5.64191e-06 18.0333 5.61277e-06 17.7C5.58363e-06 17.3666 0.125006 17.075 0.375006 16.825L7.72501 9.47495L0.375004 2.12495C0.141671 1.89162 0.0250038 1.60395 0.0250038 1.26195C0.0250038 0.919952 0.150004 0.624285 0.400004 0.374951C0.650004 0.124951 0.94167 -4.87248e-05 1.275 -4.8754e-05C1.60834 -4.87831e-05 1.9 0.124951 2.15 0.374951Z'
                    fill='white'
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
