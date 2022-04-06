import React, { useEffect, useState, useRef } from 'react';
import './timer.scss';

import { AiFillEye } from 'react-icons/ai';

export const Timer = () => {
	const [timer, setTimer] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const [isPaused, setIsPaused] = useState(false);
	const countRef = useRef(null);
	const [toggleUI, setToggleUI] = useState(false);

	let today = new Date().getDay();

	useEffect(() => {
		let newDate = new Date();
		console.log(today);
	}, []);

	const handleStart = () => {
		setIsActive(true);
		setIsPaused(true);
		countRef.current = setInterval(() => {
			setTimer((timer) => timer + 1);
		}, 1000);
	};

	const handlePause = () => {
		clearInterval(countRef.current);
		setIsPaused(false);
	};

	const handleResume = () => {
		setIsPaused(true);
		countRef.current = setInterval(() => {
			setTimer((timer) => timer + 1);
		}, 1000);
	};

	const handleReset = () => {
		clearInterval(countRef.current);
		setIsActive(false);
		setIsPaused(false);
		setTimer(0);
	};

	const handleSubmitDay = () => {
		handleReset();
		localStorage.setItem(today, formatTime());
	};

	const formatTime = () => {
		const getSeconds = `0${timer % 60}`.slice(-2);
		const minutes = `${Math.floor(timer / 60)}`;
		const getMinutes = `0${minutes % 60}`.slice(-2);
		const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

		return `${getHours} : ${getMinutes} : ${getSeconds}`;
	};

	const handleWeekReset = () => {
		handleReset();
		localStorage.removeItem(1);
		localStorage.removeItem(2);
		localStorage.removeItem(3);
		localStorage.removeItem(4);
		localStorage.removeItem(5);
	};

	return (
		<>
			{toggleUI && (
				<>
					<div>
						<div className='stopwatch-card'>
							<p>{formatTime()}</p>
							<div className='buttons'>
								<button onClick={handleStart}>Start</button>
								<button onClick={handlePause}>Pause</button>
								<button onClick={handleResume}>Resume</button>
								<button onClick={handleReset}>Reset</button>
								<button onClick={handleSubmitDay}>Submit Day</button>
								<button onClick={handleWeekReset}>Reset Week</button>
							</div>
						</div>
					</div>
					<div className='times'>
						<p>
							<span>mon:</span> {localStorage.getItem(1) || 'n/a'}
						</p>
						<p>
							<span>tue:</span> {localStorage.getItem(2) || 'n/a'}
						</p>
						<p>
							<span>wed:</span> {localStorage.getItem(3) || 'n/a'}
						</p>
						<p>
							<span>thur:</span> {localStorage.getItem(4) || 'n/a'}
						</p>
						<p>
							<span>fri:</span> {localStorage.getItem(5) || 'n/a'}
						</p>
					</div>
				</>
			)}

			<div className='hide-ui' onClick={(e) => setToggleUI(!toggleUI)}>
				<AiFillEye />
			</div>
		</>
	);
};
