import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../Global.scss';
import jsLogo from '../globals/js.png';
import reactLogo from '../globals/react.png';
import reduxLogo from '../globals/redux.png';
import phpLogo from '../globals/php.png';
import htmlLogo from '../globals/html.png';
import cssLogo from '../globals/css.png';
import gitLogo from '../globals/git.png';
import githubLogo from '../globals/github.png';
import nodejsLogo from '../globals/nodejs.png';
import mongodbLogo from '../globals/mongodb.png';
import bitbucket from '../globals/bitbucket.png';
import sql from '../globals/MySQL.svg';

const mapStateToProps = state => ({
  ...state
})


class Skills extends Component {
  updateStore = (event) => {
    this.props.dispatch({type:"UPDATE_STORE", name:event.target.name, value:event.target.value})
   }
  render() {
    return(
      <section id="skills">
        <div class="title">
          <h2>Skills</h2>
        </div>
        <article>
          <div className='skills'>
            <img src={jsLogo} alt=""/>
            <img src={reactLogo} alt=""/>
            <img src={reduxLogo} alt=""/>
            <img src={htmlLogo} alt=""/>
            <img src={cssLogo} alt=""/>
            <img src={phpLogo} alt=""/>
            <img src={nodejsLogo} alt=""/>
            <img src={sql} alt=""/>
            <img src={mongodbLogo} alt=""/>
            <img src={gitLogo} alt=""/>
            <img src={githubLogo} alt=""/>
            <img src={bitbucket} alt=""/>
          </div>
        </article>
    </section>
      
   );
  }
 }
 

export default connect(mapStateToProps)(Skills);