import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../Global.scss';
import image from '../Globals/LogoRaw.png'
// import image from '../Globals/whiteLines.jpg';
import mailbox from '../Globals/mailBox.jpg';
import feliPic from '../Globals/meComplete.jpg';
// import feliPic from '../Globals/me.jpg';
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

import Contact from './Contact'

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
      <div className="homeBody">
        <div className="homeNavBox">
          <a href="#me">Me</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href="https://drive.google.com/file/d/1G957MPaKR0s-U1dbywuSh_NLad7fPArF/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
        {/* <img src={image} width="60%" /> */}
        {/* Me */}
        <section id="me">
          <div  class="title">
            <h2>About me</h2>
          </div>
          <article>
              <div>
                <p>
                <h3>Intro</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Malesuada fames ac turpis egestas sed tempus urna et pharetra.
                At tempor commodo ullamcorper a lacus vestibulum sed arcu.
                Sed turpis tincidunt id aliquet risus feugiat.
                Quisque sagittis purus sit amet volutpat. Velit sed ullamcorper morbi tincidunt ornare massa.
                Sit amet massa vitae tortor. 
                </p>
              </div>
              <div>
                <img src={feliPic} width='90%' alt=""/>
              </div>
          </article>
        </section>
        
        {/* Experience */}
        <section id="experience">
          <div class="title">
            <h2>Experience</h2>
          </div>
          <article>
              <div>
              <p>
                <h3>Intro</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Malesuada fames ac turpis egestas sed tempus urna et pharetra.
                At tempor commodo ullamcorper a lacus vestibulum sed arcu.
                Sed turpis tincidunt id aliquet risus feugiat.
                Quisque sagittis purus sit amet volutpat. Velit sed ullamcorper morbi tincidunt ornare massa.
                Sit amet massa vitae tortor. 
                </p>
              </div>
              <div>
                <p>
                <h3>Intro 2</h3>
                Turpis nunc eget lorem dolor sed viverra. Eu lobortis elementum nibh tellus molestie nunc non.
                Placerat vestibulum lectus mauris ultrices eros in cursus. Vitae congue eu consequat ac felis donec et odio pellentesque.
                Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit.
                Egestas maecenas pharetra convallis posuere morbi leo urna molestie at.
                Eu consequat ac felis donec et odio pellentesque. Tincidunt arcu non sodales neque sodales ut.
                Sit amet venenatis urna cursus eget nunc scelerisque.
                </p>
              </div>
            </article>
        </section>

        {/* Projects */}
        <section id="projects">
          <div class="title">
            <h2>Projects</h2>
          </div>
          <article>
              <div>
              <p>
                <h3>Elviras Nähspass</h3>
                This Website was created as an online presence for a sewing school. In collaboration with a UX/UI Designer.
                It gives everyone the possibility to see all the information about the sewing school and get in contact with the teachers.
                I also programmed a CMS in the background, you can log in as an administrator and edit all the information on the website.
                <br/>
                <a href="http://www.elviras-naehspass.com/">www.elviras-naehspass.com</a>
                </p>
              </div>
              <div className='rightBox'>
                <p>
                <h3>HS - Be strong</h3>
                  A website programmed in the course of a few hours, during the Covid-19 pandemic. 
                  This was built for a hospital to be able to answer to questions related to Covid-19 without the people needing to come in house or block the phone lines.
                  You can register as a user and ask a question, certified doctors in quarantine at home can answer them.
                  <br/>
                  <a href="https://hsmedizinischehilfe.herokuapp.com/">hsmedizinischehilfe.herokuapp.com</a>
                </p>
              </div>
              <div>
              <p>
                <h3>Pin Point</h3>
                  A social website, where you can post pictures and view posts of others, all based on a map. Comes from the idea of a digital travel diary.
                  You can make each post public or private and many more features.
                  <a href="https://ironpinpoint.herokuapp.com/">ironpinpoint.herokuapp.com</a>
                </p>
              </div>
              <div className='rightBox'>
                <p>
                <h3>Bublearn</h3>
                  Game for kids to learn reading and writing. They need to spell words by popping the bubbles found on the right side. 
                  Both German and English.
                  <a href="https://feli25.github.io/BublearnGame/">feli25.github.io/BublearnGame</a>
                </p>
              </div>
            </article>
        </section>

        {/* Skills */}
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
                        <img src={jsLogo}/>
                      </div>
                      <div>
                        <h3>React</h3>
                        <img src={reactLogo}/>
                      </div>
                      <div>
                        <h3>Redux</h3>
                        <img src={reduxLogo}/>
                      </div>
                    </div>
                    
                    <div style={{display:'flex', flexDirection:'column'}}>
                      <div>
                        <h3>HTML</h3>
                        <img src={htmlLogo}/>
                      </div>
                      <div>
                        <h3>CSS</h3>
                        <img src={cssLogo}/>
                      </div>
                    </div>

                    <div style={{display:'flex', flexDirection:'column'}}>
                      <div>
                        <h3>NodeJS</h3>
                        <img src={nodejsLogo}/>
                      </div>
                      <div>
                        <h3>PHP</h3>
                        <img src={phpLogo}/>
                      </div>
                      <div>
                        <h3>MongoDB</h3>
                        <img src={mongodbLogo}/>
                      </div>
                    </div>

                    <div style={{display:'flex', flexDirection:'column'}}>
                      <div>
                        <h3>Git</h3>
                        <img src={gitLogo}/>
                      </div>
                      <div>
                        <h3>Github</h3>
                        <img src={githubLogo}/>
                      </div>
                    </div>
                    </div>
                  </div>
              </div>
            </article>
        </section>

        <Contact/>
      </div>
      <div className="homeFooter">
        <a href="" className="homeFooterText">Back to top</a>
      </div>
    </div>
   );
  }
 }
 

export default connect(mapStateToProps)(HomePage);
