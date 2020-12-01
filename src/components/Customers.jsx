import React from 'react';
import TableConstructor from '../common/components/TableConstructor';
import CreateCustomerForm from '../forms/CreateCustomer.form';
import EditCustomerForm from '../forms/EditCustomer.form';
import DeleteCustomerForm from '../forms/DeleteCustomer.form';

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
            Body: EditCustomerForm,
            handle: this.handleEdit.bind(this),
        },
        delete: {
            display: true,
            Body: DeleteCustomerForm,
            handle: this.handleDelete.bind(this),
        },
    };
    
    createCustomer(id, name, address, phone) {
        return { id, name, address, phone };
    }

    handleCreate(customer) {
        const { name, address, phone } = customer;
        if (!name && !address && !phone) { console.error('Error during creating a new customer: Empty object'); return; }

        customer.id = this.state.maxId + 1;
        this.setState({
            customers: [customer, ...this.state.customers],
            maxId: customer.id,
        });
    }

    handleEdit(customer) {
        const { id, name, address, phone } = customer;

        if (!id) { console.error('No id provided during customer editing'); return; }
        if (!name && !address && !phone) { console.error('Error during customer editing: Empty object'); return; }

        this.setState({ customers: this.state.customers.map(item => { return item.id === id ? customer : item; }) });
    }

    handleDelete(id) {
        if (!id) { console.error('No id provided during customer deleting'); return; }
        this.setState({ customers: this.state.customers.filter(item => item.id !== id) });
    }

    render() {
		return <TableConstructor pageHeader={this.pageHeader} buttons={this.buttons} tableHeaders={this.tableHeaders} data={this.state.customers} keyProperty='id' />;
	}
}