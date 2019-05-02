import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      comments:[]
    }
  }

  componentDidMount=()=>{
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response=>response.json())
    .then(data=>{
     
      this.setState({
        comments:data
      })
    })
  }
    render(){
      return(

          <div className="App">
            <h1>User Comments</h1>
            {this.state.comments.map((item)=>{
              return( 
              <div className="divStyle">
              
              <div> {item.id} </div>
              <div> {item.name} </div>
              <div> {item.email} </div>
              <div> {item.body} </div>
             
              
              </div>
              )
            })}
          </div>
        )
    }

}

export default App;
