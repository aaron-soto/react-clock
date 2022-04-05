import { FlipClock } from './components/clock/FlipClock';
import Moment from 'react-moment';
import { Timer } from './components/timer/Timer';

function App() {
	const date = new Date();

	return (
		<div className='App'>
			<Moment format='ddd MMM DD, YYYY'>{date}</Moment>
			<FlipClock />
			<Timer />
		</div>
	);
}

export default App;
