import React, {useState} from 'react';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';
import * as Si from 'react-icons/si';
import { Link , NavLink } from 'react-router-dom';
import './Contact.css';

export default function Resume(props) {

return (
 <section className="mb-4 mx-4">


    <h2 className="h1-responsive font-weight-bold text-center my-4"><u>Contact Me</u></h2>

    <div className="row">


        <div className="text-center">
            <ul className="list-unstyled" id="ul-contact">
                <li className="mx-5 mt-5">
                	<Si.SiGmail id="Gmail"/><br/><br/>
                	<h3 id="phone_color">geniusraunakmishra@gmail.com</h3>
                </li>


                <li className="mx-5 mt-5">
                    <FaIcons.FaPhone id="phone"/><br/><br/>
                        <h3 id="phone_color">+91 9798140938</h3>
                </li>


            </ul>
        </div>


    </div>

</section>
  );
}
