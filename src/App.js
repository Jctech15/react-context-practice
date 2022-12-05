import React, { createContext, useState } from 'react';
import './style.css';
import Count from './Count.js';
import CountButton from './CountButton.js';
import CountProvider from './CountContext.jsx';

export const CountContext = createContext();

function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

export default function App() {
  return (
    <CountProvider>
      <Count />
      <CountButton />
    </CountProvider>
  );
}

// Create CountContext and CountProvider that uses { count, setCount } as its values. This will allow the count and setCount function to be passed to any of its {children} in the tree.
//Create 2 components Count and CountButton that can each call useContext(CountContext) to update the count and display the current count value.
