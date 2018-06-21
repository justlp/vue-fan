<template>
  <div class="index">

    todo:
    <ul>
      <li> split components on selector types <a href="https://www.sitepoint.com/css-selectors/">https://www.sitepoint.com/css-selectors/</a>. </li>
      <li> add component for CSS rule</li>
    </ul>

    attribute-selector:
    <attribute-selector></attribute-selector>

    <hr>

    comment:
    <comment></comment>

    <hr>

    property:
    <property></property>

    <hr>

    pseudoclass:
    <pseudo-class></pseudo-class>

    <hr>

    pseudoelement:
    <pseudo-element></pseudo-element>

    <hr>

    selector:
    <selector></selector>

    <hr>

    vendorprefix:
    <vendor-prefix></vendor-prefix>

    <hr>

    world:
    <word></word>

  </div>
</template>

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
    name: 'Index',
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
