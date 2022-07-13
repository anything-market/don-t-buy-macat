import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </div>
  );
}

export default App;
