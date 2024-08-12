import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import EmployeersAddForm from '../employeers-add-form/employeers-add-form'
import EmployeersList from '../employeers-list/employeers-list'
import SearchPanel from '../search-panel/search-panel'
import './app.css'

function App() {
	const data = [
		{ id: 1, name: 'John Smith', salary: 1000, increase: false },
		{ id: 2, name: 'Antony Martial', salary: 800, increase: true },
		{
			id: 3,
			name: 'Alex Jovanivich',
			salary: 700,
			increase: false,
		},
		{ id: 4, name: 'Bob Boxen', salary: 1900, increase: false },
	]

	return (
		<div className='app'>
			<AppInfo />

			<div className='search-panel'>
				<SearchPanel />
				<AppFilter />
			</div>

			<EmployeersList data={data} />
			<EmployeersAddForm />
		</div>
	)
}

export default App
