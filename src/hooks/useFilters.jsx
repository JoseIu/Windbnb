import { useContext } from 'react';
import { FilterContext } from '../context/FiltersProvider';

const useFilters = () => {
	return useContext(FilterContext);
};

export default useFilters;
