import React, { Component } from 'react';
import {connect} from 'react-redux';

import {setUserData} from './actions/index';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        name:"Rafiq",
        email:"raf@gmail.com",
        age:"26" 
    }
    this.onchangeField = this.onchangeField.bind(this)
  }

  onchangeField(event){

    this.setState(
        {[event.target.id]: event.target.value}, 
        function () {
            this.props.updateForm(this.state);
        }
    )
  }

  render() {
    //console.log(this.props)
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <label>Name:</label>
                  <input type="name" className="form-control" value={this.state.name} onChange={this.onchangeField} id="name"/>
                </div>
                <div className="form-group">
                  <label >Email address:</label>
                  <input type="email" className="form-control"  value={this.state.email} id="email" onChange={this.onchangeField}/>
                </div>
                <div className="form-group">
                  <label >age:</label>
                  <input type="text" className="form-control" id="age"value={this.state.age} onChange={this.onchangeField} />
                </div>
                <div className="checkbox">
                  <label><input type="checkbox"/> Remember me</label>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    user:state
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    updateForm : (user) =>{
      console.log(user)
      dispatch(setUserData(user));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
