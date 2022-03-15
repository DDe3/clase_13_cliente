const obtenerEstudiantes = async () => {
    const estudiantes = await getEstudiantes()
    return estudiantes
}

const getEstudiantes = async () => {
    const estudiantes = await fetch(`http://localhost:8081/ApiEstudiantes/V1/estudiantes/all/`).then(res => res.json())
    return estudiantes
}


export default obtenerEstudiantes