import StayNomalHost from './stayComponets/StayNomalHost';
import StaySuperHost from './stayComponets/StaySuperHost';

const Stay = ({ photo, superHost, title, ...props }) => {
	const hasSuperhost = superHost ? (
		<StaySuperHost {...props} />
	) : (
		<StayNomalHost {...props} />
	);
	return (
		<article className='stay'>
			<img className='stay__img' src={photo} alt={title} />
			<div className='stay__content'>
				{hasSuperhost}
				<h2 className='stay__title'>{title}</h2>
			</div>
		</article>
	);
};

export default Stay;
