import { NavLink } from "react-router-dom";

const Navbar = () => {
   
    return (
        <div className="navbar bg-base-100 container mx-auto my-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink
            className={({ isActive }) =>
              isActive ? 'font-semibold text-lg primary-color border border-primary-color px-5 py-3 rounded-lg ' : 'font-normal text-lg'
            }
            to='/'
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
            isActive ? 'font-semibold text-lg primary-color border border-primary-color px-5 py-3 rounded-lg ' : 'font-normal text-lg'
            }
            to='/listedBooks'
          >
           Listed Books
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'font-semibold text-lg primary-color border border-primary-color px-5 py-3 rounded-lg ' : 'font-normal text-lg'
            }
            to='/bookmarks'
          >
            Pages to Read
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'font-semibold text-lg primary-color border border-primary-color px-5 py-3 rounded-lg ' : 'font-normal text-lg'
            }
            to='/bookmarks'
          >
            New
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'font-semibold text-lg primary-color border border-primary-color px-5 py-3 rounded-lg ' : 'font-normal text-lg'
            }
            to='/bookmarks'
          >
           Neww
          </NavLink>
      </ul>
    </div>
    <NavLink to="/" className="btn btn-ghost text-xl lg:text-2xl font-bold">Book Vibe</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex items-center gap-4">
    <NavLink
            className={({ isActive }) =>
              isActive ? 'font-semibold text-lg primary-color border border-[#23BE0A] px-5 py-3 rounded-lg ' : 'font-normal text-lg'
            }
            to='/'
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? 'font-semibold text-lg primary-color border border-primary-color px-5 py-3 rounded-lg ' : 'font-normal text-lg'
            }
            to='/listedbooks'
          >
           Listed Books
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'font-semibold text-lg primary-color border border-primary-color px-5 py-3 rounded-lg ' : 'font-normal text-lg'
            }
            to='/bookmarks'
          >
            Pages to Read
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'font-semibold text-lg primary-color border border-primary-color px-5 py-3 rounded-lg ' : 'font-normal text-lg'
            }
            to='/bookmarks'
          >
            New
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'font-semibold text-lg primary-color border border-primary-color px-5 py-3 rounded-lg ' : 'font-normal text-lg'
            }
            to='/bookmarks'
          >
           Neww
          </NavLink>
    </ul>
  </div>
  <div className="navbar-end flex  gap-4">
    <a className="btn text-white bg-[#23BE0A]">Sign In</a>
    <a className="btn text-white bg-[#59C6D2]">Sign Up</a>
  </div>
</div>
    );
};

export default Navbar;