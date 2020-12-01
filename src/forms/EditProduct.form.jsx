import React from 'react';
import { useStylesForComponents } from '../common/functions/useStyles';
import { withStyles } from '@material-ui/core/styles';
import Form from '../common/components/Form';

class EditProductForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		const { id, name, price } = this.props.object;
		this.state = { id, name, price };
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
			{ text: 'Price: ', name: 'price', type: 'number', value: this.state.price },
		];
		return <Form header='Edit product' onSubmit={this.handleSubmit} onChange={this.handleChange} close={this.props.close} items={items} classes={this.props.classes} />
	}
}

export default withStyles(useStylesForComponents)(EditProductForm);