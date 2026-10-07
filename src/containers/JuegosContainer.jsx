import React from 'react'
import JuegosForm from '../components/JuegosForm'

function JuegosContainer() {
    
    const handleCreateJuego = (juego) => {
        console.log("Nuevo juego creado:", juego);
        // Aquí puedes agregar la lógica para enviar el juego al backend o actualizar el estado
    }

    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col-4">
                        <JuegosForm onCreateJuego={handleCreateJuego} />
                    </div>
                    <div className="col-4">
                        <h1>Aquí va la tabla</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default JuegosContainer