import React from 'react'
import { NavLink } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <h2>Not found</h2>
      <NavLink to='/'>Main page</NavLink>
    </>
  )
}

export default NotFoundPage