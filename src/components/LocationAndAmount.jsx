import useFilters from '../hooks/UseFilters';
import './locationAndAmount.scss';

const LocationAndAmount = () => {
	const { guest, staysFiltered } = useFilters();
	return (
		<div className='locationAmount wrapper'>
			<h1 className=''>Stays in {guest}</h1>
			<span>{staysFiltered.length}</span>
		</div>
	);
};

export default LocationAndAmount;
