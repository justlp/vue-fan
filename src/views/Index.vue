<template lang="pug">
  .index
    el-container
      el-header Header
      el-main
        el-row(type="flex", justify="middle", align="middle")
          el-col(:span="12")
            code-snippet(language="css", type="info")
              css-rule
                template(slot="selector") a
                template(slot="declaration-block")
                  declaration-block(:properties="cssProperties")

                  | if comment-no-empty = true

                  el-radio-group(v-model="commentNoEmpty", v-on:change="changingCssPropertiesHandle")
                    el-radio-button(label="true")
                    el-radio-button(label="false")


                  template(v-if="commentNoEmpty === 'true'")
                    el-alert(title="good", type="success", :closable="false")
                      comment(message=" comment ")
                      | or
                      comment(message="\n * Multi-line \Comment \n *")
                    el-alert(title="bad", type="error", :closable="false")
                      comment
                      | or
                      comment(message=" ")
                      | or
                      comment(message="\n \n")
                  template(v-else)
                    el-alert(title="good", type="success", :closable="false")
                      comment(message=" comment ")
                      | or
                      comment(message="\n * Multi-line \Comment \n *")
                      comment
                      | or
                      comment(message=" ")
                      | or
                      comment(message="\n \n")


          el-col(:span="12")
            el-button(@click="changingCssPropertiesHandle") Reverse

</template>

<style lang="scss">

</style>

<script>
  import Comment from '../components/Comment.vue'
  import CodeSnippet from '../components/CodeSnippet.vue'
  import CssRule from '../components/CssRule'
  import DeclarationBlock from '../components/DeclarationBlock'

  export default {
    name: 'Index',
    components: {
      Comment,
      CodeSnippet,
      CssRule,
      DeclarationBlock
    },
    data: function () {
      return {
        commentNoEmpty: 'false',
        cssProperties: [
          {
            name: 'color',
            value: 'red',
            indentBetweenColon: 1
          },
          {
            name: 'background-color',
            value: 'green',
            isImportant: true
          }
        ]
      }
    },
    methods: {
      changingCssPropertiesHandle (e) {
        console.log(this.commentNoEmpty, 'ss')
      }
    }
  }
</script>
