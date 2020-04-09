import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../Global.scss';
// import image from '../Globals/sample.png'
import image from '../Globals/whiteLines.jpg';
import mailbox from '../Globals/mailBox.jpg';
import feliPic from '../Globals/Profile-pic.png';
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
        {/* <img src={image} width="60%" /> */}
        {/* Me */}
        <section id="me">
          <div  class="title"class="title">
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
                <img src={feliPic} width='90%' />
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
                <h3>Project 1</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Malesuada fames ac turpis egestas sed tempus urna et pharetra.
                </p>
              </div>
              <div className='rightBox'>
                <p>
                <h3>Project 2</h3>
                Turpis nunc eget lorem dolor sed viverra. Eu lobortis elementum nibh tellus molestie nunc non.
                Placerat vestibulum lectus mauris ultrices eros in cursus. Vitae congue eu consequat ac felis donec et odio pellentesque.
                </p>
              </div>
              <div>
              <p>
                <h3>Project 3</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Malesuada fames ac turpis egestas sed tempus urna et pharetra.
                At tempor commodo ullamcorper a lacus vestibulum sed arcu.
                </p>
              </div>
              <div className='rightBox'>
                <p>
                <h3>Project 4</h3>
                Turpis nunc eget lorem dolor sed viverra. Eu lobortis elementum nibh tellus molestie nunc non.
                Placerat vestibulum lectus mauris ultrices eros in cursus. Vitae congue eu consequat ac felis donec et odio pellentesque.
                Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit.
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
            </article>
          {/* <article>
              <div className='skills'>
                <p>
                  <div className='wrapSkills'>
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
                </p>
              </div>
            </article> */}
        </section>

        {/* Contact */}
        <section id="contact">
          <div class="title">
            <h2>Contact</h2>
          </div>
          <div className="contact">
            <div className="wrapForm">
              <h3>Contact</h3>
              <p>For all pricing or faq, please fill out the form below</p>
              <div>
                <p>Name <span>&#42;</span></p>
                <div className='formNameWrap'>
                  <input placeholder="First Name" />
                  <input placeholder="Last Name" />
                </div>
              </div>
              <div>
                <p>Email Address <span>&#42;</span></p>
                <input placeholder="Email Address" />
              </div>
              <div>
                <p>Subject <span>&#42;</span></p>
                <input placeholder="Subject" />
              </div>
              <div>
                <p>Type your message <span>&#42;</span></p>
                <textarea placeholder="Message" />
              </div>
            </div>
            <div className="contactImg">
              <img src={mailbox} className='img'/>
              {/* <img src={mailIcon} className='icon' /> */}
            </div>
          </div>
        </section>
      </div>
      <div className="homeFooter">
        <a href="" className="homeFooterText">Back to top</a>
      </div>
    </div>
   );
  }
 }
 

export default connect(mapStateToProps)(HomePage);
