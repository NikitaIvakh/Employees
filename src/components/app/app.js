import { Component } from 'react'
import { v7 as uuidv7 } from 'uuid'
import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import EmployeersAddForm from '../employeers-add-form/employeers-add-form'
import EmployeersList from '../employeers-list/employeers-list'
import SearchPanel from '../search-panel/search-panel'
import './app.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{ id: uuidv7(), name: 'John Smith', salary: 1000, increase: false },
				{ id: uuidv7(), name: 'Antony Martial', salary: 800, increase: true },
				{
					id: uuidv7(),
					name: 'Alex Jovanivich',
					salary: 700,
					increase: false,
				},
				{ id: uuidv7(), name: 'Bob Boxen', salary: 1900, increase: false },
			],
		}
	}

	deleteItem = id => {
		this.setState(({ data }) => ({
			data: data.filter(item => item.id !== id),
		}))
	}

	render() {
		const { data } = this.state
		return (
			<div className='app'>
				<AppInfo />

				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>

				<EmployeersList data={data} onDelete={this.deleteItem} />
				<EmployeersAddForm />
			</div>
		)
	}
}

export default App
