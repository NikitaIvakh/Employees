import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import EmployeersAddForm from '../employeers-add-form/employeers-add-form'
import EmployeersList from '../employeers-list/employeers-list'
import SearchPanel from '../search-panel/search-panel'
import './app.css'

function App() {
	const data = [
		{ name: 'John', surname: 'Smith', salary: 1000, increase: false },
		{ name: 'Antony', surname: 'Martial', salary: 800, increase: true },
		{ name: 'Alex', surname: 'Jovanivich', salary: 700, increase: false },
		{ name: 'Bob', surname: 'Boxen', salary: 1900, increase: false },
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
