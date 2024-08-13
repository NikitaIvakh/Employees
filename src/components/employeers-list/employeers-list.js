import EmployeesListItem from '../employeers-list-item/employeers-list-item'
import './employeers-list.scss'

function EmployeersList({ data, onDelete, onToggleProp, onChangeSalary }) {
	const elements = data.map(item => {
		const { id, ...itemProps } = item
		return (
			<EmployeesListItem
				onDelete={() => onDelete(id)}
				onToggleProp={event =>
					onToggleProp(id, event.currentTarget.getAttribute('data-toggle'))
				}
				onChangeSalary={event => {
					const digitsArray = event.target.value.match(/\d/g)
					const digitsString = digitsArray ? digitsArray.join('') : ''

					return onChangeSalary(id, digitsString)
				}}
				key={id}
				{...itemProps}
			/>
		)
	})

	return <ul className='app-list list-group'>{elements}</ul>
}

export default EmployeersList
