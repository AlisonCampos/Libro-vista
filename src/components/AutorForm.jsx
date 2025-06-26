import React, { useState } from 'react';
import { createAutor } from '../services/autorService';

const AutorForm = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const nuevoAutor = { nombre, apellido, fechaNacimiento };

        try {
            await createAutor(nuevoAutor);
            setNombre('');
            setApellido('');
            setFechaNacimiento('');
            alert('Autor creado exitosamente');
        } catch (error) {
            alert('Error al crear el autor');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card mx-auto" style={{maxWidth: 500}}>
            <div className="card-body">
                <h3 className="card-title mb-4 text-center">Crear Nuevo Autor</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={nombre} 
                            onChange={(e) => setNombre(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellido</label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={apellido} 
                            onChange={(e) => setApellido(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Fecha de Nacimiento</label>
                        <input 
                            type="date" 
                            className="form-control"
                            value={fechaNacimiento} 
                            onChange={(e) => setFechaNacimiento(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                        {loading ? 'Creando...' : 'Crear Autor'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AutorForm;