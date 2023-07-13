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
		const locationLowerCase = location.toLowerCase().trim();
		return stayss.filter(
			stay =>
				stay.city.toLowerCase() === locationLowerCase || stay.maxGuests <= guest
		);
	};
	const showResults = stayss => {
		return stayss.filter(stay =>
			stay.city.toLowerCase().startsWith(results.toLowerCase())
		);
	};
	// for body cards reuslts
	const staysFiltered = filterStays(stayss);
	// for header results
	const resultsFiltered = showResults(stayss);
	console.log(location);
	console.log('staysFiltered', staysFiltered);

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
