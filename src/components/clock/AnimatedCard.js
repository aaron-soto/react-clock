export const AnimatedCard = ({ animation, digit }) => {
	return (
		<div className={`flipCard ${animation}`}>
			<span>{digit}</span>
		</div>
	);
};
