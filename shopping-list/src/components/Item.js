import React from 'react'
import Counter from './Counter'

const Item = (props) => {
    return (
        <div className='item'>
            <span className="item-name">
                <button className="remove-item" onClick={() => props.removeItem(props.id)}>✖</button>
                {props.name}
            </span>
            <Counter
                quantity={props.quantity}
                index={props.index}
                changeScore={props.changeScore}
            />
        </div>
    )
}

export default Item