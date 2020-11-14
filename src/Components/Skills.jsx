import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../Global.scss';
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
import bitbucket from '../Globals/bitbucketBig.png';
import sql from '../Globals/sql.png';
import mySql from '../Globals/MySQL.svg';
import heroku from '../Globals/heroku.png';
import vuejsLogo from '../Globals/vuejs.png';
import laravelLogo from '../Globals/laravel.png';

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
            <img src={cssLogo} alt="css"/>
            <img src={htmlLogo} alt="html"/>
            <img src={jsLogo} alt="js"/>
            <img src={phpLogo} alt="php"/>
            <img src={sql} alt="sql"/> 
            <br/>

            <img src={nodejsLogo} alt="nodejs"/>
            <img src={reactLogo} alt="react"/>
            <img src={reduxLogo} alt="redux"/>
            <img src={vuejsLogo} alt="bitbucket"/>
            <img src={laravelLogo} alt="bitbucket"/>
            <br/>
            
            <img src={mongodbLogo} alt="mongodb"/>
            <img src={mySql} alt="mySQL"/>
            <img src={heroku} alt="heroku"/>
            <br/>

            <img src={gitLogo} alt="git"/>
            <img src={githubLogo} alt="github"/>
            <img src={bitbucket} alt="bitbucket"/>
          </div>
        </article>
    </section>
      
   );
  }
 }
 

export default connect(mapStateToProps)(Skills);