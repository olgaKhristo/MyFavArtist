import React, { useState } from 'react';

export default function AddForm({inputText, setInputText, submittedText, setSubmittedText}) {

   
    
    const handleInput = (e) => {
      setInputText(e.target.value);
    }
    const handleValue = (e) => {
      e.preventDefault();
  setSubmittedText([
    ...submittedText,
    {text: inputText, completed:false}
  ]);
    setInputText("");
  
    }
    return(
        <>
      <header>Add your favour song:  </header>
      <p>{submittedText}</p>
      <form onSubmit={handleValue}>
      <input value={inputText} type="text" placeholder="Add song" onChange={handleInput} />
      <button type="submit">Add</button>
      </form>
        </>
    )
}