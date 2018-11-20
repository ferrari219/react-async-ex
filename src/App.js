import React, { Component } from 'react';
import NewsList from './NewsList';
import Categories from './Categories';

class App extends Component {
  state = {
    category: 'all'
  }
  handleSelect=(category)=>{
    this.setState({
      category: category
    })
  }
  render() {
    return (
      <div>
        <Categories onSelect={this.handleSelect}/>
        <NewsList category={this.state.category}/>
      </div>
    );
  }
}

export default App;