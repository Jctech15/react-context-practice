import React, { useContext } from 'react';
import { CountContext } from './App.js';

export default function Count() {
  const { count } = useContext(CountContext);
  return <h3>{`Current count: ${count}`}</h3>;
}
