import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink
          to="/login"
          className="formLinks"
        >
          Log In
        </NavLink>
        <NavLink
          to="/signup"
          className="formLinks"
        >
          Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <ul className="linksBar">
      <li>
        <NavLink
        exact to="/"
        className="homeLink"
        >
          Home
        </NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
