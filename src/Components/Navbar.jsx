import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../Mobile.scss';
// import '../Global.scss';

const mapStateToProps = state => ({
  ...state
})


class Navbar extends Component {
  updateStore = (event) => {
    this.props.dispatch({type:"UPDATE_STORE", name:event.target.name, value:event.target.value})
   }
  render() {
    return(
			<div className="homeNavBox">
          <a href="#me">Me</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href="https://drive.google.com/file/d/19WHt13GpigzjlSWyPR5IpdWayys2wx32/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
   );
  }
 }
 

export default connect(mapStateToProps)(Navbar);