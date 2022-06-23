import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './Experience.css';

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
                    Currently i am doing an internship in a Solar Panel Based Start-up Company as a Full Stack web Developer where i am Making a real time Data Graph using IOT and i will be Deploying this website using Amazon ec2 instance as well.
                    </div>
                <p className="mt-2" id="duration">june,2021- Currently Working</p>
                </p>
        </div><br/>




<br/>

<div className="personal_achievement">
            <hr id="hr"/><p id="personal_achievement">Personal Achievement</p><hr id="hr"/><br/>
            <section id="achievement">
                <p><li>Made E-commerce Website using Django and Deployed on Pythonanywhere</li></p>
                <p><li>Made BMI Index Website using Flask and Deployed on Pythonanywhere</li></p>
                <p><li>Participated in a AI Workshop Organised by Guvi</li></p>
            </section>
        </div><br/><br/>

<br/>


        <div className="personal_achievement">
            <hr id="hr"/><p id="personal_achievement">Certification/Courses</p><hr id="hr"/>
            <section id="achievement"><br/>
                <p><li>Certification in Django From Google</li></p>
                <p><li>Certification in python on Guvi</li></p>
                <p><li>Certification in Git and Github From Google</li></p>
            </section>
        </div><br/><br/>





		</div>
);
};