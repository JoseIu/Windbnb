import Header from './components/Header';
import ListStays from './components/ListStays';
import FiltersProvider from './context/FiltersProvider';

const App = () => {
	return (
		<>
			<FiltersProvider>
				<Header />
				<h1 className='title wrapper'>Stays in Finland</h1>

				<ListStays />
			</FiltersProvider>
		</>
	);
};

export default App;
