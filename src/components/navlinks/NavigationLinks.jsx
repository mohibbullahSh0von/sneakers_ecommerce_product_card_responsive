import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigationLinks() {
  return (
    <>
      <li className="cursor-pointer capitalize">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? 'border-b-theme-orange border-b-2 pb-4 font-bold' : ''
          }
        >
          Home
        </NavLink>
      </li>
      <li className="cursor-pointer capitalize">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'border-b-theme-orange border-b-2 pb-4 font-bold' : ''
          }
        >
          Collection
        </NavLink>
      </li>
      <li className="cursor-pointer capitalize">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'border-b-theme-orange border-b-2 pb-4 font-bold' : ''
          }
        >
          Contact
        </NavLink>
      </li>
      <li className="cursor-pointer capitalize">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'border-b-theme-orange border-b-2 pb-4 font-bold' : ''
          }
        >
          About
        </NavLink>
      </li>
    </>
  );
}

export default NavigationLinks;
