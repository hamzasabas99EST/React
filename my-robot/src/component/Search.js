import React, { Component } from 'react'

export class Search extends Component {
    state={
        search :'',
        color:'black'
    }

  

    SearchUsers=(e)=>{

        this.setState({
            search:e.target.value
        })
        e.preventDefault();
        this.props.getUserSearch(this.state.search)
    }

    
    render() {
   
        const {search}=this.state;
        

        return (
            <div>
               <form>
                 <div class="form-group">
                    <input type="text" className="form-control" onChange={this.SearchUsers} value={search} id="" placeholder="Recherche" />
                    
                </div>   
                
             </form> 
             
               
            </div>
        )
    }
}

export default Search
