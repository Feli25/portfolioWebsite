import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../Global.scss';
// import image from '../globals/LogoRaw.png'

import Contact from './Contact'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import Me from './Me'

const mapStateToProps = state => ({
  ...state
})

class HomePage extends Component {
  updateStore = (event) => {
    this.props.dispatch({type:"UPDATE_STORE", name:event.target.name, value:event.target.value})
   }
  render() {
   return (
    <div className="home">
      <div className="homeHeader">
        <div className="homeHeaderTitle">
          {/* <img src={image} className="homeHeaderImage" alt=""/> */}
          Felicitas Deutges
        </div>
      </div>
      <div className="homeBody">
        <div className="homeNavBox">
          <a href="#me">Me</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href="https://drive.google.com/file/d/19WHt13GpigzjlSWyPR5IpdWayys2wx32/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
        <Me/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
      <div className="homeFooter">
        <a href="#me" className="homeFooterText">Back to top</a>
      </div>
    </div>
   );
  }
 }
 

export default connect(mapStateToProps)(HomePage);
