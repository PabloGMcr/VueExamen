<template>
  <div class="FormC p-2">
    <h1>Ejercicio Vue</h1>
    <h2>{{ Form }}</h2>
   
  </div>

  <div class="container ">
    <table class="table-striped">
      <thead class="thead">
        <tr>
          <th>Nombre</th>
         
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in datos" :key="item.id">
          <td>{{ item.name }}</td>
         
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "FormC",
  data() {
    return {
      Form: "Formulario",
      datos: [],
    };
  },
  mounted() {
    this.Mostrarusuario();
  },
  methods: {
    Mostrarusuario() {
      axios.get("https://jsonplaceholder.typicode.com/users").then((resp) => {
        console.log(resp.data);
        this.datos = resp.data;
        console.log(this.datos);
      });
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.thead {
  background: #0a3143;
  color: #fff;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  margin-top: 2%;
  padding: 0;
}
.table {
  padding: 0;
  margin: 0;
}
.FormC{
    text-align: center;
    margin-top: 10%;
    margin-right: 17%;
}
</style>