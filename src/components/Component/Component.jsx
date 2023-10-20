
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Component() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1> Like: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Like</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Dislike</button>
    </>
  );
}


// import React, {useState, useReducer} from 'react';

// const initialState = [];

// function reducer(state, action){
//   switch(action.type){
//     case 'increment':
//       return [...state, {count: state.count + 1}]
      
//     case 'decrement':
//       return [...state, {count: state.count -1}]
//     default:
//       return state;
//   }
// }

// export default function Component() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   //const [component, setComponent] = useState(0);
 
//   // const incrementComponent = () => {
//   //   setComponent(prevState => prevState + 1);
    
//   // };
//   // const decrementComponent = () => {
//   //   setComponent(prevState => prevState - 1);
    
//   // };
 
//   return (
//     <>
//     <h1> Like: {state}</h1>
//     <button onClick={(e)=> dispatch(
//       {type:'increment', payload: e.state.count}
//       )}>Like</button>
//     <button onClick={(e) => dispatch(
//       {type:'decrement', payload: e.state.count}      
//       )}>Dislike</button>
//     </>
//   );
// }
