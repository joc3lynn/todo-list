import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TodoForm />
    <TodoList />
  </StrictMode>
);
