import EmployeesListItem from '../employeers-list-item/employeers-list-item'
import './employeers-list.css'

function EmployeersList() {
	return (
		<ul className='app-list list-group'>
			<EmployeesListItem />
			<EmployeesListItem />
			<EmployeesListItem />
			<EmployeesListItem />
		</ul>
	)
}

export default EmployeersList
