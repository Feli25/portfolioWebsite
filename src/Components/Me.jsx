import React, { Component } from 'react';
import { connect } from 'react-redux';
// import '../Global.scss';
import '../Mobile.scss';
import feliPic from '../Globals/meComplete.jpg';

const mapStateToProps = state => ({
	...state
})


class Me extends Component {
	updateStore = (event) => {
		this.props.dispatch({ type: "UPDATE_STORE", name: event.target.name, value: event.target.value })
	}
	render() {
		return (
			<section id="me">
				<div className='aboutMe'>
					{/* <div className='verticalText'>About Me</div> */}
					<div className="title">
						<h2>Hello, <br />I'm Felicitas Deutges!
						<br />Fullstack Web Deleloper.</h2>
					</div>
					<div>
					</div>
					<article>
						<img src={feliPic} alt="" />
						<div className="text">
							<div className='verticalText'>About Me</div>
							<p>
								&nbsp;&nbsp; I primarily user JavaScript, with React and Node.js, and SQL.
								<br />
								But picking up new frameworks or technologies is not a problem.
								<br />
								<br />
                &nbsp;&nbsp;I enjoy building everything, from small business sites to rich interactive web apps.
								If you are a business seaking a web presence or an employer looking to hire,
								you can <a href="#contact">get in touch with me</a>.
                </p>
						</div>
					</article>
				</div>
			</section>
		);
	}
}


export default connect(mapStateToProps)(Me);