import useFilters from '../../hooks/UseFilters';
import LocationIcon from '../icons/LocationIcon';

const HeaderResults = () => {
	const { resultsFiltered, setLocation } = useFilters();
	return resultsFiltered.map(result => (
		<li
			key={result.id}
			className='header__result'
			onClick={e => setLocation(e.target.textContent.split('.')[0])}
		>
			<LocationIcon /> {result.city}.{result.country}
		</li>
	));
};

export default HeaderResults;
