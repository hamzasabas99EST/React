import  React,{Component} from 'react';

class Input extends Component {
    render(){
        return (
            <div className="col-sm-6">
                <textarea  onChange={(e)=> this.props.onChangeHandler(e) } rows={23} className="form-control" ></textarea>
                
            </div>
        )
    }
}

export default Input;