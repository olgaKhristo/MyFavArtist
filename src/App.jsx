import React, {useState} from 'react';
import "./App.css";
import Component from './Component.jsx';
import Header from './Header.jsx';

export default function App() {

  const [inputText, setInputText] = useState('');
  const [submittedText, setSubmittedText] = useState('');
  const handleInput = (e) => {
    setInputText(e.target.value);
  }
  const handleValue = (e) => {
    e.preventDefault();
setSubmittedText(inputText);

  }

  return (
    <>
        <Header />
      <header>Add your favour song:  </header>
      <p>{submittedText}</p>
      <form onSubmit={handleValue}>
      <input type="text" placeholder="Add song" onChange={handleInput} />
      <button type="submit">Add</button>
      </form>
        <Component />
    </>
   
  );
}