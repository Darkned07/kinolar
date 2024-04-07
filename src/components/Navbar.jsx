import React from "react";
import { Link } from "react-router-dom";
import { them } from "../function/them";

function Navbar() {
  them();
  const nav = [
    { href: "kino", names: "kinolar", id: "1" },
    { href: "serial", names: "seriallar", id: "2" },
  ];

  return (
    <>
      <div className="max-container navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/" className="capitalize font-normal text-[18px]">
                  Home
                </Link>
              </li>
              {nav.map((n) => {
                return (
                  <li key={n.id}>
                    <Link
                      className="capitalize font-normal text-[18px]"
                      to={`/films-filters-cinematik-names/${n.href}`}
                    >
                      {n.names}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            Kino Izlovchi
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="capitalize font-normal text-[18px]">
                Home
              </Link>
            </li>
            {nav.map((n) => {
              return (
                <li key={n.id}>
                  <Link
                    className="capitalize font-normal text-[18px]"
                    to={`/films-filters-cinematik-names/${n.href}`}
                  >
                    {n.names}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="change-theme" className="btn-sm btn md:btn-md">
            change theme
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
