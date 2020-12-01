import React from 'react';
import TableConstructor from '../common/components/TableConstructor';
import CreateProductForm from '../forms/CreateProduct.form';
import EditProductForm from '../forms/EditProduct.form';
import DeleteProductForm from '../forms/DeleteProduct.form';

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                this.createProduct(1, 'Cell phone', 150.99),
                this.createProduct(2, 'Apples', 20.55),
                this.createProduct(3, 'Kitty', 1),
                this.createProduct(4, 'Unicorn', 777.77),
                this.createProduct(5, 'Ice Cream', 5),
            ],
            maxId: 5,
        }
    }

    pageHeader = 'Product list';
    tableHeaders = { name: 'Name', price: 'Price' };
    buttons = {
        create: {
            display: true,
            Body: CreateProductForm,
            handle: this.handleCreate.bind(this),
        },
        edit: {
            display: true,
            Body: EditProductForm,
            handle: this.handleEdit.bind(this),
        },
        delete: {
            display: true,
            Body: DeleteProductForm,
            handle: this.handleDelete.bind(this),
        },
    };

    createProduct(id, name, price) {
        return { id, name, price };
    }

    handleCreate(product) {
        const { name, price } = product;
        if (!name && !price) { console.error('Error during creating a new product: Empty object'); return; }

        product.id = this.state.maxId + 1;
        this.setState({
            products: [product, ...this.state.products],
            maxId: product.id,
        });
    }

    handleEdit(product) {
        const { id, name, price } = product;

        if (!id) { console.error('No id provided during product editing'); return; }
        if (!name && !price) { console.error('Error during product editing: Empty object'); return; }

        this.setState({ products: this.state.products.map(item => { return item.id === id ? product : item; }) });
    }

    handleDelete(id) {
        if (!id) { console.error('No id provided during product deleting'); return; }
        this.setState({ products: this.state.products.filter(item => item.id !== id) });
    }

    render() {
        return <TableConstructor pageHeader={this.pageHeader} buttons={this.buttons} tableHeaders={this.tableHeaders} data={this.state.products} keyProperty='id' />;
    } 
}