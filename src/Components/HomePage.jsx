import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../Global.css';
import image from '../Globals/LogoRaw.png'

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
          <img src={image} className="homeHeaderImage" alt=""/>
          Felicitas Deutges
        </div>
      </div>
      <div className="homeNavBar">
        <div className="homeNavBarButtons">
          <a href="#me" style={{color:"white"}}>Me</a>
          <a href="#experience" style={{color:"white"}}>Experience</a>
          <a href="#projects" style={{color:"white"}}>Projects</a>
          <a href="#skills" style={{color:"white"}}>Skills</a>
          <a href="#contact" style={{color:"white"}}>Contact</a>
          <a href="https://drive.google.com/file/d/19WHt13GpigzjlSWyPR5IpdWayys2wx32/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{color:"white"}}>Resume</a>
        </div>
      </div>
      <div className="me"><a name="me">Me</a></div>
      <div className="experience"><a name="experience">Experience</a></div>
      <div className="projects"><a name="projects">Projects</a></div>
      <div className="skills"><a name="skills">Skills</a></div>
      <div className="contact"><a name="contact">Contact</a></div>
      <div className="homeFooter">
        <a href="#me" style={{color:"white"}}>Back to top</a>
      </div>
    </div>
   );
  }
 }
 

export default connect(mapStateToProps)(HomePage);
