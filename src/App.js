import React from 'react';
import Navbar from './components/navBar';
import Emailer from './components/contactForm';
import {HealthstatLink, CapioLink} from './components/worksComponent';
import {HealthstatIcons, CapioIcons} from './components/worksIcons';

class App extends React.Component{
  render(){
    return (
      <div className="App">

                  <Navbar />

              <div className="bodycontent">
                  <h1>Zackery J Brown</h1>
                  <h2>Web Design & Applications</h2>
                  <a>I like to design, create, and learn new things!</a>
              </div>

              <div className="bodycontent">
                  <h2 className="bold">About Me</h2><br />
                  <a className="bold">Education:</a><br />
                  <a>Cornell - JavaScript Programming Certification</a><br />
                  <a>University of Texas, Arlington - Bachelor of Business Administration- Management, 2007-2012</a><br />
                  <br />

                  <a className="bold">Skills:</a><br />
                  <a>HTML - CSS - Sass</a><br />
                  <a>Javascript - jQuery</a><br />
                  <a>React</a><br />
                  <a>Visual Studio Code</a><br />
                  <a>LAMP stack - Linux, Apache, MySQL, PHP</a><br />
                  <a>Git - Github</a><br />
                  <a>FTP</a><br />
                  <a>Joomla</a><br />
                  <a>PostgreSQL - pgAdmin</a>
                  

              </div>


              <div className="bodycontent">
              <h2>My Work</h2>
              </div>

                <div className="rowcontainer">
                    <div className="columncontainer">
                        <HealthstatLink />
                        <h3>Healthstat</h3>
                        <a>This page is an example of a frontend web app with a PHP server backend.</a>
                        <a>Technologies Used:</a>
                        <HealthstatIcons />
                    </div>

                    <div className="columncontainer">
                        <CapioLink />
                        <h3>Capio Marketing</h3>
                        <a>Technologies Used:</a>
                        <CapioIcons />
                    </div>
                </div>


              



            <Emailer />

      </div>
    );
  };
};

export default App;
