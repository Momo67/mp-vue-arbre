<template lang="html">
  <div class="arbre-view">
    <arbre
      :id="Number(this.myid)"
      :src="src"
    ></arbre>
  </div>
</template>

<script>
import {OBJ_URL_AJAX} from '../config'
import Arbre from './Arbre'

export default {
  name: 'arbre-view',
  components: {
    Arbre
  },
  props: ['id'],
  data () {
    return {
      src: `${OBJ_URL_AJAX}/arbre_data.php`
    }
  }
}
</script>

<style lang="css">
</style>
