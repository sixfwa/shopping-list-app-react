import React, { Component } from 'react';



class Counter extends Component {
    state = {
        index: this.props.index,
    }

    condition() {
        if (this.props.quantity > 0) {
            return () => this.props.changeScore(this.state.index, -1)
        }
    }

    render() {
        return (
            <div className="counter" >
                <button className="counter-action decrement" onClick={this.condition()}> - </button>
                <span className="counter-score">{this.props.quantity}</span>
                <button className="counter-action decrement" onClick={() => this.props.changeScore(this.state.index, 1)}> + </button>
            </div>
        )
    }


}

export default Counter