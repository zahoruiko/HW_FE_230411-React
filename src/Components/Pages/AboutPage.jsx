import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../AppContext/AppContext';

function AboutPage() {

  const appInstallFolder = useContext(AppContext);
  const mainPageUrl = appInstallFolder + "/";

  return (
    <>
      <h2>About us</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet minima quam vel perspiciatis neque qui corporis quia at! Sit ipsa dolorem minima quam ratione eveniet quasi ipsum eligendi tempora ex.</p>
      {/* <NavLink to='/'>Main page</NavLink> */}
      <NavLink to={mainPageUrl}>Main page</NavLink>
      {/* <NavLink to='/HW_FE_230411/'>Main page</NavLink> */}
    </>
  )
}

export default AboutPage