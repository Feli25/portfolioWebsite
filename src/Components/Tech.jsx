import React, {Component} from 'react';
import { connect } from 'react-redux';
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


class Me extends Component {
  updateStore = (event) => {
    this.props.dispatch({type:"UPDATE_STORE", name:event.target.name, value:event.target.value})
   }
  render() {
    return(
      <section id="me" className="me">
        <h2 class="section-title">What I've worked with</h2>
          {/* <article>
              <div>
                <p>
                <h3>Hello!</h3>
                My name is Felicitas Deutges, and I am a Berlin based Fullstack Web Developer. 
                I primarily user JavaScript, with React and Node.js, and SQL. But picking up new frameworks or technologies is not a problem.<br/>
                I enjoy building everything, from small business sites to rich interactive web apps. If you are a business seaking a web presence or an employer looking to hire, you can get in touch with me <a href="#contact">here</a>.
                </p>
              </div>
              <div>
                <img src={feliPic} width='90%' alt=""/>
              </div>
          </article> */}
        </section>
   );
  }
 }
 

export default connect(mapStateToProps)(Me);