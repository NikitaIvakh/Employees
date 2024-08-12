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
				{
					id: uuidv7(),
					name: 'John Smith',
					salary: 1000,
					increase: false,
					rise: true,
				},
				{
					id: uuidv7(),
					name: 'Antony Martial',
					salary: 800,
					increase: true,
					rise: false,
				},
				{
					id: uuidv7(),
					name: 'Alex Jordan',
					salary: 700,
					increase: false,
					rise: false,
				},
				{
					id: uuidv7(),
					name: 'Bob Boxen',
					salary: 1900,
					increase: false,
					rise: false,
				},
			],
			term: '',
		}
	}

	deleteItem = id => {
		this.setState(({ data }) => ({
			data: data.filter(item => item.id !== id),
		}))
	}

	createItem = (name, salary) => {
		const newItem = {
			id: uuidv7(),
			name: name,
			salary: salary,
			increase: false,
			rise: false,
		}

		this.setState(({ data }) => ({
			data: [...data, newItem],
		}))
	}

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map(item =>
				item.id === id ? { ...item, [prop]: !item[prop] } : item
			),
		}))
	}

	searchEmp = (items, term) => {
		if (term.length === 0) return items

		return items.filter(item => {
			return item.name.indexOf(term) > -1
		})
	}

	onUpdateSearch = term => {
		this.setState({
			term: term,
		})
	}

	render() {
		const { data, term } = this.state
		const visibleData = this.searchEmp(data, term)
		const employees = visibleData.length
		const increases = visibleData.filter(item => item.increase).length

		return (
			<div className='app'>
				<AppInfo employees={employees} increases={increases} />

				<div className='search-panel'>
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter />
				</div>

				<EmployeersList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeersAddForm onCreate={this.createItem} />
			</div>
		)
	}
}

export default App
