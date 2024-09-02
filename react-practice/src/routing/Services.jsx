import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Services() {
  return (
    <div>
      
      <Link to='/services/service1'>Service 1</Link>
      <Link>Service 1</Link>
      <Link>Service 1</Link>
      <Outlet/>
    </div>
  )
}

export default Services
