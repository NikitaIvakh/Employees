import EmployeesListItem from '../employeers-list-item/employeers-list-item'
import './employeers-list.css'

function EmployeersList({ data, onDelete }) {
	const elements = data.map(item => {
		const { id, ...itemProps } = item
		return (
			<EmployeesListItem
				onDelete={() => onDelete(id)}
				key={id}
				{...itemProps}
			/>
		)
	})

	return <ul className='app-list list-group'>{elements}</ul>
}

export default EmployeersList
