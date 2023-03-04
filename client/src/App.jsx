import React, { useState, useEffect } from 'react'
import { Sugar } from 'react-preloaders2'
import LoadingLine from './components/Loadinline'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import CreateUser from './components/CreateUser'
import LogInForm from './components/LogInForm'
import UserInfo from './components/UserInfo'
import EditUser from './components/EditUser'
import ProductTable from './components/GetToysTable'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import Loader from './components/loader'

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
    <div className='App'>
      <LoadingLine />
      {showSugar && <Sugar color={'#ff4a6e'} background={' white'} time={2400} />}

      <div className='wrapper'>
        <Header />
        <Main>
          <CreateUser />
          <LogInForm />
          <UserInfo />
          <EditUser />
          <ProductTable />
        </Main>
      </div>

      <Footer />
    </div>
  )
}
