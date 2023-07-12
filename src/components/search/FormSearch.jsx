import { useState } from 'react';
import useFilters from '../../hooks/UseFilters';
import HeaderResults from '../results/HeaderResults';

const FormSearch = ({ form }) => {
	const formActive = form ? 'header__form--active' : '';
	const { setLocation, setGuest, setResults } = useFilters();

	const [showResults, setShowResults] = useState(false);
	const showResult = showResults ? 'header__results--active' : '';

	const [showGuests, setShowGuests] = useState(false);
	const showGuest = showGuests ? 'header__results--active' : '';

	return (
		<div className={`header__form-container ${formActive}`}>
			<form
				className='header__form'
				onSubmit={ev => {
					ev.preventDefault();
					setLocation(ev.target.city.value);
					setGuest(parseInt(ev.target.guest.value));
				}}
			>
				<div>
					<input
						className='header__input'
						type='text'
						name='city'
						placeholder='Location City'
						onChange={e => setResults(e.target.value)}
						onFocus={() => setShowResults(!showResults)}
						// onBlur={() => setShowResults(!showResults)}
					/>
					<ul className={`header__results ${showResult}`}>
						<HeaderResults />
					</ul>
				</div>
				<div>
					<input
						className='header__input'
						type='text'
						name='guest'
						placeholder='Add guests'
						onFocus={() => setShowGuests(!showGuests)}
						onBlur={() => setShowGuests(!showGuests)}
					/>
					<ul className={`header__results ${showGuest}`}>
						<HeaderResults />
					</ul>
				</div>
				<input className='header__submit' type='submit' value='search' />
			</form>
		</div>
	);
};
export default FormSearch;
