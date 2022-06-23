import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FcIcons from 'react-icons/fc';
import * as Ri from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <IoIcons.IoIosHome />,
    cName: 'nav-text'
  },
  {
    title: 'Skills',
    path: '/skill',
    icon: <IoIcons.IoIosBulb />,
    cName: 'nav-text'
  },
  {
    title: 'Experience',
    path: '/experience',
    icon: <Ri.RiUserStarLine />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Me',
    path: '/contactme',
    icon: <FaIcons.FaPhone />,
    cName: 'nav-text'
  },
  {
    title: 'Resume',
    path: '/resume',
    icon: <FaIcons.FaFile />,
    cName: 'nav-text'
  },
];




