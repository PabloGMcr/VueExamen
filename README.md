# miaplicacion

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---
## Reporte Ejercicios Vue

## Instalacion 

1. Comandos para levantar servidor
```
npm install
npm run server
```
* Estos comandos funcionan para levantar servidor si el entorno  node tiene instalado la 
ultima versionde Vue

* En node command prompt usar comando
~~~
npm install -g @vue/cli
~~~

## Ejercicio 1: Ruteo

1. Instalar libreria de rutas en proyecto 

~~~
npm i vue-router  
~~~

2. En src crear carpeta router.

3. Crear y configurar un archivo index.js.

* Crear un archivo index.js.

* Configura archivo index.js para que resiva las rutas
que estaban en el main.js.
 
~~~js

import { createWebHashHistory, createRouter } from "vue-router";

// Componentes

import MainC from "@/components/MainC.vue";
import FormC from "@/components/FormC.vue";
import FormC2 from "@/components/FormC2.vue";

const routes = [
  {
    path: "/",
    name: "MainC",
    component: MainC,
  },

  {
    path: "/form",
    name: "FormC",
    component: FormC,
  },

  {
    path: "/form2",
    name: "FormC2",
    component: FormC2,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
~~~

5. Ir al archivo main.js eliminar todas las rutas antiguas dejando en global el nuevo rauter de index.js

~~~js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

~~~

6. Ir al NavC.vue eliminar barra de navegacion antigua y colocar los nuevos paths. 

~~~html 

li class="nav-item">
            <router-link class="nav-link" to="/NUEVO PATH">FormC2</router-link>
          </li>
~~~

7. Ir al App.vue y poner el en template nueva etiqueta 

~~~vue
<template>

 <NavC></NavC>
 <router-view></router-view>
 
</template>
~~~

# Ejercicio dos: Reparar formulario  Api. 

1. Sustituir el `ng-for` por `v-for`
~~~html
 <h1> {{Form}} </h1>
        <div ng-for="item in datos" :key="item.id">
            {{item.name}}
        </div>
~~~

2. Sustituir el metodo `pos` por `get`

~~~js 
 Mostrarusuario(){
            axios.pos("https://jsonplaceholder.typicode.com/users")
           //...
            }
~~~

3. Sustituir`AudioWorklet` por `mounted` para inicializar `Mostrarusuario`
~~~js

AudioWorklet(){
    this.Mostrarusuario()
    },
~~~

4. Crear variable vacia para `datos`

~~~js
data() {
    return {
      datos: [],
    };
  },
~~~

## Estilos y cambios generales del ejercicio 😀

1. Uso de bootstrap. 

2. Margenes y centrados en todos los componetes 

3. Tabla con columna nombre y sombreado
~~~css

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
~~~

4. Se agrega Footer 

5. Se cambia color de barra de navegacion
