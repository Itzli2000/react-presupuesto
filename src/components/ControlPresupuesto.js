import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { revisarPresupuesto } from '../helpers';

const ControlPresupuesto = ({ presupesto, restante }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {presupesto}
            </div>
            <div className={revisarPresupuesto(presupesto, restante)}>
                Restante: $ {restante}
            </div>
        </Fragment>
    );
};

ControlPresupuesto.propTypes = {
    presupesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired,
};

export default ControlPresupuesto;