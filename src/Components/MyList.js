import React, { Component } from 'react';
import ListItem from './ListItem.js';


  // prevent the event from running the default "submit" event.

  class MyList extends Component {

    constructor (props) {
      super()
      this.state = {
        arr: props.arr,
        newItem:''
      }
    }
  
    clearList (e) {
      this.setState({
        arr: []
      })
    }
  

    newItemChange (e){
      let changeValue = e.target.value;
      this.setState({ newItem:changeValue})

    }

    addItem(e){
      e.preventDefault()
        const newItem = this.state.newItem
        let newArr = this.state.arr
        newArr.push(newItem)
        this.setState({arr: newArr})
      
    
    }
    render() {
  
      let todoItems = this.state.arr.map( (item, index) => (
        <ListItem doThis={item} key={index} />
      ))
  
      return (
        <div>
          <h1>Things I should stop procrastinating:</h1>
          <ul>
            {todoItems}
          </ul>
          <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
          <form>
  <input type="text"
   placeholder="Type an item here"
   onChange={(e) => this.newItemChange(e)}
   value={this.state.newItem}
  />
  <button onClick={(e) => this.addItem(e)}>Add it!</button>
</form>
        </div>
      )
    }
  }
  // then the rest of your code.
  // ...


  
  export default MyList;
  