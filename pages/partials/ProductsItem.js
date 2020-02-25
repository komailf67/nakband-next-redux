import React from 'react';

export default function ProductsItem({item}) {
    // console.log(item);
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.stock}</td>
            <td>{item.created_at}</td>
        </tr>
    )
}
