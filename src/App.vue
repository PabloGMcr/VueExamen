<template>

 <NavC></NavC>
 
 <router-view></router-view>
 <FooterC></FooterC>
 
</template>


<script>
import NavC from './components/NavC.vue'
import FooterC from './components/FooterC.vue';

export default {
  name: 'App',
  components: {
    NavC,
    FooterC
   
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
