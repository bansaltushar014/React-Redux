import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import * as Action from "./store/action/action";

function App(props) {

  return (
    <div>
      <span>{props.age}</span> <br />
      <button onClick={props.onAgeUp}>Up</button>
      <button onClick={props.onAgeDown}>Botton</button>   
      <br/>
      <div>
        {
          props.history.map((item, index) => {
            return <li key={index}> {item.age} </li>
          })
        }  
      </div>   
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    history: state.history,
    age: state.age,
  }
}

const mapDispatchToProps = (dispach) => {
  return {
    onAgeUp: () => dispach(Action.ageUpAsync()),
    onAgeDown: () => dispach(Action.ageDown())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
