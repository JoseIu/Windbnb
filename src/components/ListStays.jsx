import useFilters from '../hooks/UseFilters';
import Stay from './Stay';
import './listStays.scss';
import NotFound from './notFound/NotFound';
const ListStays = () => {
	const { staysFiltered } = useFilters();

	if (!staysFiltered.length) return <NotFound />;

	const listStaysRendered = staysFiltered.map(stay => (
		<Stay key={stay.id} {...stay} />
	));

	return <div className='listStays wrapper'>{listStaysRendered}</div>;
};

export default ListStays;
