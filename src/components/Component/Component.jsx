import React, {useState} from 'react';


export default function Component() {
  const [component, setComponent] = useState(0);
 
  const incrementComponent = () => {
    setComponent(prevState => prevState + 1);
    
  };
  const decrementComponent = () => {
    setComponent(prevState => prevState - 1);
    
  };
 
  return (
    <>
    <h1> Like: {component}</h1>
    <button onClick={incrementComponent}>Like</button>
    <button onClick={decrementComponent}>Dislike</button>
    </>
  );
}
