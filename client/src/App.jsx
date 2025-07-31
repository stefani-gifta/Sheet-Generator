import React from 'react';
import Home from './Home';
import FormTemplate from './FormTemplate';

export default function App() {
  const toggleComponent = () => {
    console.log('toggle');
  };
  
  return (
    <>
      <Home onClick={toggleComponent} />
      <FormTemplate onClick={toggleComponent} />
    </>
  );
}