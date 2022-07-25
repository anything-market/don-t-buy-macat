import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
