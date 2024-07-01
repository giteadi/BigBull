import {Link} from 'react-router-dom';
import logo from './../../public/logo/logo.png'


const Navbar = () => {
    return (
        <>
<nav className="border-gray-200 dark:bg-gray-900 w-full bg-white pt-3 mb-20">
  <div style={{maxWidth: 'max-width: 1920px;'}} className="flex flex-wrap items-center justify-between mx-auto">
    <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse w-32">
      <img
        src={logo}
        className="w-full"
        alt="Flowbite Logo"
      />
    </Link>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <Link
        to={'/EnrollForm'}
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-4 py-2 text-center"
      >
        Get started
      </Link>
      <button
        data-collapse-toggle="navbar-cta"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-cta"
        aria-expanded="false"
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
            strokeWidth={2}
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-cta"
    >
      <ul className="flex flex-col font-medium md:p-0 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link
            to={'/'}
            className="block py-2 text-xl px-3 hover:underline hover:underline-offset-8	decoration-rose-500 decoration-4 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
          to={'/courses'}
            className="block py-2 px-3 md:p-0 text-xl text-black text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:underline hover:underline-offset-8	decoration-rose-500 decoration-4 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Courses
          </Link>
        </li>
        <li>
          <Link
          to={'/about'}
            className="block py-2 px-3 text-xl text-black md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:underline hover:underline-offset-8	decoration-rose-500 decoration-4 transition duration-300 ease-in-out transform hover:scale-105"
          >
            About
          </Link>
        </li>
        <li>
          <Link
          to={'/ContactUs'}
            className="block py-2 px-3 text-xl md:p-0 text-black text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:underline hover:underline-offset-8	decoration-rose-500 decoration-4 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


        </>
    )
}
export default Navbar;