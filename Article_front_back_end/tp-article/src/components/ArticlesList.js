import React, { Component } from 'react';
import axios from 'axios'

//import ArticleContent from '../ArticleContent';
import {Link} from 'react-router-dom';

class ArticlesList extends Component {
   
    state ={
        Articles : []
        }
    componentWillMount(){
        axios.get('http://localhost:8000/articles/')
        .then(rep=>{
            this.setState({
                Articles:rep.data
            })
        })
    }

    render() {
        return (
            <div>
                
                <div className='row '>
                {this.state.Articles.map(article=>(
                    <div className="card col-md-12 my-4 " key={article._id}>
                        <div className="card-body my-4">
                            <h4 className="card-title">{article.titre} </h4>
                            <p className="card-text">{article.sujet.substring(0,100)}</p>
                            <button type="button" className="btn btn-dark"><Link to={`/Article/${article._id}`} >Plus Informations</Link> </button>
                        </div>  
                    </div>
                ))}
                </div>
        
            </div>
        );
    }
}

export default ArticlesList;