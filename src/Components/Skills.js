import React, {Component} from 'react';
import { connect } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Global.scss';
import jsLogo from '../Globals/js.png';
import reactLogo from '../Globals/react.png';
import reduxLogo from '../Globals/redux.png';
import phpLogo from '../Globals/php.png';
import htmlLogo from '../Globals/html.png';
import cssLogo from '../Globals/css.png';
import sassLogo from '../Globals/sass.png';
import gitLogo from '../Globals/git.png';
import githubLogo from '../Globals/github.png';
import herokubLogo from '../Globals/heroku.png';
import nodejsLogo from '../Globals/nodejs.png';
import mongodbLogo from '../Globals/mongodb.png';
import jQueryLogo from '../Globals/jquery.png';
import postgreSQLLogo from '../Globals/postgreSQL.png';
import bootstrapLogo from '../Globals/bootstrap.png';
import materialUiLogo from '../Globals/materialUi.png';

const mapStateToProps = state => ({
    ...state
  })
class Skills extends Component {
    updateStore = (event) => {
        this.props.dispatch({type:"UPDATE_STORE", name:event.target.name, value:event.target.value})
        }
    render(){
        
        return(
            <div>

                {/* Skills */}
                <div>
                    <section id="skills">
                    <div className="sectionTitle">
                        <h2>Skills</h2>
                    </div>
                    <article>
                        <div className='skills'>
                            <div className='wrapSkills'>
                                
                                <div className='skillBox'>
                                    <div className='title'>
                                        <h2>HTML</h2>
                                    </div>
                                    <div>
                                        <div style={{flexDirection:"column", alignItems:'center', padding:10, width:100}}>
                                            <h3>HTML5</h3>
                                            <img src={htmlLogo}/>
                                        </div>
                                        <div style={{flexDirection:"column", alignItems:'center', padding:10, width:100}}>
                                            <h3>JSX</h3>
                                            <img src={reactLogo}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='skillBox'>
                                    <div className='title'>
                                        <h2>Styling</h2>
                                    </div>
                                    <div>
                                        <div style={{flexDirection:"column", alignItems:'center', padding:10, width:100}}>
                                            <h3>CSS3</h3>
                                            <img src={cssLogo}/>
                                        </div>
                                        <div style={{flexDirection:"column", alignItems:'center', padding:10, width:100}}>
                                            <h3>SASS</h3>
                                            <img src={sassLogo}/>
                                        </div>
                                        <div style={{flexDirection:"column", alignItems:'center', padding:10, width:100}}>
                                            <h3>Bootrstrap</h3>
                                            <img src={bootstrapLogo}/>
                                        </div>
                                        <div style={{flexDirection:"column", alignItems:'center', padding:10, width:100}}>
                                            <h3>Material Ui</h3>
                                            <img src={materialUiLogo}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='skillBox'>
                                    <div className='title'>
                                        <h2>Javascript</h2>
                                    </div>
                                    <div>
                                        <div style={{flexDirection:"column", alignItems:'center', padding:10, width:100}}>
                                            <h3>JavaScript</h3>
                                            <img src={jsLogo}/>
                                        </div>
                                        <div style={{flexDirection:"column", alignItems:'center', padding:10, width:100}}>
                                            <h3>React</h3>
                                            <img src={reactLogo}/>
                                        </div>
                                        <div style={{flexDirection:"column", alignItems:'center', padding:10, width:100}}>
                                            <h3>Redux</h3>
                                            <img src={reduxLogo}/>
                                        </div>
                                        <div style={{flexDirection:"column", alignItems:'center', padding:10, width:100}}>
                                            <h3>jQuery</h3>
                                            <img src={jQueryLogo}/>
                                        </div>
                                        <div style={{flexDirection:"column", alignItems:'center', padding:10, width:100}}>
                                            <h3>NodeJS</h3>
                                            <img src={nodejsLogo}/>
                                        </div>
                                    </div>    
                                </div>
                                <div className='skillBox'>
                                    <div className='title'>
                                        <h2>Backend</h2>
                                    </div>
                                    <div>
                                        <div style={{flexDirection:"column", alignItems:'center', padding:10, width:100}}>
                                            <h3>PHP</h3>
                                            <img src={phpLogo}/>
                                        </div>
                                        <div style={{flexDirection:"column", alignItems:'center', padding:10, width:100}}>
                                            <h3>MongoDB</h3>
                                            <img src={mongodbLogo}/>
                                        </div>
                                        <div style={{flexDirection:"column", alignItems:'center', padding:10, width:100}}>
                                            <h3>PostgreSQL</h3>
                                            <img src={postgreSQLLogo}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='skillBox'>
                                    <div className='title'>
                                        <h2>Other</h2>
                                    </div>
                                    <div>
                                        <div style={{flexDirection:"column", alignItems:'center', padding:10, width:100}}>
                                            <h3>Git</h3>
                                            <img src={gitLogo}/>
                                        </div>
                                        <div style={{flexDirection:"column", alignItems:'center', padding:10, width:100}}>
                                            <h3>Github</h3>
                                            <img src={githubLogo}/>
                                        </div>
                                        <div style={{flexDirection:"column", alignItems:'center', padding:10, width:100}}>
                                            <h3>Heroku</h3>
                                            <img src={herokubLogo}/>
                                        </div>
                                    </div>
                                </div>                                    
                                
                            </div>
                        </div>
                        </article>
                    </section>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps)(Skills);