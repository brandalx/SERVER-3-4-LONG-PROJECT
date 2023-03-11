import React, { useState, useEffect } from 'react'
import { Sugar } from 'react-preloaders2'
import LoadingLine from './components/Loadinline'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import PostToys from './components/PostToys'
import { Footer } from './components/Footer'
import CreateUser from './components/CreateUser'
import LogInForm from './components/LogInForm'
import UserInfo from './components/UserInfo'
import EditUser from './components/EditUser'
import ProductTable from './components/GetToysTable'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import Loader from './components/loader'
import MainTopBlocks from './components/MainTopBlocks'

export function App() {
  const [showSugar, setShowSugar] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSugar(false)
    }, 2500)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (!showSugar) {
      document.body.style.overflow = 'auto'
      document.body.style.position = 'unset'
      setTimeout(() => {
        AOS.init()
      }, 50)
    }
  }, [showSugar])

  return (
    <Router>
      <div className='App'>
        <LoadingLine />
        {showSugar && <Sugar color={'#ff4a6e'} background={' white'} time={2400} />}

        <div className='wrapper'>
          <Header />
          <Main>
            <MainTopBlocks />
            <Switch className='py-5 my-5'>
              <Route path='/create-user'>
                <CreateUser id='quickstart' className='py-5 my-5' />
              </Route>
              <Route path='/login'>
                <LogInForm className='py-5 my-5' />
              </Route>
              <Route path='/user-info'>
                <UserInfo className='py-5 my-5' />
              </Route>
              <Route path='/edit-user'>
                <EditUser className='py-5 my-5' />
              </Route>
              <Route path='/product-table'>
                <ProductTable className='py-5 my-5' />
              </Route>

              <Route path='/posttoys'>
                <PostToys className='py-5 my-5' />
              </Route>

              <Route path='/x'>
                <Link to='/x'></Link>
                <div>x</div>
              </Route>
              <Route path=''>
                <div data-aos='fade-up' data-aos-duration='600' className='container-fluid  py-2'>
                  <div className='container'>
                    <p className='text-center text-secondary'>Choose any form to start with</p>
                  </div>
                </div>
              </Route>
            </Switch>
          </Main>
        </div>

        <Footer />
      </div>
    </Router>
  )
}
