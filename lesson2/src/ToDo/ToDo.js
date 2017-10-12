import React,{Component} from 'react';
import './ToDo.css'


export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state={
            userInput: '',
            list: []
        }
        window.state = this.state;
    }
    changeUserInput(input) {
        this.setState({
            userInput: input
        })
    }
    addToList(input) {
        if(input.length === 0) {
            return this.state;
        }
        let listArray = this.state.list;
        listArray.unshift(input);
        this.setState({
            list: listArray,
            userInput: ''
        })
    }
    render() {
        return (
            <div className="todo-list">
              <input className="input"
              onKeyUp={ (ev)=> { 
                  if(ev.keyCode !== 13) {
                      return;
                  }
                  this.addToList(this.state.userInput) } 
                }
              onChange = { (ev)=>this.changeUserInput(ev.target.value)}
              value = { this.state.userInput } 
              type ="text"/>
              <button className="button" onClick={ ()=>this.addToList(this.state.userInput)}>OK</button>
                <ul>
                    {this.state.list.map( (value, i) => <li key={i}>{value}</li>)}
                </ul>   
            </div>
        );
    }
}

