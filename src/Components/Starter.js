import React, {useState} from 'react';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';
import * as Si from 'react-icons/si';
import { Link } from 'react-router-dom';
import './Starter.css';
import photo from './amitabh_photo.png'

export default function Starter(props) {

return (
<>
	<center className="mt-5" id="intro">
	<h1 id="name">Amitabh Raj</h1>
	<div className="mx-5">
		<p id="short-intro" className="mx-5">
			A high school student who does not have a college degree but well Experienced 
			in the field of Programing and with proven end-to-end development skills. 
			Worked in Two Startup Companies as Full stack web Developer and made Company 
			Profitable and raise the Efficiency of The Company.
		</p>
	</div>
	<img src={photo} id="photo"/>
	</center>
	<br/>
</>
);
};