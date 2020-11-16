import React from 'react';
import TableConstructor from '../common/components/TableConstructor';

export default function Customers() {
    const pageHeader = 'Customer list';
    const tableHeaders = { name: 'Name', address: 'Address', phone: 'Phone' };
    const buttons = { isDefault: true };

    return <TableConstructor pageHeader={pageHeader} buttons={buttons} tableHeaders={tableHeaders} data={customers} keyProperty='id'/>;
}

function createCustomer(id, name, address, phone) {
    return { id, name, address, phone };
}

const customers = [
    createCustomer(1, 'Mark Benson', '365 Rochester St, Rialto FL 43250', '555-534-2342'),
    createCustomer(2, 'Bob Smith', '251 Market St, Nashville CA 94325', '555-534-2342'),
    createCustomer(3, 'John Draper', '890 Main St, Montana IL 31450', '555-534-2342'),
    createCustomer(4, 'Lily Thompson', '353 Rochester St, Rialto FL 43250', '555-534-2342'),
    createCustomer(5, 'Stephanie Black', '251 Market St, Deauville CA 94325', '555-534-2342'),
];