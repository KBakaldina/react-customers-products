import React from 'react';
import { useStylesForComponents } from '../common/functions/useStyles';
import { withStyles } from '@material-ui/core/styles';
import Form from '../common/components/Form';

class DeleteCustomerForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = () => {
		this.props.handle(this.props.object.id);
	}

	render() {
		const readOnly = true;
		const items = [
			{ text: 'Name: ', name: 'name', value: this.props.object.name, readOnly },
			{ text: 'Address: ', name: 'address', value: this.props.object.address, readOnly },
			{ text: 'Phone: ', name: 'phone', value: this.props.object.phone, readOnly },
		]
		return <Form header='Are you sure to delete this customer?' submitText='Delete' onSubmit={this.handleSubmit} close={this.props.close} items={items} classes={this.props.classes} />
	}
}

export default withStyles(useStylesForComponents)(DeleteCustomerForm);