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
              <div className='wrapSkills'>
                <div className='skillsBox'>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <div>
                    <h3>JavaScript</h3>
                    <img src={jsLogo} alt=""/>
                  </div>
                  <div>
                    <h3>React</h3>
                    <img src={reactLogo} alt=""/>
                  </div>
                  <div>
                    <h3>Redux</h3>
                    <img src={reduxLogo} alt=""/>
                  </div>
                </div>
                
                <div style={{display:'flex', flexDirection:'column'}}>
                  <div>
                    <h3>HTML</h3>
                    <img src={htmlLogo} alt=""/>
                  </div>
                  <div>
                    <h3>CSS/SCSS</h3>
                    <img src={cssLogo} alt=""/>
                  </div>
                  <div>
                    <h3>PHP</h3>
                    <img src={phpLogo} alt=""/>
                  </div>
                </div>

                <div style={{display:'flex', flexDirection:'column'}}>
                  <div>
                    <h3>NodeJS</h3>
                    <img src={nodejsLogo} alt=""/>
                  </div>
                  <div>
                    <h3>SQL/MySQL</h3>
                    <img src={sql} alt=""/>
                  </div>
                  <div>
                    <h3>MongoDB</h3>
                    <img src={mongodbLogo} alt=""/>
                  </div>
                </div>

                <div style={{display:'flex', flexDirection:'column'}}>
                  <div>
                    <h3>Git</h3>
                    <img src={gitLogo} alt=""/>
                  </div>
                  <div>
                    <h3>Github</h3>
                    <img src={githubLogo} alt=""/>
                  </div>
                  <div>
                    <h3>Bitbucket</h3>
                    <img src={bitbucket} alt=""/>
                  </div>
                </div>
                </div>
              </div>
          </div>
        </article>
    </section>
      
   );
  }
 }
 

export default connect(mapStateToProps)(Skills);