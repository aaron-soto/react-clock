export const StaticCard = ({ position, digit }) => {
	return (
		<div className={position}>
			<span>{digit}</span>
		</div>
	);
};
