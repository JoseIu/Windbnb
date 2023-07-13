import { useState } from 'react';
import useFilters from '../../hooks/UseFilters';
import CloseFormIcon from '../icons/CloseFormIcon';
import FormSearchLocation from './FormSearchLocation';

const FormSearch = ({ form, setForm }) => {
	const formActive = form ? 'header__form--active' : '';
	const { setLocation, setGuest } = useFilters();

	const [showResults, setShowResults] = useState(false);

	const handleClick = event => {
		event.stopPropagation();
	};

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
				<FormSearchLocation
					showResults={showResults}
					setShowResults={setShowResults}
					handleClick={handleClick}
				/>
				<div>
					<input
						className='header__input'
						type='text'
						name='guest'
						placeholder='Add guests'
					/>
				</div>
				<input className='header__submit' type='submit' value='search' />
			</form>

			<button className='header__form-close' onClick={() => setForm(!form)}>
				<CloseFormIcon />
			</button>
		</div>
	);
};
export default FormSearch;
