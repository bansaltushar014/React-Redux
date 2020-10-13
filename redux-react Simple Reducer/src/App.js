import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

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
    onAgeUp: () => dispach({type:'Age_Up'}),
    onAgeDown: () => dispach({type: 'Age_Down'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
