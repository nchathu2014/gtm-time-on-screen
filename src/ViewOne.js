import React,{Component} from 'react';

class ViewOne extends Component{

    constructor(props){
        super(props);
        this.startTime=0;
        this.endTime=0;
    }

    componentDidMount(){
        this.startTime = new Date().getTime();
       console.log("ViewOne MOUNTED -> "+this.startTime);
    }

    componentWillUnmount(){
        this.endTime = new Date().getTime();

        console.log("ViewOne UN-MOUNTED -> "+this.endTime);
        console.log("Spent Time -> "+(this.endTime - this.startTime));
    }

    onChangeGender(genderVal){
        if(window.dataLayer){
            window.dataLayer.push({
                event:'genderTrack',
                SELECTED_GENDER:genderVal
            });
        }
    }

    render(){
        return(
            <div style={{backgroundColor:'#ccc',padding:15,width:400,margin:'0 auto'}}>
                <h1>I am view one</h1>
                <div style={{textAlign:'left'}}>
                    <h3>Gender</h3>
                    <input type="radio" name="gender-group" value="male" id="gender-group-male" onChange={()=>this.onChangeGender(document.getElementById('gender-group-male').value)}/> Male  <br/>
                    <input type="radio" name="gender-group" value="female" id="gender-group-female" onChange={()=>this.onChangeGender(document.getElementById('gender-group-female').value)} /> Female  <br/>

                </div>
                <a  onClick={()=>this.props.closeViewOne()}>Close[X]</a>
            </div>
        );
    }
}

export default ViewOne;