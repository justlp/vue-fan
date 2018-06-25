<template lang="pug">
    span.property
      span.property__indent
      span.property__name {{ name }}
      mark(class="mark", v-if="indentBetweenColon", :style="indentBetweenColonStyles") &nbsp;
      span.property__colon :
      mark(class="mark", v-if="indentBetweenColon", :style="indentBetweenColonStyles") &nbsp;
      span.property__value {{ value }}
      span(class="property__important", v-if="isImportant") !important
      span(class="property__semicolon", v-if="isSemicolon") ;
    </span>
</template>

<script>
  export default {
    name: 'property',
    props: {
      name: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      isImportant: {
        type: Boolean,
        default: false
      },
      isSemicolon: {
        type: Boolean,
        default: true
      },
      indent: {
        type: Number,
        default: 2
      },
      indentBetweenColon: {
        type: Number,
        default: 0
      }
    },
    data: function () {
      return {}
    },
    computed: {
      indentBetweenColonStyles () {
        return {
          width: `${this.indentBetweenColon}px`
        }
      }
    },
    methods: {
      transformedCssProperties (settings) {
        return this.properties.map((property) => {
          return property
        })
      }
    }
  }
</script>

<style scoped>
  span {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }
</style>
