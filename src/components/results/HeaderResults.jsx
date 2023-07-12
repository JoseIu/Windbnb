import useFilters from '../../hooks/UseFilters';
import StarIcon from '../icons/StarIcons';

const HeaderResults = () => {
	const { resultsFiltered, setLocation } = useFilters();
	return resultsFiltered.map(result => (
		<li
			key={result.id}
			className='header__result'
			onClick={e => console.log(e.target.textContent)}
		>
			<StarIcon /> {result.city}.{result.country}
		</li>
	));
};

export default HeaderResults;
