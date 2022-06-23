import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebarData';
import * as ai from 'react-icons/ai';
import * as fi from 'react-icons/fi';
import './Resume.css';
import { IconContext } from 'react-icons';





export default function Resume(props) {

  return (
    <>
    <div className="flex">
    	<center>
    	<h1 id="header-name"><ai.AiOutlineDownload/>Download Resume</h1>
    	<Link to="/Amitabh-raj_resume.pdf" target="__blank" download>
    		<button className="btn btn-danger" id="button-btn">
    		<fi.FiDownload/> Download Resume</button>
    	</Link>
    </center></div>
    </>
  );
}








