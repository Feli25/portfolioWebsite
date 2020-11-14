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
import bitbucket from '../globals/bitbucketBig.png';
import sql from '../globals/sql.png';
import mySql from '../globals/MySQL.svg';
import heroku from '../globals/heroku.png';
import vuejsLogo from '../globals/vuejs.png';
import laravelLogo from '../globals/laravel.png';

const mapStateToProps = state => ({
  ...state
})


class Tech extends Component {
  updateStore = (event) => {
    this.props.dispatch({type:"UPDATE_STORE", name:event.target.name, value:event.target.value})
   }
  render() {
    return(
      <section id="tech" className="tech">
        <h2 class="section-title">The tech I use</h2>
        <img src={cssLogo} alt="css"/>
        <img src={htmlLogo} alt="html"/>
        <img src={jsLogo} alt="js"/>
        <img src={phpLogo} alt="php"/>
        <img src={sql} alt="sql"/> <br/>

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
      </section>
   );
  }
 }
 

export default connect(mapStateToProps)(Tech);