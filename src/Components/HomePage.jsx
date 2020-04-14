import React, {Component} from 'react';
import { connect } from 'react-redux';
import CarouselContainer from './Carousel';
import '../Global.scss';

// import mailbox from '../Globals/mailBox.jpg';
// import feliPic from '../Globals/Profile-pic.png';
// import jsLogo from '../Globals/js.png';
// import reactLogo from '../Globals/react.png';
// import reduxLogo from '../Globals/redux.png';
// import phpLogo from '../Globals/php.png';
// import htmlLogo from '../Globals/html.png';
// import cssLogo from '../Globals/css.png';
// import gitLogo from '../Globals/git.png';
// import githubLogo from '../Globals/github.png';
// import nodejsLogo from '../Globals/nodejs.png';
// import mongodbLogo from '../Globals/mongodb.png';


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
        {/* <img src={image} width="20px" height="20px"/> */}
        <div className="homeHeaderTitle">
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
          <a href="#contact">Resume</a>
        </div>

        <CarouselContainer />

        
      </div>
      <div className="homeFooter">
        <a href="" className="homeFooterText">Back to top</a>
      </div>
    </div>
   );
  }
 }
 

export default connect(mapStateToProps)(HomePage);
