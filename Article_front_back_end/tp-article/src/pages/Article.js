import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
;

class Article extends Component {
    
    state= {
        Article:{
                nom:'',
                titre:'',
                sujet:'',
                vote: 0},
        relatedArticles:[]
    }

    Articles(){
        axios.get('http://localhost:8000/articles/'+this.props.match.params.id)
        .then(rep=>{
            this.setState({
                Article:rep.data
            })
        })
    }
    
    componentDidMount(){
       this.Articles(); 
       axios.get('http://localhost:8000/articles/')
       .then(rep=>{
           this.setState({
               relatedArticles:rep.data.filter(articles=>articles._id!==this.props.match.params.id)
           })
       })
    }

    

        
     

    addVote=(id)=>{
        this.setState({
            vote:this.state.vote+1
        })

        axios.post('http://localhost:8000/articles/update/'+id)
        }

  
    render() {
        
      
        const id=this.props.match.params.id;
       // const relatedArticles=articles.filter((art)=>art.id!=id);
     
       
        return (
            <div>
                <div className="card col-md-12 my-4 ">
                    <div className="card-body my-4">
                        <h4 className="card-title">{this.state.Article.titre} <span className="badge badge-pill badge-secondary">{this.state.Article.vote}</span></h4>
                        <p className="card-text">{this.state.Article.sujet}</p>
                        <button onClick={()=> this.addVote(id)} type="button" className="btn btn-outline-primary">vote</button>
                        
                    </div>  
                </div>
                <hr/>
                <h2 className='text-primary'>Realated Article</h2>

                {this.state.relatedArticles.map(artcile=>(
                    <div className="card col-md-12 my-4 " key={artcile._id}>
                        <div className="card-body my-4">
                            <h4 className="card-title">{artcile.titre} </h4>
                            <p className="card-text">{artcile.sujet.substring(0,100)}</p>
                            <button type="button" className="btn btn-dark"><Link to={`/Article/${artcile._id}`} >Plus Informations</Link> </button>
                        </div>  
                    </div>
                ))}
            </div>
        );
      
                    
    }
}

export default Article; 