//pass functions from children here. AddForm.jsx inside return with props, and add const[submittedText, setSubmittedText] = useState([]); 
//
import React, {useState} from 'react';
import "./App.css";

import {AddForm, Header, Component} from "./components";

export default function App() {

  const [inputText, setInputText] = useState('');
  const [submittedText, setSubmittedText] = useState([]);
 

 

  return (
    <>
        <Header />
        <AddForm
        inputText={inputText}
        setInputText={setInputText}
        submittedText={submittedText}
        setSubmittedText={setSubmittedText}        
        />
      
        <Component />
    </>
   
  );
  }