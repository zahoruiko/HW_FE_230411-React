import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AppContext } from '../AppContext/AppContext';

function NotFoundPage() {

  const appInstallFolder = useContext(AppContext);
  const mainPageUrl = appInstallFolder + "/";

  return (
    <>
      <h2>Not found</h2>
      {/* <NavLink to='/'>Main page</NavLink> */}
      {/* <NavLink to='/HW_FE_230411/'>Main page</NavLink> */}
      <NavLink to={mainPageUrl}>Main page</NavLink>
    </>
  )
}

export default NotFoundPage