import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Mobile.scss';
// import '../Global.scss';

const mapStateToProps = state => ({
	...state
})


class Projects extends Component {
	updateStore = (event) => {
		this.props.dispatch({ type: "UPDATE_STORE", name: event.target.name, value: event.target.value })
	}
	render() {
		return (
			<section id="projects">
				<div className="title">
					<h2>Projects</h2>
				</div>
				<article>
					<div className="projects">
						<div>
							<h3>Elviras Nähspass</h3>
							<p>
								&nbsp;&nbsp;This Website was created as an online presence for a sewing school. In collaboration with a UX/UI Designer.
								It gives everyone the possibility to see all the information about the sewing school and get in contact with the teachers.
								I also programmed a CMS in the background, you can log in as an administrator and edit all the information on the
										<a href="http://www.elviras-naehspass.com/"> website</a>.
									</p>
						</div>
						<div>
							<h3>HS - Be strong</h3>
							<p>
								&nbsp;&nbsp;A website programmed in the course of a few hours, during the Covid-19 pandemic.
										<br />
								<a href="https://hsmedizinischehilfe.herokuapp.com/">HS-Be Strong</a> was built for a hospital to be able to answer to questions related to Covid-19 without the people needing to come in house or block the phone lines.
										You can register as a user and ask a question, certified doctors in quarantine at home can answer them.
									</p>
						</div>
						<div>
							<h3>Pin Point</h3>
							<p>
								&nbsp;&nbsp;A social website, where you can post pictures and view posts of others, all based on a map. Comes from the idea of a digital travel diary.
										On <a href="https://ironpinpoint.herokuapp.com/"> Pin Point</a> you can make each post public or private and many more features.
									</p>
						</div>
						<div>
							<h3>Bublearn</h3>
							<p>
								&nbsp;&nbsp;<a href="https://feli25.github.io/BublearnGame/">Game </a> for kids to learn reading and writing. They need to spell words by popping the bubbles found on the right side.
										Both German and English.
									</p>
						</div>
					</div>
				</article>
			</section>
		);
	}
}


export default connect(mapStateToProps)(Projects);