<template >
    <div class="FormC2 p-5 m-5">
        <h1 class="mt-4">Ejercicio Vue</h1>
        <h2 class="m-3"> Formulario de Alta  </h2>

        <form class="" @submit.prevent="mostrarusuario()">
            <input  class="m-3" type="text" placeholder="Nombre"   v-model="user.nombre" >
            <input class="m-3" type="text" placeholder="Apellido" v-model="user.apellido" >
            <input class="m-3" type="submit" value="Enviar" >
        </form>
    </div>

    <div>
   {{user.nombre}}     

   {{user.apellido}}  
   </div>
</template>
<script>
export default {
    
    name: "FormC2",
    data(){

        return {
           
           user:{
               nombre: '',
               apellido: ''
           }
        }
    },
    methods :{

        mostrarusuario(){
            
            console.log("Hola formulario")
            console.log(this.user)
        }
    }
}
</script>
<style lang="">
    
</style>