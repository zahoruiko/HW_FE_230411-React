import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AppContext } from '../AppContext/AppContext';

function MainPage() {

  const appInstallFolder = useContext(AppContext);
  const aboutPageUrl = appInstallFolder + "/about";

  return (
    <>
      <h2>Main page</h2>
      <h3>Hello, user!</h3>
      {/* <NavLink to='/about'>About us</NavLink> */}
      <NavLink to={aboutPageUrl}>About us</NavLink>
      {/* <NavLink to='/HW_FE_230411/about'>About us</NavLink> */}
    </>
  )
}

export default MainPage;