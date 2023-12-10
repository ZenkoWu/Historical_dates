import { HistoricalBlock } from './components/HistoricalBlock/HistoricalBlock';
import { dateSections } from './constants';

export const App = () => {
	return (
		<div>
			<HistoricalBlock 
				sections={dateSections} 
				startPointId={dateSections.find(el => el.id === 1)!.id}
			/>
		</div>
	);
}
 
