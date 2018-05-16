<template>
  <div id="app">
    <div class="ui top attached inverted menu">
        <router-link :to="{ name: 'arbreliste', params: {} }" class="item">Liste des arbres</router-link>
        <router-link :to="{ name: 'arbre-view', params: {id: 0} }" class="item">Arbre sélectionné</router-link>
    </div>
    <div class="ui attached segment">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
</style>
