import { createContext, useState } from 'react';
import stays from '../mocks/stays.json';

export const FilterContext = createContext();

const FiltersProvider = ({ children }) => {
	const [stayss, setStayss] = useState(stays);
	const [location, setLocation] = useState('');
	const [results, setResults] = useState('');

	const [guest, setGuest] = useState(0);

	const filterStays = stayss => {
		if (location === '') return stayss;
		return stayss.filter(
			stay => stay.city.toLowerCase() === location.toLowerCase()
		);
	};
	const showResults = stayss => {
		return stayss.filter(stay =>
			stay.city.toLowerCase().startsWith(results.toLowerCase())
		);
	};
	// for header results
	const resultsFiltered = showResults(stayss);
	// for body cards reuslts
	const staysFiltered = filterStays(stayss);
	console.log('resultsFiltered', resultsFiltered);

	return (
		<FilterContext.Provider
			value={{
				setStayss,
				staysFiltered,
				setLocation,
				setGuest,
				setResults,
				resultsFiltered
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};

export default FiltersProvider;
