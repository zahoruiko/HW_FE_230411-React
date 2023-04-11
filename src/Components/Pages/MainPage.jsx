import React from 'react'
import { NavLink } from 'react-router-dom';

function MainPage() {

  return (
    <>
      <h2>Main page</h2>
      <h3>Hello, user!</h3>
      {/* <NavLink to='/about'>About us</NavLink> */}
      <NavLink to='/HW_FE_230411/about'>About us</NavLink>
    </>
  )
}

export default MainPage;