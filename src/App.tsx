import React from 'react';
import ResultField from './components/search-result/ResultField';
import Search from './components/search/Search';



function App() {
 
  return (
    <div className="App">
      <div className='navbar'>
          <img alt="Digesto" src='logo-ip.png'></img>
      </div>
      <div className='navbar-side'>
      </div>
     <Search/>
     <ResultField/>
    </div>
  );
}

export default App;
