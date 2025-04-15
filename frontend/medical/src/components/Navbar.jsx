import { useState, React } from "react";
import Logo from '../assets/foto/toplogo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="border-gray-200 bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src={Logo}
          className="h-18"
          alt="Flowbite Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-indigo-200">
          Medi<span className="text-green-600">Flow</span>
        </span>
      </a>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full md:block md:w-auto`}
        id="navbar-default"
      >
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block md:inline md:mx-2 mt-1 py-2 px-3 rounded-sm text-center md:p-0 text-white bg-blue-700 md:bg-transparent md:text-white dark:text-white md:dark:text-blue-500">
                Home
              </a>
            </li>
            <li>
                <a href="#" className="block md:inline md:mx-2 mt-1 py-2 px-3 rounded-sm text-center md:p-0 text-white bg-blue-700 md:bg-transparent md:text-white dark:text-white md:dark:text-blue-500">
                    All Doctors
                </a>
            </li>
            <li>
                <a href="#" className="block md:inline md:mx-2 mt-1 py-2 px-3 rounded-sm text-center md:p-0 text-white bg-blue-700 md:bg-transparent md:text-white dark:text-white md:dark:text-blue-500">
                    About
                </a>
            </li>
            <li>
                <a href="#" className="block md:inline md:mx-2 mt-1 py-2 px-3 rounded-sm text-center md:p-0 text-white bg-blue-700 md:bg-transparent md:text-white dark:text-white md:dark:text-blue-500">
                    Contact
                </a>
            </li>
            <li>
                <a href="#" className="block md:inline md:mx-2 mt-1 py-2 px-3 rounded-sm text-center md:bg-transparent underline border-gray-400 md:p-4 text-white bg-blue-700 md:text-white dark:text-white md:dark:text-blue-500">
                    Admin Panel
                </a>
            </li>
            <span className="text-gray-500 text-center">
                or
            </span>
            <li>
                <a href="login/" className="block md:inline md:mx-2 mt-1 py-2 px-3 rounded-sm text-center md:bg-blue-700 border-gray-400 md:p-4 text-white bg-blue-700 text-white hover:bg-blue-500 transition-all">
                    Create Account
                </a>
            </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar