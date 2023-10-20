// create addForm here and pass it to App.jsx(to perent element with correct props)
import React from 'react';

export default function AddForm({ inputText, setInputText, submittedText, setSubmittedText }) {
  const handleInput = (e) => {
    setInputText(e.target.value);
  }

  const handleValue = (e) => {
    e.preventDefault();
    setSubmittedText([
      ...submittedText,
      { text: inputText, completed: false }
    ]);
    setInputText("");
  }

  return (
    <>
      <header>Add your favorite line from a song: </header>
      <ul>
        {submittedText.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
      <form onSubmit={handleValue}>
        <input value={inputText} type="text" placeholder="Add a line" onChange={handleInput} />
        <button type="submit">Add</button>
      </form>
    </>
  )
}






// import React, { useState } from 'react';

// export default function AddForm({inputText, setInputText, submittedText, setSubmittedText}) {
  
//   const [submittedText, setSubmittedText] = useState([]);
    
//     const handleInput = (e) => {
//       setInputText(e.target.value);
//     }
//     const handleValue = (e) => {
//       e.preventDefault();
//   setSubmittedText([
//     ...submittedText,
//     {text: inputText, completed:false}
//   ]);
//     setInputText('');
  
//     }
//     return(
//         <>
//       <header>Add your favorite line from a song:  </header>
//       <ul>
//       <p>{submittedText.map((item, index)=>(<li key={index}>{item.text}</li>))}</p>
//       </ul>
//       <form onSubmit={handleValue}>
//       <input value={inputText} type="text" placeholder="Add a line" onChange={handleInput} />
//       <button type="submit">Add</button>
//       </form>
//         </>
//     )
// }