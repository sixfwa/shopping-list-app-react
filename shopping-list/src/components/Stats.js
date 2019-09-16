import React from 'react'

const Stats = (props) => {

    const totalItems = props.items.length;
    const totalQuantity = props.items.reduce((total, item) => {
        return total + item.quantity
    }, 0);

    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Items:</td>
                    <td>{totalItems}</td>
                </tr>
                <tr>
                    <td>Total Quantity</td>
                    <td>{totalQuantity}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Stats