import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Grid from './components/movieGrid/Grid'

function App() {
	const [searchString, setSearchString] = useState<string>('')
	return (
		<div className="component">
			<Header searchText={searchString} setSearchText={setSearchString} />

			<Grid searchString={searchString} />
		</div>
	);
}

export default App;
