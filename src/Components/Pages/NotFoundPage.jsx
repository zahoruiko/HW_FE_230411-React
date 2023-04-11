import React from 'react'
import { NavLink } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <h2>Not found</h2>
      {/* <NavLink to='/'>Main page</NavLink> */}
      <NavLink to='/HW_FE_230411/'>Main page</NavLink>
    </>
  )
}

export default NotFoundPage