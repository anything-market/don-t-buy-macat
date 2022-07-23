import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';
import NavigationBar from './components/navigation-bar/NavigationBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles />
        <Pages />
        <NavigationBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
