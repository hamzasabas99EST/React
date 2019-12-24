  import React, { Component } from 'react';
  import './App.css';
  import Header from './Header'
  import Input from './Input';
  import Output from './Output';

  class App extends Component {
    state={
      text: ""
    }
    ChangeHandler=(e)=>{
      const t=e.target.value;
      const newState={
        text: t
      };
      this.setState(newState);
    }

  

    render() {
      return (
        <div className="container">
          <div className="titre">
            <Header/>
          </div>
          <div className="row">
            <Input onChangeHandler={this.ChangeHandler}/>
            <Output txt={this.state.text}/>
          </div>
        </div>
      );
    }
  }

  export default App;
