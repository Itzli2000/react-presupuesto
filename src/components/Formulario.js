import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Error from './Error';

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);

        const gasto = {
            nombre,
            cantidad,
            id: uuidv4(),
        }

        guardarGasto(gasto);
        guardarCrearGasto(true);
        guardarNombre('');
        guardarCantidad(0);
    }


    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gasto aquí</h2>
            {
                error &&
                <Error
                    mensaje="Debes agregar todos los campos o Presupuesto incorrecto"
                />
            }
            <div className="campo">
                <label htmlFor="gasto"></label>
                <input
                    type="text"
                    className="u-full-width"
                    name="gasto"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor="cantidad"></label>
                <input
                    type="number"
                    className="u-full-width"
                    name="cantidad"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>
            <input
                type="submit"
                className="u-full-width button-primary"
                value="Agregar gasto"
            />
        </form>
    );
};

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired,
};

export default Formulario;