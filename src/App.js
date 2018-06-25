import React, { Component } from 'react';
import ViewOne from './ViewOne';
import ViewTwo from './ViewTwo';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state={
            loadViewOne:false,
            loadViewTwo:false,
        }
    }

    componentDidMount(){
        window.dataLayer.push({
            'userId': '00001',
            'userRole': 'INS',
            'component': 'AppComponent'
        });
    }

 /* componentDidMount(){
      window.dataLayer.push({
          event:'fireTimer'
      });
  }*/

    loadViewOne(){
        this.setState({
            loadViewOne:true
        });

        window.dataLayer.push({
            'event':'loadViewOneEvent',
            'VirtualPageTitle':'VirtualPage_LoadViewOne',
            'VirtualPageUrl':'/app/load-view-one'
        });
    }

    loadViewTwo(){
        this.setState({
            loadViewTwo:true
        });
        window.dataLayer.push({
            'event':'loadViewTwoEvent',
            'VirtualPageTitle':'VirtualPage_LoadViewTwo',
            'VirtualPageUrl':'/app/load-view-two'
        });
    }

    closeViewOne(){
        this.setState({
            loadViewOne:false
        });
    }

    closeViewTwo(){
        this.setState({
            loadViewTwo:false
        });
    }

    stopMainTimer(){
        //console.log(gtm.timerId)
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=>this.loadViewOne()}>Load View One</button>
          {this.state.loadViewOne &&
            <ViewOne closeViewOne={()=>this.closeViewOne()}/>
          }
        <button onClick={()=>this.loadViewTwo()}>Load View Two</button>
          {this.state.loadViewTwo &&
          <ViewTwo closeViewTwo={()=>this.closeViewTwo()}/>
          }

          {/*<button onClick={()=>this.stopMainTimer()}>STOP MAIN TIMER</button>*/}
      </div>
    );
  }
}

export default App;
