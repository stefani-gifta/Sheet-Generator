import React, { useState } from 'react';
import Home from './Home';
import FormTemplate from './FormTemplate';

export default function App() {
  const [showHomeSection, setShowHomeSection] = useState(true);

  return (
    <>
      {showHomeSection && <Home onClick={() => setShowHomeSection(false)} />}
      {!showHomeSection && <FormTemplate onClick={() => setShowHomeSection(true)} />}
    </>
  );
}