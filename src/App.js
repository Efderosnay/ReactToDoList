import React, { Component } from 'react';
import './App.css';
import ActiveList from './ActiveList';
import CompleteList from './CompleteList';
import Items from './Items';

class App extends Component {
  state = {
    items: [
      {
        itemsName: '',
        id: ''
      },
    ]
  };
prevItemsId = 0;
  handleAddItems = (itemsName) => {
    this.setState({items: [
        { itemsName,
          id: this.prevItemsId +=1  
        }
    ]})
  }
  handleRemoveItems = (id) => {
    this.setState( prevState => {
      return {
        items: prevState.items.filter(item => item.id !== id)
      };
    });
  }
  render() {
    return (
      <div>
        <h1 className="tc f-subheadline lh-title"> To Do list </h1>
          {this.state.items.map( (item,index) =>
            <Items
              itemsName={item.itemsName}
              id={item.id}
              key={item.id.toString()}
              removeItems={this.handleRemoveItems}
              addItems={this.handleAddItems}
            />
          )}
        <ActiveList/>
        <CompleteList/>
      </div>
    );
  }
}

export default App;
