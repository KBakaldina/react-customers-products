import React from 'react';
import { useStylesForComponents } from '../common/functions/useStyles';
import { withStyles } from '@material-ui/core/styles';
import Form from '../common/components/Form';

class CreateProductForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			name: '',
			price: '',
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
			{ text: 'Price: ', name: 'price', value: this.state.address },
		]
		return <Form header='Create product' onSubmit={this.handleSubmit} onChange={this.handleChange} close={this.props.close} items={items} classes={this.props.classes} />
	}
}

export default withStyles(useStylesForComponents)(CreateProductForm);