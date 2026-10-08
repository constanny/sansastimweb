import React, { useState } from 'react'
import JuegosForm from '../components/JuegosForm'
import JuegosView from '../components/JuegosView'

import {
    Snackbar,
    Alert
} from '@mui/material'

function JuegosContainer() {
    // juegos es una propiedad del estado del componente, y setJuegos es la función que permite modificar el valor de juegos
    const [juegos, setJuegos] = useState([]);
    const [registro, setRegistro] = useState(false);

    // TODO: Como no hemos visto manejo de estado global, por ahora vamos a generar una lista de juegos aquí
    
    const handleCreateJuego = (juego) => {
        // setJuegos modifica el valor de juegos, agregando los juegos anteriores y el nuevo juego
        setJuegos([...juegos, juego]);

        // Mostrar mensaje de registro exitoso
        setRegistro(true);
    };

    const handleDelete = (juego) => {
        // Aquí se elimina el juego de la lista
        const filtrada = juegos.filter((item) => {
            return item.nombre != juego?.nombre
        });

        setJuegos(filtrada);
    }

    return (
        <div>
            <div className='container mt-3'>
                <div className="row">
                    <div className="col-4">
                        <JuegosForm onCreateJuego={handleCreateJuego} />
                    </div>

                    <div className="col-8">
                        <JuegosView
                            juegos={juegos}
                            onQuitar={handleDelete}
                        />
                    </div>
                </div>
            </div>

            <Snackbar
                open={registro}
                autoHideDuration={6000}
                onClose={() => setRegistro(false)}
            >
                <Alert
                    onClose={() => setRegistro(false)}
                    severity="success"
                    sx={{ width: '100%' }}
                >
                    Juego registrado correctamente.
                </Alert>
            </Snackbar>
        </div>
    )
}

export default JuegosContainer