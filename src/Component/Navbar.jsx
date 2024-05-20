import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState('')
    return (
        <div className=" py-3 px-20 mx-10">
      <div className="flex flex-row items-center justify-between p-0 m-0 space-x-10 ">
        <h1 className="text-5xl font-semibold cursor-pointer">
          SuperSport.
        </h1>
        <ul className="list-none flex flex-row space-x-10 text-xl font-normal items-center cursor-pointer ">
          <li>
            <div class="relative mt-2">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-[700px] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                required
              />
            </div>
          </li>
          
          <li
            onClick={() => {
              setMenu("football");
            }}
          >
            Football
            {menu === "football" ? (
              <hr className="w-full  h-1 rounded-lg bg-red-600 border-0" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setMenu("basketball");
            }}
          >
            Basketball
            {menu === "basketball" ? (
              <hr className="w-full  h-1 rounded-lg bg-red-600 border-0 " />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setMenu("volleyball");
            }}
          >
            Volleyball
            {menu === "volleyball" ? (
              <hr className="w-full  h-1 rounded-lg bg-red-600 border-0" />
            ) : (
              <></>
            )}
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-9 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </li>
          <li>
            <Link to='/loginsignup'>
            <button className="flex flex-row">
              Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    );
}

export default Navbar;
