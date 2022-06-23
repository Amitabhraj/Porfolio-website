import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import './Skill.css';
import { IconContext } from 'react-icons';



export default function Skill(props) {
    
    return (


<div className="main_div">
<center><h1 id="name-skill" className="head"><u>Programming Language</u></h1></center>
              <div className="row mx-4 mt-3">
              
                  <div className="col-xl-6 col-md-7 mt-3">
                  <h4 id="name-skill">Python</h4>
                    <div className="progress">
                      <div className="python-progress-bar bg-warning">
                            <center id="name-skill"><b>95%</b></center>
                       </div>
                    </div>
                  </div>



                  <div className="col-xl-6 col-md-7 mt-3">
                  <h4 id="name-skill">HTML/CSS</h4>
                    <div className="progress">
                      <div className="html-css-progress-bar bg-info">
                            <center id="name-skill"><b>85%</b></center>
                       </div>
                    </div>
                  </div>



                  <div className="col-xl-6 col-md-7 mt-3">
                  <h4 id="name-skill">Javascript</h4>
                    <div className="progress">
                      <div className="javascript-progress-bar bg-danger">
                            <center id="name-skill"><b>60%</b></center>
                       </div>
                    </div>
                  </div>


              </div>



<br/>
<br/>
<center><h1 id="name-skill" className="mt-4"><u>Framework/Library</u></h1></center>
              <div className="row mx-4">
              
                  <div className="col-xl-6 col-md-7 mt-3">
                  <h4 id="name-skill">Django</h4>
                    <div className="progress">
                      <div className="django-progress-bar bg-secondary">
                            <center id="name-skill"><b>95%</b></center>
                       </div>
                    </div>
                  </div>



                  <div className="col-xl-6 col-md-7 mt-3">
                  <h4 id="name-skill">React.js</h4>
                    <div className="progress">
                      <div className="react-progress-bar bg-primary">
                            <center id="name-skill"><b>60%</b></center>
                       </div>
                    </div>
                  </div>


                  <div className="col-xl-6 col-md-7 mt-3">
                  <h4 id="name-skill">Flask</h4>
                    <div className="progress">
                      <div className="flask-progress-bar bg-success">
                            <center id="name-skill"><b>80%</b></center>
                      </div>
                    </div>
                  </div>



                  <div className="col-xl-6 col-md-7 mt-3">
                  <h4 id="name-skill">Node.js</h4>
                    <div className="progress">
                      <div className="node-progress-bar bg-info">
                            <center id="name-skill"><b>50%</b></center>
                      </div>
                    </div>
                  </div>



                  <div className="col-xl-6 col-md-7 mt-3">
                  <h4 id="name-skill">Bootstrap</h4>
                    <div className="progress">
                      <div className="bootstrap-progress-bar bg-danger">
                            <center id="name-skill"><b>85%</b></center>
                      </div>
                    </div>
                  </div>


              </div>

<br/>
<br/>

<center><h1 id="name-skill" className="mt-4"><u>Technical Skills</u></h1></center>
              <div className="row mx-4 mt-3">
              
                  <div className="col-xl-6 col-md-7 mt-3">
                  <h4 id="name-skill">Git/Github</h4>
                    <div className="progress">
                      <div className="git-github-progress-bar bg-warning">
                            <center id="name-skill"><b>90%</b></center>
                       </div>
                    </div>
                  </div>



                  <div className="col-xl-6 col-md-7 mt-3">
                  <h4 id="name-skill">AWS ec2</h4>
                    <div className="progress">
                      <div className="aws-progress-bar bg-danger">
                            <center id="name-skill"><b>60%</b></center>
                       </div>
                    </div>
                  </div>


                  <div className="col-xl-6 col-md-7 mt-3">
                  <h4 id="name-skill">Linux</h4>
                    <div className="progress">
                      <div className="linux-progress-bar bg-dark">
                            <center id="name-skill"><b>60%</b></center>
                       </div>
                    </div>
                  </div>


              </div>  

<br/>
<br/>                          
</div>
    )
}
