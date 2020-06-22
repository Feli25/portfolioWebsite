

import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Mobile.scss';

const mapStateToProps = state => ({
	...state
})


class FooterInfo extends Component {
	updateStore = (event) => {
		this.props.dispatch({ type: "UPDATE_STORE", name: event.target.name, value: event.target.value })
	}
	render() {
		return (
			<section>
				<div className='footer'>
					<div className='star'><span>&#10038;</span></div>
					<article>
						<div>
							<p className='footerText'>
								Built with <a href="https://reactjs.org/">React</a> & <a href='https://react-redux.js.org/'>Redux</a>
								<br />
								Made on <a href='https://www.apple.com/'>Apple Computer</a> 
								<br />
								Hosted by <a href='https://www.heroku.com/#'>Heroku</a>
								<br/>
								Domain by <a href='https://de.godaddy.com/'>Godaddy</a>
                </p>

						</div>
					</article>
				</div>
			</section>
		);
	}
}


export default connect(mapStateToProps)(FooterInfo);