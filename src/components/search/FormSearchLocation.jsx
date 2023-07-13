import useFilters from '../../hooks/UseFilters';
import HeaderResults from '../results/HeaderResults';

const FormSearchLocation = ({ showResults, setShowResults, handleClick }) => {
	const { setResults } = useFilters();
	const showResult = showResults ? 'header__results--active' : '';
	return (
		<div
			tabIndex={0}
			onFocus={() => setShowResults(!showResults)}
			onBlur={() => setShowResults(!showResults)}
		>
			<input
				className='header__input'
				type='text'
				name='city'
				placeholder='Location City'
				onChange={e => setResults(e.target.value)}
			/>
			<ul
				className={`header__results ${showResult}`}
				onClick={() => handleClick}
			>
				<HeaderResults />
			</ul>
		</div>
	);
};

export default FormSearchLocation;
