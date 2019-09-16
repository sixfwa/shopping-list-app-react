import React, { Component } from 'react';

import Header from './Header';
import Item from './Item';
import AddItemForm from './AddItemForm';

class App extends Component {

  state = {
    items: [
      {
        name: 'Bread',
        'quantity': 1,
        'id': 1
      }
    ]
  }

  prevPlayerID = 4;

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      quantity: prevState.items[index].quantity += delta
    }))
  }

  handleAddItem = (name) => {
    this.setState(prevState => {
      return {
        items: [
          ...prevState.items,
          {
            name,
            quantity: 1,
            id: this.prevPlayerID += 1
          }
        ]
      }
    })
  }

  handleRemoveItem = (id) => {
    this.setState(prevState => {
      return {
        items: this.state.items.filter(p => p.id !== id)
      }
    })
  }

  render() {
    return (
      <div className="shoppinglist">
        <Header title="Shopping List" items={this.state.items} />


        {this.state.items.map((item, index) =>
          <Item
            name={item.name}
            quantity={item.quantity}
            id={item.id}
            key={item.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removeItem={this.handleRemoveItem}
          />
        )}

        <AddItemForm addItem={this.handleAddItem} />
      </div>
    )
  }
}

export default App;
