import React from 'react';
import { FlipUnitContainer } from './FlipUnitContainer';

import './clock.scss';

// TODO
// Add buttons to increment time.
// Add time tracker for week

export class FlipClock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hours: 0,
			hoursShuffle: true,
			minutes: 0,
			minutesShuffle: true,
			seconds: 0,
			secondsShuffle: true,
		};
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.updateTime(), 50);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	updateTime() {
		// get new date
		const time = new Date();
		// set time units
		const hours = time.getHours();
		const minutes = time.getMinutes();
		const seconds = time.getSeconds();
		// on hour chanage, update hours and shuffle state
		if (hours !== this.state.hours) {
			const hoursShuffle = !this.state.hoursShuffle;
			this.setState({
				hours,
				hoursShuffle,
			});
		}
		// on minute chanage, update minutes and shuffle state
		if (minutes !== this.state.minutes) {
			const minutesShuffle = !this.state.minutesShuffle;
			this.setState({
				minutes,
				minutesShuffle,
			});
		}
		// on second chanage, update seconds and shuffle state
		if (seconds !== this.state.seconds) {
			const secondsShuffle = !this.state.secondsShuffle;
			this.setState({
				seconds,
				secondsShuffle,
			});
		}
	}

	render() {
		// state object destructuring
		const {
			hours,
			minutes,
			seconds,
			hoursShuffle,
			minutesShuffle,
			secondsShuffle,
		} = this.state;

		return (
			<div className={'flipClock'}>
				<FlipUnitContainer
					unit={'hours'}
					digit={hours}
					shuffle={hoursShuffle}
				/>
				<FlipUnitContainer
					unit={'minutes'}
					digit={minutes}
					shuffle={minutesShuffle}
				/>
				<FlipUnitContainer
					unit={'seconds'}
					digit={seconds}
					shuffle={secondsShuffle}
				/>
			</div>
		);
	}
}
