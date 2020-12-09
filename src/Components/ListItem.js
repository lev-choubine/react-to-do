import React, { Component } from 'react';

class ListItem extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            <li className="List">{this.props.doThis}</li>
            </div> 
        )
    }
    }
   

export default ListItem;