import React, {Component} from 'react';
import { connect } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Global.scss';
import mailbox from '../Globals/mailBox.jpg';
import feliPic from '../Globals/Profile-pic.png';
import chain from '../Globals/chain.png';
import Skills from './Skills';
import Divider from './Divider/Divider';

const mapStateToProps = state => ({
    ...state
  })
class CarouselContainer extends Component {
    updateStore = (event) => {
        this.props.dispatch({type:"UPDATE_STORE", name:event.target.name, value:event.target.value})
        }
    render(){
        
        return(
            <div>
                {/* Me */}
                <div>
                    <section id="me">
                        <div className="sectionTitle">
                            <h2>About me</h2>
                        </div>
                        <article>
                            <div style={{flexDirection:'column'}}>
                                <div>
                                    <img src={feliPic} width='60%' />
                                </div>
                                <div className='aboutMe'>
                                    <div>
                                        <p>
                                        <h3>About Me</h3>
                                        clean code<br/>
                                        take ownership and responsibility,<br/>
                                        don’t put sth down until my Manager and I are perfectly happy with it<br/>
                                        small businesses with personal portfolios or shopping systems, or big enterprises<br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
                <Divider />
                    
                {/* Experience */}
                <div>
                    <section id="experience">
                    <div className="sectionTitle">
                        <h2>Experience</h2>
                    </div>
                    <article>
                        <div>
                            <div className='experience'>
                                <div className='wrapExp'>
                                    <div className='expBox'>
                                        <img src='https://www.massundstil.de/wp-content/uploads/2017/12/Supervista-AG_r100.png' alt='SuperVista logo' />
                                        <p>
                                            <em>Develop Product</em>
                                            <ul>
                                                <li>Contribute core features across entire stack (20k+ lines of code, 250+ pulls)</li>
                                                <li>Lead front-end development, creating and documenting app-wide design system</li>
                                                <li>Guide best practices around accessible, semantic UI/UX</li>
                                                <li>Tools: SQL, node.js, PHP // React, JS, jQuery // CSS // HTML, JSX</li>
                                            </ul>
                                        </p>
                                        <div className='footer'>
                                            <span>Fev 2019 - Present | Brandemburg, Germany</span>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        </article>
                    </section>
                </div>
                <Divider />

                {/* Projects */}
                <div>
                    <section id="projects">
                    <div className="sectionTitle">
                        <h2>Projects</h2>
                    </div>
                    <article>
                        <div className='projects'>
                            <div>
                                <h3>Nähspas
                                    <a href='http://www.elviras-naehspass.com/'>
                                        <img src={chain} width='4%' style={{marginLeft:5}}/>
                                    </a>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Malesuada fames ac turpis egestas sed tempus urna et pharetra.
                                </p>
                            </div>
                            <div>
                                <h3>Corona Portal
                                    <a href='http://hsmedizinischehilfe.herokuapp.com/user/newQuestion'>
                                        <img src={chain} width='4%' style={{marginLeft:5}}/>
                                    </a>
                                </h3>
                                <p>
                                Turpis nunc eget lorem dolor sed viverra. Eu lobortis elementum nibh tellus molestie nunc non.
                                Placerat vestibulum lectus mauris ultrices eros in cursus. Vitae congue eu consequat ac felis donec et odio pellentesque.
                                </p>
                            </div>
                        </div>
                        </article>
                    </section>
                </div>
                <Divider />

                {/* Skills */}
                <Skills />
                <Divider />

                {/* Contact */}
                <div>
                    <section id="contact">
                        <div className="sectionTitle">
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

            </div>
        )
    }
}


export default connect(mapStateToProps)(CarouselContainer);