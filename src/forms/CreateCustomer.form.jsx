import React from 'react';
import { useStylesForComponents } from '../common/functions/useStyles';
import { withStyles } from '@material-ui/core/styles';
import Form from '../common/components/Form';

class CreateCustomerForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			name: '',
			address: '',
			phone: '',
		};
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = () => {
		this.props.handle(this.state);
	}

	render() {
		const items = [
			{ text: 'Name: ', name: 'name', value: this.state.name },
			{ text: 'Address: ', name: 'address', value: this.state.address },
			{ text: 'Phone: ', name: 'phone', value: this.state.phone },
		]
		return <Form header='Create customer' onSubmit={this.handleSubmit} onChange={this.handleChange} close={this.props.close} items={items} classes={this.props.classes} />
	}
}

export default withStyles(useStylesForComponents)(CreateCustomerForm);