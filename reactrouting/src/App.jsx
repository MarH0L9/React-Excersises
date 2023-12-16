// Import necessary dependencies from React and React Router
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
// Import your custom components (Home, Contact, About)
import Home from './components/Home';
import Todo from './components/todolist';

// Define your main App component
function App() {
  return (
    // Wrap your entire application with BrowserRouter
    <BrowserRouter>
      {/* Create navigation links using the Link component */}
      <Link to="/">Home</Link>{' '}
      <Link to="/todolist">Todo</Link>{' '}
      

      {/* Define your routes using the Routes and Route components */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/todolist" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

// Export your main App component
export default App
