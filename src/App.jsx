import Header from './components/Header';
import ListStays from './components/ListStays';
import LocationAndAmount from './components/LocationAndAmount';
import FiltersProvider from './context/FiltersProvider';

const App = () => {
	return (
		<>
			<FiltersProvider>
				<Header />
				<LocationAndAmount />

				<ListStays />
			</FiltersProvider>
		</>
	);
};

export default App;
