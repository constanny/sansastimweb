import {
    Card,
    CardHeader,
    CardContent,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableContainer,
    Alert,
    Button
} from '@mui/material'

import React from 'react'

function JuegosView({ juegos = [], onQuitar = null }) {
    // el ? en juegos?.length es un operador de encadenamiento opcional que permite acceder a la propiedad length de juegos solo si juegos no es null o undefined.
    if (!juegos?.length) {
        return (
            <Alert severity="info">Debes ingresar al menos algún juego.</Alert>
        )
    }

    const handleQuitar = (juego) => {
        onQuitar(juego);
    }

    return (
        <Card>
            <CardHeader title="Lista de Juegos" />

            <CardContent>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Descripción</TableCell>
                                <TableCell>Compañía</TableCell>
                                <TableCell>Plataforma</TableCell>
                                <TableCell>Versión Física</TableCell>
                                <TableCell>Fecha de Lanzamiento</TableCell>
                                <TableCell>Acciones</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {juegos.map((juego, index) => (
                                <TableRow key={index}>
                                    <TableCell>{juego.nombre}</TableCell>
                                    <TableCell>{juego.descripcion}</TableCell>
                                    <TableCell>{juego.compania}</TableCell>
                                    <TableCell>{juego.plataforma}</TableCell>

                                    <TableCell>
                                        {juego.versionFisica ? 'Sí' : 'No'}
                                    </TableCell>

                                    <TableCell>
                                        {juego.fechaLanzamiento
                                            ? juego.fechaLanzamiento.format('DD/MM/YYYY')
                                            : ''}
                                    </TableCell>

                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => handleQuitar(juego)}
                                        >
                                            Quitar Juego
                                        </Button>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
}

export default JuegosView