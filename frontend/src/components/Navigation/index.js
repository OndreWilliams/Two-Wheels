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
      <ProfileButton  user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink
          to="/login"
          className=" login-button"
        >
          <button className="formLinks">
            Log In
          </button>
        </NavLink>
        <NavLink
          to="/signup"
          className="signup-button"
        >
          <button className="formLinks">
            Sign Up
          </button>
        </NavLink>
      </>
    );
  }

  return (
    <div className="linksBar">
      <NavLink
        exact to="/"
        className="homeLink"
      >
        Two Wheels
      </NavLink>

      {isLoaded && sessionLinks}

      <NavLink
        to="/cart"
        className="cart-button"
      >
        <button className="formLinks">
          Cart
        </button>
      </NavLink>
    </div>
  );
}

export default Navigation;
