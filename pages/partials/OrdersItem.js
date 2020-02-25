import React from 'react';

export default function ProductsItem({item}) {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.user_id}</td>
            <td>{item.amount}</td>
            <td>{item.created_at}</td>
        </tr>
    )
}
