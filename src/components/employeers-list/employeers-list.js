import EmployeesListItem from '../employeers-list-item/employeers-list-item'
import './employeers-list.css'

function EmployeersList({ data }) {
	const elements = data.map(item => {
		return <EmployeesListItem {...item} />
	})

	return <ul className='app-list list-group'>{elements}</ul>
}

export default EmployeersList
