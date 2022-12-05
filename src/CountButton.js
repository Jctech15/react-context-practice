import React, { useContext, createContext, useState } from 'react';
import { CountContext } from './App.js';

export default function CountButton() {
  const { setCount } = useContext(CountContext);
  return (
    <button onClick={() => setCount((count) => setCount(count + 1))}>
      Increment
    </button>
  );
}
