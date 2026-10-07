import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Button,
    TextField,
    MenuItem,
    Select,
    FormControlLabel,
    Switch
} from '@mui/material'

import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import React, { useState } from 'react'

// Todo lo que yo pase como parámetro a la función de un componente se llama property
function JuegosForm({ onCreateJuego = () => {} }) {
    // Se define el arreglo de compañías
    const companias = [
        { label: "Sony", value: "sony" },
        { label: "Microsoft", value: "microsoft" },
        { label: "Nintendo", value: "nintendo" }
    ]

    // Todo elemento que yo defina como useState corresponde a una propiedad del estado del componente
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [compania, setCompania] = useState(companias[0].value);
    const [plataforma, setPlataforma] = useState('');
    const [fechaLanzamiento, setFechaLanzamiento] = useState(null);
    const [versionFisica, setVersionFisica] = useState(false);

    // Función para registrar el juego
    const handleClick = () => {
        // 1. Crear un objeto con los datos del juego
        const juego = {};
        juego.nombre = nombre;
        juego.descripcion = descripcion;
        juego.compania = compania;
        juego.plataforma = plataforma;
        juego.fechaLanzamiento = fechaLanzamiento;
        juego.versionFisica = versionFisica;

        // 2. Avisarle al container que se ha creado un nuevo juego
        onCreateJuego(juego);

        // 3. Limpiar el estado del componente
        // No se limpia directamente el formulario,
        // se limpia el estado y por eso los campos quedan vacíos
        setNombre("");
        setDescripcion("");
        setCompania(companias[0].value);
        setPlataforma("");
        setFechaLanzamiento(null);
        setVersionFisica(false);
    }

    return (
        <Card raised>
            {/* Header */}
            <CardHeader title="Registrar Juegos" />

            {/* Body */}
            <CardContent>
                <div className="mt-3">
                    <TextField
                        fullWidth
                        label="Nombre del Juego"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        variant="outlined"
                    />
                </div>

                <div className="mt-3">
                    <TextField
                        multiline
                        fullWidth
                        label="Descripción del Juego"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        variant="outlined"
                    />
                </div>

                <div className="mt-3">
                    {/* Cada una de las compañías se recorre con map y retorna un MenuItem */}
                    <Select
                        id="compania-juego"
                        label="Compañía del Juego"
                        fullWidth
                        value={compania}
                        onChange={(e) => setCompania(e.target.value)}
                        variant="outlined"
                    >
                        {companias.map((compania) => (
                            <MenuItem
                                value={compania.value}
                                key={compania.value}
                            >
                                {compania.label}
                            </MenuItem>
                        ))}
                    </Select>
                </div>

                <div className="mt-3">
                    <TextField
                        id="plataforma-juego"
                        label="Plataforma del Juego"
                        value={plataforma}
                        onChange={(e) => setPlataforma(e.target.value)}
                        fullWidth
                        variant="outlined"
                    />
                </div>

                <div className="mt-3">
                    <DatePicker
                        value={fechaLanzamiento}
                        onChange={(nuevaFecha) => setFechaLanzamiento(nuevaFecha)}
                        label="Fecha de Lanzamiento"
                        slotProps={{
                            textField: {
                                fullWidth: true
                            }
                        }}
                    />
                </div>

                {/* Versión física */}
                <div className="mt-3">
                    <FormControlLabel
                        label="¿Tiene versión física?"
                        labelPlacement="start"
                        control={
                            <Switch
                                checked={versionFisica}
                                onChange={(e) => setVersionFisica(e.target.checked)}
                            />
                        }
                    />
                </div>
            </CardContent>

            {/* Registrar Juego */}
            <CardActions>
                <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={handleClick}
                >
                    Registrar Juego
                </Button>
            </CardActions>
        </Card>
    )
}

export default JuegosForm