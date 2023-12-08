import './App.css';
import { HistoricalBlock } from './components/HistoricalBlock/HistoricalBlock';
import { dateSections } from './constants';

export const App = () => {
	return (
		<div>
			<HistoricalBlock sections={dateSections}/>
		</div>
	);
}
 
