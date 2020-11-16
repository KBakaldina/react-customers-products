import React from 'react';
import TableConstructor from '../common/components/TableConstructor';

export default function Products() {
    const pageHeader = 'Product list';
    const tableHeaders = { name: 'Name', price: 'Price' };
    const buttons = { isDefault: true };

    return <TableConstructor pageHeader={pageHeader} buttons={buttons} tableHeaders={tableHeaders} data={customers} keyProperty='id'/>;
}

function createProduct(id, name, price) {
    return { id, name, price };
}

const customers = [
    createProduct(1, 'Cell phone', 150.99),
    createProduct(2, 'Apples', 20.55),
    createProduct(3, 'Kitty', 1),
    createProduct(4, 'Unicorn', 777.77),
    createProduct(5, 'Ice Cream', 5),
];