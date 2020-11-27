import React from 'react';
import TableConstructor from '../common/components/TableConstructor';
import CreateCustomerForm from '../forms/CreateCustomer.form';

export default class Customers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [
                this.createCustomer(1, 'Mark Benson', '365 Rochester St, Rialto FL 43250', '555-534-2342'),
                this.createCustomer(2, 'Bob Smith', '251 Market St, Nashville CA 94325', '555-534-2342'),
                this.createCustomer(3, 'John Draper', '890 Main St, Montana IL 31450', '555-534-2342'),
                this.createCustomer(4, 'Lily Thompson', '353 Rochester St, Rialto FL 43250', '555-534-2342'),
                this.createCustomer(5, 'Stephanie Black', '251 Market St, Deauville CA 94325', '555-534-2342'),
            ],
            maxId: 5,
        };
    }

    pageHeader = 'Customer list';
    tableHeaders = { name: 'Name', address: 'Address', phone: 'Phone' };
    buttons = {
        create: {
            display: true,
            Body: CreateCustomerForm,
            handle: this.handleCreate.bind(this),
        },
        edit: {
            display: true,
            onClick: () => { alert('Edit button clicked'); },
            body: <p>Edit button</p>,
        },
        delete: {
            display: true,
            onClick: () => { alert('Delete button clicked'); },
            body: <p>Delete button</p>,
        },
    };
    
    createCustomer(id, name, address, phone) {
        return { id, name, address, phone };
    }

    handleCreate(newCustomer) {
        const { name, address, phone } = newCustomer;
        if (!name && !address && !phone) { return; }

        newCustomer.id = this.state.maxId + 1;
        this.setState({
            customers: [newCustomer, ...this.state.customers],
            maxId: newCustomer.id,
        });
    }

    render() {
		return <TableConstructor pageHeader={this.pageHeader} buttons={this.buttons} tableHeaders={this.tableHeaders} data={this.state.customers} keyProperty='id' />;
	}
}