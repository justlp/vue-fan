<template lang="pug">
  div(:class="classes")
      property(v-for="(property, index) in properties",
        :key="index",
        :name="property.name",
        :hasDoubleSlashComment="property.hasDoubleSlashComment",
        :value="property.value",
        :isImportant="property.isImportant",
        :isSemicolon="property.isSemicolon",
        :indent="property.indent",
        :indentBetweenColon="property.indentBetweenColon")
</template>

<script>
  import Property from './Property'

  const blockCls = 'declaration-block'

  export default {
    components: { Property },
    name: 'declaration-block',
    component: {
      Property
    },
    props: {
      properties: {
        type: Array,
        required: true
      }
    },
    computed: {
      classes () {
        return [
          `${blockCls}`
        ]
      }
    }
  }
</script>

<style lang="scss">
  .declaration-block {

    .property {
      display: block;
    }
  }
</style>
