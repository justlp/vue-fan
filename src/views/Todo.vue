<template lang="pug">
  .todo
    a(href="https://stylelint.io/demo/" target="_blank") demo

    | todo:

    ul
      li split components on selector types
        a(href="https://www.sitepoint.com/css-selectors/" target="_blank") https://www.sitepoint.com/css-selectors/
      li add component for CSS rule

    | attribute-selector:
    attribute-selector

    hr

    | comment:
    comment

    hr

    | property:
    property

    hr

    | pseudoclass:
    pseudo-class

    hr

    | pseudoelement:
    pseudo-element

    hr

    | selector:
    selector

    hr

    | vendorprefix:
    vendor-prefix

    hr

    | world:
    word
</template>

<style lang="scss">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

<script>
  import AttributeSelector from '../components/AttributeSelector'
  import Comment from '../components/Comment'
  import Property from '../components/Property'
  import PseudoClass from '../components/PseudoClass'
  import PseudoElement from '../components/PseudoElement'
  import Selector from '../components/Selector'
  import VendorPrefix from '../components/VendorPrefix'
  import Word from '../components/Word'

  export default {
    name: 'Todo',
    components: {
      AttributeSelector,
      Comment,
      Property,
      PseudoClass,
      PseudoElement,
      Selector,
      VendorPrefix,
      Word
    }
  }
</script>
