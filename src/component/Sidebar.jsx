import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Customer from './Customer'

const Sidebar = () => {
  return (
    
        <div className=''>
  <button
    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span className="sr-only">Open sidebar</span>
    <svg
      className="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      />
    </svg>
  </button>
  <aside
    id="logo-sidebar"
    className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
    aria-label="Sidebar"
  >
    <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800 bg-[#015249] w-full">
      <Link to='/' className="flex items-center ps-2.5 mb-20 mx-auto">
        <img
          src="/images.png"
          className="md:h-[48px] h-7 me-3 ms-3 sm:h-7 m"
          alt="Flowbite Logo"
        />
      </Link>
      <ul className="space-y-2 font-medium mt-10">
        <li className='rounded-md p-3 shadow-md bg-[#043933]'>
            <span className="ms-3 text-white">CUSTOMERS</span>
        </li>
      </ul>
    </div>
  </aside>
  <Customer></Customer>
</div>

    
  )
}

export default Sidebar