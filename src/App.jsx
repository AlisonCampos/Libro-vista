import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AutorForm from './components/AutorForm';
import AutorList from './components/AutorList';

function App() {
  return (
    <Router>
      <div className="container py-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded mb-4">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Microservicio Autor</Link>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/autores">Autores</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/nuevo-autor">Nuevo Autor</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={
            <div className="text-center">
              <h2 className="mb-4">Bienvenido a la aplicación de autores</h2>
              <p className="lead">Utiliza el menú para crear y consultar autores.</p>
            </div>
          } />
          <Route path="/autores" element={<AutorList />} /> {/* Nueva ruta */}
          <Route path="/nuevo-autor" element={<AutorForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;