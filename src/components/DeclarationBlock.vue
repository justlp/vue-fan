<template lang="pug">
  div(:class="classes")
      component(v-if="hasComment")
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
  import Comment from './Comment'

  const blockCls = 'declaration-block'

  export default {
    components: { Property, Comment },
    name: 'declaration-block',
    props: {
      properties: {
        type: Array,
        required: true
      },
      hasComment: {
        type: Boolean,
        default: false
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
