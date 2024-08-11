import EmployeesListItem from '../employeers-list-item/employeers-list-item'
import './employeers-list.css'

function EmployeersList({ data }) {
	const elements = data.map(item => {
		const { id, ...itemProps } = item
		return <EmployeesListItem key={id} {...itemProps} />
	})

	return <ul className='app-list list-group'>{elements}</ul>
}

export default EmployeersList
