import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

function App(props) {

  return (
    <div>
      <span>{props.Avalue}</span> <br />
      <button onClick={() => props.onA(props.Bvalue)}>Update A</button>
      <span>{props.Bvalue}</span> <br />
      <button onClick={() => props.onB(props.Avalue)}>Update B</button>   
      <br/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
   Avalue : state.rA.Avalue,
   Bvalue : state.rB.Bvalue
  }
}

const mapDispatchToProps = (dispach) => {
  return {
    onA: (Bvalue) => dispach({type:'UpdateA', Bvalue:Bvalue}),
    onB: (Avalue) => dispach({type: 'UpdateB', Avalue:Avalue})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
