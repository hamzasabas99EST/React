import React, { Component } from 'react'
import Users from './component/Users'
import Search from './component/Search'
import usersVal from './component/usersVal'
import './App.css'


class App extends Component {
  
  state={ 
           
    users :usersVal,
    color:''
}

searchUserForm=(val)=>{
const FiltredUsers=usersVal.filter(user =>{
  return user.name.indexOf(val)!==-1;
  })
  this.setState({ users:FiltredUsers})
  
}

ChangeColor=(e)=>{
  this.setState({
    color:e.target.value
  })
}
render() {
  const CartColor={
    background:this.state.color,
    
   
  }

    return (

      <div>
         <div className="row ">
              <div className="col-md-2 mx-auto"> 
                  <Search  getUserSearch={this.searchUserForm}/>
                  <input type='color' onChange={this.ChangeColor} value={this.state.color}/>
              </div>
          </div>
          <div className="row ">
          {this.state.users.map(user=>(
            <div className="card  m-1" style={CartColor} >
              <Users user={user} />
            </div>
           ))}
           </div>
      </div>
    )
  }
}

export default App
