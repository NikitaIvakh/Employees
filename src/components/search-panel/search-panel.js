import { Component } from 'react'
import './search-panel.scss'

class SearchPanel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			term: '',
		}
	}

	onUpdateSearch = event => {
		const term = event.target.value
		this.setState({ term: term })
		this.props.onUpdateSearch(term)
	}

	render() {
		const { term } = this.state
		return (
			<input
				type='text'
				className='form-control search-input'
				placeholder='Найти сотрудника'
				value={term}
				onChange={this.onUpdateSearch}
			/>
		)
	}
}

export default SearchPanel
