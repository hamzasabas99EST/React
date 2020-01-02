import React, { Component } from 'react'


export class Users extends Component {
    
  
    render() {
        const {url_img,name,email}=this.props.user;

      return (
        <div>
            
            <img className="card-img-top" src={url_img} alt=""/>
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{email}</p>
            </div>
               
        </div>
     
        )
    }
}

export default Users
