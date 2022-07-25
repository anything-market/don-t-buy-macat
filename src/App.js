import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import Main from './pages/Pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
