import React, {useState} from 'react';
import "./App.css";

import {AddForm, Header, Component} from "./components";

export default function App() {

  const [inputText, setInputText] = useState('');
 

 

  return (
    <>
        <Header />
        <AddForm />
      
        <Component />
    </>
   
  );
  }