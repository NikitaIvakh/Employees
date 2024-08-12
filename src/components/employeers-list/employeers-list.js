import EmployeesListItem from '../employeers-list-item/employeers-list-item'
import './employeers-list.css'

function EmployeersList({ data, onDelete, onToggleProp }) {
	const elements = data.map(item => {
		const { id, ...itemProps } = item
		return (
			<EmployeesListItem
				onDelete={() => onDelete(id)}
				onToggleProp={event =>
					onToggleProp(id, event.currentTarget.getAttribute('data-toggle'))
				}
				key={id}
				{...itemProps}
			/>
		)
	})

	return <ul className='app-list list-group'>{elements}</ul>
}

export default EmployeersList
