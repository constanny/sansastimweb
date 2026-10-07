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
    Alert
} from '@mui/material'

import React from 'react'

function JuegosView({ juegos = [] }) {
// el ? en juegos?.length es un operador de encadenamiento opcional que permite acceder a la propiedad length de juegos solo si juegos no es null o undefined. Si juegos es null o undefined, el operador devuelve undefined en lugar de lanzar un error. Esto evita errores al intentar acceder a propiedades de objetos nulos o indefinidos.
    if(!juegos?.length) {
        return (
            <Alert severity="info">Debes ingresar al menos algún juego. </Alert>
        )
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {juegos.map((juego, index) => (
                            <TableRow key={index}>
                                <TableCell>{juego.nombre}</TableCell>
                                <TableCell>{juego.descripcion}</TableCell>
                                <TableCell>{juego.compania}</TableCell>
                                <TableCell>{juego.plataforma}</TableCell>
                                {/* para mostrar un valor booleano en la tabla, se puede usar un operador ternario para mostrar "Sí" o "No" según el valor de la propiedad */}
                                <TableCell>{juego.versionFisica ? 'Sí' : 'No'}</TableCell>
                                <TableCell>
                                    {/* Para mostrar la fecha de lanzamiento en un formato legible, se puede usar el método format de dayjs, que permite formatear la fecha según un patrón especificado. En este caso, se usa el patrón 'DD/MM/YYYY' para mostrar la fecha en formato día/mes/año. */}
                                    {juego.fechaLanzamiento
                                        ? juego.fechaLanzamiento.format('DD/MM/YYYY')
                                        : ''}
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