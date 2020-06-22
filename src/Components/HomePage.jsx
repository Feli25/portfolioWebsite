import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Mobile.scss';
// import '../Global.scss';
// import image from '../Globals/LogoRaw.png'

import Contact from './Contact'
import Skills from './Skills2'
import Projects from './Projects'
import Experience from './Experience'
import Me from './Me'
import Navbar from './Navbar'
import FooterInfo from './FooterInfo';

import contactLogo from '../Globals/change_white.png'
import projectsLogo from '../Globals/project_white.png'
import profileLogo from '../Globals/woman_white.png'
import experienceLogo from '../Globals/work_white.png'

const mapStateToProps = state => ({
	...state
})

class HomePage extends Component {
	updateStore = (event) => {
		this.props.dispatch({ type: "UPDATE_STORE", name: event.target.name, value: event.target.value })
	}
	render() {
		return (
			<div className="home">
				<div className='headerWrap'>
					{/* testing mobile virsion */}
					<div className="homeHeader">
						<a href="#me" className="homeHeaderTitle">
							FD
					</a>
					</div>
					<div>
						<p className='fullName'>Felicitas Deutges</p>
					</div>
				</div>
				<div className="homeBody">
					<Navbar />
					<Me />
					<Experience />
					<Projects />
					<Skills />
					<Contact />
					<FooterInfo />
				</div>
				<footer className="menu">
					<div>
						<img src={profileLogo} alt="profile logo" />
						<a href="#me">About</a>
					</div>
					<div>
						<img src={experienceLogo} alt="experience logo" />
						<a href="#experience">Experience</a>
					</div>
					<div>
						<img src={projectsLogo} alt="projects logo" />
						<a href="#projects">
							Projects
							</a>
					</div>
					<div>
						<img src={contactLogo} alt="contact logo" />
						<a href="#contact">Contact</a>
					</div>

				</footer>
			</div>
		);
	}
}


export default connect(mapStateToProps)(HomePage);
