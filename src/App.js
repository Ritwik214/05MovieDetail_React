import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
