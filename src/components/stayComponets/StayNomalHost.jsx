import StarIcon from '../icons/StarIcons';

const StayNomalHost = ({ type, rating }) => {
	return (
		<div className='stay__type-rating'>
			<span className='stay__type'>{type}</span>
			<span className='stay__rating'>
				<StarIcon />
				{rating}
			</span>
		</div>
	);
};
export default StayNomalHost;
