import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import EmployeersAddForm from '../employeers-add-form/employeers-add-form'
import EmployeersList from '../employeers-list/employeers-list'
import SearchPanel from '../search-panel/search-panel'
import './app.css'

function App() {
	return (
		<div className='app'>
			<AppInfo />

			<div className='search-panel'>
				<SearchPanel />
				<AppFilter />
			</div>

			<EmployeersList />
			<EmployeersAddForm />
		</div>
	)
}

export default App
