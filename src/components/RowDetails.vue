<template lang="html">
  <div class="row-details" @onclick="onClick">
    <div class="inline field">
      <label>IdObjet: </label>
      <span>{{rowData.IdThing}}</span>
    </div>
    <div class="inline field">
      <label>Nom: </label>
      <span>{{rowData.Name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'row-details',
  props: {
    rowData: {
      type: Object,
      required: true
    },
    rowIndex: {
      type: Number
    }
  },
  methods: {
    onClick (event) {
      console.log('row-details', event.target)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
