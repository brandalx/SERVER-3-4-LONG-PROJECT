import React from 'react'
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
// import Loader from './components/loader'
export function App() {
  return (
    <div className='App'>
      <LoadingLine />
      <Sugar color={'#ff4a6e'} background={' white'} />
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
