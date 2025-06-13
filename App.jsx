import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Welcome from './Welcome';

const modules = Array.from({ length: 12 }, (_, i) => ({
  name: `Module${i + 1}`,
  path: `/module${i + 1}`,
  Component: React.lazy(() => import(`./modules/Module${i + 1}.jsx`))
}));

const App = () => (
  <div className="container">
    <h1>🚀 SmartBiz AI System</h1>
    <nav className="navbar">
      <Link to="/">🏠 Home</Link>
      {modules.map((mod, index) => (
        <Link key={index} to={mod.path}>{mod.name}</Link>
      ))}
    </nav>
    <main>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          {modules.map((mod, index) => (
            <Route key={index} path={mod.path} element={<mod.Component />} />
          ))}
        </Routes>
      </React.Suspense>
    </main>
  </div>
);

export default App;
