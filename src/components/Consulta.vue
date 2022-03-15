<template>
  <h1>Listado de estudiantes</h1>
  <button @click="loadEstudiantes">Consultar</button>
  <button @click="limpiarLista">Limpiar</button>
  <div class="contenedor-estudiantes">
    <h2>Listado de Estudiantes:</h2>
    <ul v-if="estudianteArray">
      <li v-for="e in estudianteArray" :key="e.id">
        Nombre: {{ e.nombre }} 
        Apellido: {{ e.apellido }} 
        Edad: {{ e.edad }} 
        Fecha de Nacimiento: {{ e.fechaNacimiento }} 
        Genero: {{ e.genero }} 
        Estado Civil: {{ e.estadoCivil }}
      </li>
    </ul>
  </div>
</template>

<script>
import obtenerEstudiantes from "../js/ConsultarApi";

export default {
  data() {
    return {
      estudianteArray: [],
    };
  },

  methods: {
    async loadEstudiantes() {
      this.estudianteArray = await obtenerEstudiantes();
      console.log(this.estudianteArray);
      this.estudianteArray.forEach((e) => console.log(e));
    },
    limpiarLista() {
      this.estudianteArray = [];
    },
  },
};
</script>



<style>
li:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.contenedor-estudiantes {
  display: flex;
  justify-content: center;
}

li {
  border: 1px solid;
  border-radius: 20px;
  background-color: white;
  margin-bottom: 5px;
  cursor: pointer;
}
ul {
  list-style-type: none;
}
</style>