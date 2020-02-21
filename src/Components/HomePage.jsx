import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../Global.css';
import image from '../Globals/sample.png'

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
        <img src={image} width="20px" height="20px"/>
        <div className="homeHeaderTitle">
          Felicitas Deutges
        </div>
      </div>
      <div className="homeNavBox">
        <a className="homeNavBoxButtons" href="#me">Me</a>
        <a className="homeNavBoxButtons" href="#experience">Experience</a>
        <a className="homeNavBoxButtons" href="#projects">Projects</a>
        <a className="homeNavBoxButtons" href="#skills">Skills</a>
        <a className="homeNavBoxButtons" href="#contact">Contact</a>
        <a className="homeNavBoxButtons" href="#contact">-> Resume</a>
      </div>
      <div className="homeBody">
        <a name="me"></a>
        <div className="me">
          <div className="bodySectionTitle">Me</div>
        </div>
        <a name="experience"></a>
        <div className="experience">
          <div className="bodySectionTitle">Experience</div>
        </div>
        <a name="projects"></a>
        <div className="projects">
          <div className="bodySectionTitle">Projects</div>
        </div>
        <a name="skills"></a>
        <div className="skills">
          <div className="bodySectionTitle">Skills</div>
        </div>
        <a name="contact"></a>
        <div className="contact">
          <div className="bodySectionTitle">Contact</div>
        </div>
      </div>
      <div className="homeFooter">
        <a href="" className="homeFooterText">Back to top</a>
      </div>
    </div>
   );
  }
 }
 

export default connect(mapStateToProps)(HomePage);
