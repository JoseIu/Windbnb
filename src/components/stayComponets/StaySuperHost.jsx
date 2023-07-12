import StarIcon from '../icons/StarIcons';

const StaySuperHost = ({ type, rating, beds }) => {
	return (
		<div className='stay__info'>
			<span className='stay__host'>superHost</span>
			<div className='stay__type-rating'>
				<span className='stay__type'>{type}</span>
				<span className='stay__rating'>
					<StarIcon />
					{rating}
				</span>
			</div>
		</div>
	);
};
export default StaySuperHost;
