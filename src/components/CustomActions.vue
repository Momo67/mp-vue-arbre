<template lang="html">
  <div class="custom-actions">
    <button class="ui basic button" @click="itemAction('view-item', rowData, rowIndex)">
      <i class="zoom icon"></i>
    </button>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'custiom-actions',
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
    itemAction (action, data, index) {
      router.push({name: 'arbre-view', params: {id: data.IdThing}})
    }
  }
}
</script>

<style lang="css" scoped>
  .custom-actions button.ui.button {
    padding: 8px, 8px;
  }
  .custom-actions button.ui.button > i.icon {
    margin: auto !important;
  }
</style>
