<temlate>
    <!--<span class="vendor-prefix">{{ getBrowserPrefix }}</span>-->
</temlate>

<script>
//  'pseudo-element': {
//  extends: vendorPrefix,
//      data: function () {
//      return {
//        name: 'after',
//        isSingleNotation: true,
//        vendorPrefix: 'hz' // todo: get getBrowserPrefix from vendor-prefix component
//      }
//    },
//    template: '<span class="pseudo-element" >{{getBrowserPrefix}}' +
//    '<span class="pseudo-element__single-notation" v-if="isSingleNotation">:</span>' +
//    '<span class="pseudo-element__single-notation" v-else>::</span>' +
//    '<span class="pseudo-element__name">{{ name }}</span>' +
//    '</span>'
//  }
//    export default {
//      data: function () {
//        return {
//          browser: 'chrome'
//        }
//      },
//      computed: {
//        getBrowserPrefix: function () {
//          var prefixList = {
//            chrome: '-webkit-',
//            firefox: '-moz-',
//            ie: {
//              colon: '::',
//              standard: '-ms-'
//            },
//            opera: '-o-',
//            default: 'def'
//          };
//          if (typeof this.browser !== 'string' && this.browser.name && this.browser.name === 'ie') {
//            if (this.isColon) {
//              return prefixList.ie.colon
//            } else {
//              return prefixList.ie.standard
//            }
//          }
//          return typeof prefixList[this.browser] !== 'undefined' ? prefixList[this.browser] : prefixList.default
//        }
//      }
//    }
</script>

<style scoped></style>