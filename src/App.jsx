import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetItems from './pages/GetItems';
import CreateItem from './pages/CreateItem';
import UpdateItem from './pages/UpdateItem';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <header style={{ marginBottom: '20px' }}>
          <h1>Trainee Application</h1>
          <nav>
            <Link to="/" style={{ marginRight: '10px' }}>View Items</Link> | 
            <Link to="/create" style={{ margin: '0 10px' }}>Create Item</Link> | 
            <Link to="/update" style={{ marginLeft: '10px' }}>Update Item</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<GetItems />} />
            <Route path="/create" element={<CreateItem />} />
            <Route path="/update" element={<UpdateItem />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
