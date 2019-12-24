import  React,{Component} from 'react';
import marked from "marked";

class Output extends Component {
 
    getMarkedownText(txt){
        var rawMarkup=marked(txt,{sanitize:true});
        return {__html:rawMarkup};
      }
      
    render(){
        return (
            <div className="col-sm-6" dangerouslySetInnerHTML={this.getMarkedownText(this.props.txt)}>
                    
            </div>
        )
    }
}

export default Output;