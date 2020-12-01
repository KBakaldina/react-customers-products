import React from 'react';
import { useStylesForComponents } from '../common/functions/useStyles';
import { withStyles } from '@material-ui/core/styles';
import Form from '../common/components/Form';

class DeleteProductForm extends React.Component {
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
			{ text: 'Price: ', name: 'price', value: this.props.object.price, readOnly },
		];
		return <Form header='Are you sure to delete this product?' submitText='Delete' onSubmit={this.handleSubmit} close={this.props.close} items={items} classes={this.props.classes} />
	}
}

export default withStyles(useStylesForComponents)(DeleteProductForm);