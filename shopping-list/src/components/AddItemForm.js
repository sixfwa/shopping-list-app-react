import React, { Component } from 'react'

class AddItemForm extends Component {

    state = {
        value: ''
    }

    handleValueChange = (e) => {
        console.log(e.target.value)
        this.setState({ value: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value.replace(/\s/g, '').length) {
            this.props.addItem(this.state.value);
            this.setState({ value: '' })
        }

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Enter item name"
                />

                <input
                    type="submit"
                    value="Add Item"
                />
            </form>
        )
    }

}

export default AddItemForm