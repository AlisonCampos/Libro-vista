import React, { useEffect, useState } from 'react';
import { getAutores, getAutorById, getAutorByNombre } from '../services/autorService';

const AutorList = () => {
  const [autores, setAutores] = useState([]);
  const [busquedaId, setBusquedaId] = useState('');
  const [busquedaNombre, setBusquedaNombre] = useState('');
  const [autorPorId, setAutorPorId] = useState(null);
  const [autorPorNombre, setAutorPorNombre] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    cargarAutores();
  }, []);

  const cargarAutores = async () => {
    setLoading(true);
    try {
      const data = await getAutores();
      setAutores(data);
    } catch (error) {
      alert('Error al cargar autores');
    }
    setLoading(false);
  };

  const buscarPorId = async (e) => {
    e.preventDefault();
    setAutorPorId(null);
    if (!busquedaId) return;
    setLoading(true);
    try {
      const data = await getAutorById(busquedaId);
      setAutorPorId(data);
    } catch (error) {
      alert('No se encontró el autor con ese ID');
    }
    setLoading(false);
  };

  const buscarPorNombre = async (e) => {
    e.preventDefault();
    setAutorPorNombre(null);
    if (!busquedaNombre) return;
    setLoading(true);
    try {
      const data = await getAutorByNombre(busquedaNombre);
      setAutorPorNombre(data);
    } catch (error) {
      alert('No se encontró el autor con ese nombre');
    }
    setLoading(false);
  };

  return (
    <div>
      <h3 className="mb-3">Lista de Autores</h3>
      {loading && <div className="alert alert-info">Cargando...</div>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>GUID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha de Nacimiento</th>
          </tr>
        </thead>
        <tbody>
          {autores.map((autor) => (
            <tr key={autor.autorLibroId || autor.id}>
              <td>{autor.autorLibroId || autor.id}</td>
              <td>{autor.autorLibroGuid || autor.guid || ''}</td>
              <td>{autor.nombre}</td>
              <td>{autor.apellido}</td>
              <td>{autor.fechaNacimiento ? autor.fechaNacimiento.split('T')[0] : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="row mt-4">
        <div className="col-md-6">
          <form onSubmit={buscarPorId} className="mb-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar por ID"
                value={busquedaId}
                onChange={(e) => setBusquedaId(e.target.value)}
              />
              <button className="btn btn-outline-primary" type="submit">Buscar ID</button>
            </div>
          </form>
          {autorPorId && (
            <div className="alert alert-success">
              <strong>Autor encontrado:</strong><br />
              <b>Id:</b> {autorPorId.autorLibroId || autorPorId.id}<br />
              <b>GUID:</b> {autorPorId.autorLibroGuid || autorPorId.guid || ''}<br />
              <b>Nombre:</b> {autorPorId.nombre}<br />
              <b>Apellido:</b> {autorPorId.apellido}<br />
              <b>Fecha de Nacimiento:</b> {autorPorId.fechaNacimiento ? autorPorId.fechaNacimiento.split('T')[0] : ''}
            </div>
          )}
        </div>
        <div className="col-md-6">
          <form onSubmit={buscarPorNombre} className="mb-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar por nombre"
                value={busquedaNombre}
                onChange={(e) => setBusquedaNombre(e.target.value)}
              />
              <button className="btn btn-outline-primary" type="submit">Buscar Nombre</button>
            </div>
          </form>
          {autorPorNombre && (
            <div className="alert alert-success">
              <strong>Autor encontrado:</strong><br />
              <b>Id:</b> {autorPorNombre.autorLibroId || autorPorNombre.id}<br />
              <b>GUID:</b> {autorPorNombre.autorLibroGuid || autorPorNombre.guid || ''}<br />
              <b>Nombre:</b> {autorPorNombre.nombre}<br />
              <b>Apellido:</b> {autorPorNombre.apellido}<br />
              <b>Fecha de Nacimiento:</b> {autorPorNombre.fechaNacimiento ? autorPorNombre.fechaNacimiento.split('T')[0] : ''}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AutorList;