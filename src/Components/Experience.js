import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './Experience.css';
import { Link } from 'react-router-dom';

export default function Experience(props) {

	return (
		<div className="mx-4">

		<br/>

        <div className="work_experience">
            <hr id="hr"/><p id="work_experience">Work Experience</p><hr id="hr"/>
            <div id="experience"><br/>
                <h3 id="degree">Django Backend Developer Intern at BPSC</h3>
                <p id="institution" className="mt-2">
                    <div style={{width:"90%"}}>
                        i had done an internship in a Start-up Company as a django backend Developer where i have integrated some Features like payment Gateway,Google Login Feature and many more...and also Deployed that website using Amazon ec2 instance
                    </div>
                <p className="mt-2" id="duration">june,2021- April,2022</p>
                </p>
            </div>
        </div>



        <div id="experience"><br/>
                <h3 id="degree">Full Stack Web Developer Intern at Sarva Suvidhaen</h3>
                <p id="institution" className="mt-2">
                    <div style={{width:"90%"}}>
                    I Have Done an internship in a Solar Panel Based Start-up Company as a Full Stack web Developer where i Made a real time Data Graph using IOT and i Have Deployed that website using Amazon ec2 instance as well.
                    </div>
                <p className="mt-2" id="duration">june,2021- Currently Working</p>
                </p>
        </div><br/>


        <div id="experience"><br/>
                <h3 id="degree">Django-React Full Stack Developer Intern at Hexmart</h3>
                <p id="institution" className="mt-2">
                    <div style={{width:"90%"}}>
                    Just, i Have Done an internship in a Salon Platform Startup Company as a Django-React.js Full Stack web Developer in Which i Have i Have Dealed With Various Problems and Implemented Some Awsesome Features Like Razorpay Payment Gateway,Google Captcha,Order Services Through Online & Inverntry Management Services.
                    </div>
                <p className="mt-2" id="duration">July,2021- 5th Sept,2021</p>
                </p>
        </div><br/>




<br/>

<div className="personal_achievement">
            <hr id="hr"/><p id="personal_achievement">Personal Achievement</p><hr id="hr"/><br/>
            <section id="achievement">
                <p><li>Made A Real Time Graph Generation of Railway Data using Django & Chart.js Library</li></p>
                <p><li>Made E-commerce Website using Django and Deployed on Pythonanywhere</li></p>
                <p><li>Made BMI Index Website using Flask and Deployed on Pythonanywhere</li></p>
                <p><li>Participated in a AI Workshop Organised by Guvi</li></p>
            </section>
        </div><br/><br/>

<br/>


        <div className="personal_achievement">
            <hr id="hr"/><p id="personal_achievement">Certification/Courses</p><hr id="hr"/>
            <section id="achievement"><br/>
                <p><li>4 Star Coder of Python at HackerRank</li></p>
                <p><li>Certification in Django From Google</li></p>
                <p><li>Certification in python on Guvi</li></p>
                <p><li>Certification in Git and Github From Google</li></p>
            </section>
        </div><br/><br/>





		</div>
);
};