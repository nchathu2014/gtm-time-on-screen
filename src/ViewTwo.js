import React,{Component} from 'react';

class ViewOne extends Component{

    render(){
        return(
            <div style={{backgroundColor:'#eee'}}>
                <h1>I am view two</h1>
                <a  onClick={()=>this.props.closeViewTwo()}>Close[X]</a>
            </div>
        );
    }
}

export default ViewOne;





