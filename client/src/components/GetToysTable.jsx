import React, { useEffect, useState } from 'react'

import axios from 'axios'

const ProductTable = () => {
  const [ar, setAr] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [sortOption, setSortOption] = useState('name')
  const [sortDescending, setSortDescending] = useState(false)

  useEffect(() => {
    handleApiRequest()
  }, [currentPage, sortOption, sortDescending])

  const handleApiRequest = async () => {
    let url = `https://toysrestapi.cyclic.app/toys?page=${currentPage}&sort_by=${sortOption}&desc=${
      sortDescending ? 'true' : 'false'
    }`
    let resp = await axios.get(url)
    console.log(resp.data)
    let sortedData = resp.data.sort((a, b) => {
      if (sortOption === 'name') {
        return sortDescending ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
      } else if (sortOption === 'price') {
        return sortDescending ? b.price - a.price : a.price - b.price
      } else {
        return sortDescending
          ? new Date(b.date_created) - new Date(a.date_created)
          : new Date(a.date_created) - new Date(b.date_created)
      }
    })
    setAr(sortedData)
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value)
  }

  const handleSortDescendingChange = (event) => {
    setSortDescending(event.target.checked)
  }

  return (
    <>
      <div data-aos='fade-up' data-aos-duration='700' className='container-fluid py-5'>
        <div className='container '>
          <h2 className=' text-center'>
            Toys{' '}
            <b>
              <code>GET</code>
            </b>{' '}
            request{' '}
            <svg
              className='move-on-hover mb-4'
              width='80px'
              height='50'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect className='move-on-hover__item1' y='21' width='30' height='9' rx='4' fill='#ff4a6e' />
              <rect className='move-on-hover__item2' x='6' y='11' width='18' height='8' rx='4' fill='#ff4a6e' />
              <ellipse className='move-on-hover__item3' cx='15' cy='4.5' rx='4' ry='4.5' fill='#ff4a6e' />
            </svg>
          </h2>
          <p className='text-secondary text-center'>This is /toys route</p>
          <div className='row  '>
            <div className='col-lg-6  col-12 mb-5 '>
              <div className='col-6'>
                <label>
                  Sort by:
                  <select className='form-control' value={sortOption} onChange={handleSortOptionChange}>
                    <option className='form-select' value='name'>
                      Name
                    </option>
                    <option value='price'>Price</option>
                    <option value='date_created'>Date created</option>
                  </select>
                </label>
              </div>
              <div className='col-6 mt-3 '>
                <label>
                  Descending:
                  <input
                    checked={sortDescending}
                    className=' ms-3   h-auto'
                    type='checkbox'
                    onChange={handleSortDescendingChange}
                  />
                </label>
              </div>
            </div>
            <div data-aos='fade-up' data-aos-duration='700' className='col-12'>
              <div className='table-responsive'>
                <table className='table table-hover'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>info</th>
                      <th>Price</th>
                      <th>Date created</th>
                    </tr>
                  </thead>
                  {ar.length === 0 ? (
                    <tbody key={Date.now}>
                      <tr>
                        <td className='text-secondary'>No data available</td>
                        <td className='text-secondary'>No data available</td>
                        <td className='text-secondary'>No data available</td>
                        <td className='text-secondary'>No data available</td>
                      </tr>
                    </tbody>
                  ) : (
                    <>
                      {ar.map((item) => {
                        return (
                          <tbody key={item._id}>
                            <tr>
                              <td>{item.name}</td>
                              <td>{item.info}</td>
                              <td>{item.price}</td>
                              <td>{item.date_created}</td>
                            </tr>
                          </tbody>
                        )
                      })}
                    </>
                  )}
                </table>
              </div>
            </div>
            <div className='col-12 '>
              <div className='pagination py-5'>
                <button
                  className='btn btn-primary submitbtn me-2'
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </button>
                <button
                  disabled={ar.length === 0}
                  className='btn btn-primary submitbtn'
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductTable
