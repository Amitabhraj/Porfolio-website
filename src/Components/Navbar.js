import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { SidebarData } from './sidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';



export default function Navbar(props) {


  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>

      <IconContext.Provider value={{ color: '#fff' }}>


        <div className="navbar-expand-lg mx-0">
              <div className='navbar-collapse'>
                    <NavLink to='#'exact className='menu-bars'>
                      <FaIcons.FaBars onClick={showSidebar} id="svg"/>
                    </NavLink>

                    <NavLink to='' exact className='header-bars mx-5'>
                      Home
                    </NavLink>

                    <NavLink to='/skill' exact className='header-bars mx-5'>
                      Skills
                    </NavLink>

                    <NavLink to='/experience' exact className='header-bars mx-5'>
                      Experience
                    </NavLink>

                    <NavLink to='/contactme' exact className='header-bars mx-5'>
                      Contact Me
                    </NavLink>

                    <NavLink to='/resume' exact className='header-bars mx-5'>
                      Resume
                    </NavLink>

                </div>
              <div className="default-nav"></div>
              <div className="default-nav2"></div>
        </div>        


        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <NavLink to='#' exact className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </NavLink>
            </li>


        <div className='header-nav'>
        </div>
            {SidebarData.map((item, index) => {
              return (

                <li key={index} className={item.cName}>
                  
                  <NavLink to={item.path} exact id="side-nav-key">
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>

                </li>

              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}