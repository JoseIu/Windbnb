import { useState } from 'react';
import './header.scss';
import FormSearch from './search/FormSearch';

const Header = () => {
	const [form, setForm] = useState(false);
	const handleClick = () => {
		setForm(!form);
	};

	return (
		<header className='header wrapper'>
			<a href='/' className='header__logo'>
				<img className='header__img' src='../../public/logo.svg' alt='' />
			</a>

			<nav className='header__nav' onClick={() => handleClick()}>
				<button className='header__search'>Location</button>
				<button className='header__search'>Add guests</button>

				<button className='header__search'>🔍</button>
			</nav>
			<FormSearch form={form} setForm={setForm} />
		</header>
	);
};
export default Header;
