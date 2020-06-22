import React, {Component} from 'react';
import { connect } from 'react-redux';
// import '../Global.scss';
import '../Mobile.scss';
import jsLogo from '../Globals/js.png';
import reactLogo from '../Globals/react.png';
import reduxLogo from '../Globals/redux.png';
import phpLogo from '../Globals/php.png';
import htmlLogo from '../Globals/html.png';
import cssLogo from '../Globals/css.png';
import gitLogo from '../Globals/git.png';
import githubLogo from '../Globals/github.png';
import nodejsLogo from '../Globals/nodejs.png';
import mongodbLogo from '../Globals/mongodb.png';
import bitbucket from '../Globals/bitbucket.png';
import sql from '../Globals/MySQL.svg';

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
        <div className="title">
          <h2>Skills</h2>
        </div>
        <article>
          <div className='skills'>
              <div className='wrapSkills'>
                <div className='skillsBox'>
                <div style={{display:'flex', flexDirection:'column'}} className='skillsMobile'>
                  <div>
                    <h3>JavaScript</h3>
                    <img src={jsLogo} alt="JavaScript logo"/>
                  </div>
                  <div>
                    <h3>React</h3>
                    <img src={reactLogo} alt="React logo"/>
                  </div>
                  <div>
                    <h3>Redux</h3>
                    <img src={reduxLogo} alt="Redux logo"/>
                  </div>
                </div>
                
                <div style={{display:'flex', flexDirection:'column'}} className='skillsMobile'>
                  <div>
                    <h3>HTML</h3>
                    <img src={htmlLogo} alt="HTML logo"/>
                  </div>
                  <div>
                    <h3>CSS/SCSS</h3>
                    <img src={cssLogo} alt="CSS logo"/>
                  </div>
                  <div>
                    <h3>PHP</h3>
                    <img src={phpLogo} alt="PHP logo"/>
                  </div>
                </div>

                <div style={{display:'flex', flexDirection:'column'}} className='skillsMobile'>
                  <div>
                    <h3>NodeJS</h3>
                    <img src={nodejsLogo} alt="NodeJS logo"/>
                  </div>
                  <div>
                    <h3>SQL/MySQL</h3>
                    <img src={sql} alt="SQL logo"/>
                  </div>
                  <div>
                    <h3>MongoDB</h3>
                    <img src={mongodbLogo} alt="MongoDB logo"/>
                  </div>
                </div>

                <div style={{display:'flex', flexDirection:'column'}} className='skillsMobile'>
                  <div>
                    <h3>Git</h3>
                    <img src={gitLogo} alt="Git logo"/>
                  </div>
                  <div>
                    <h3>Github</h3>
                    <img src={githubLogo} alt="Github logo"/>
                  </div>
                  <div>
                    <h3>Bitbucket</h3>
                    <img src={bitbucket} alt="Bitbucket logo"/>
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