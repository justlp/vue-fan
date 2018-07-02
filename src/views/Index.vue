<template lang="pug">
  .index
    el-container
      el-header Header
      el-main
        el-row(type="flex", justify="middle", align="middle")
          el-col(:span="24")
            el-tabs(tab-position="left")
              el-tab-pane(label="comment-no-empty")
                h3 comment-no-empty
                comment-no-empty

              el-tab-pane(label="no-invalid-doubles-slash-comments")
                h3 no-invalid-doubles-slash-comments
                no-invalid-doubles-slash-comments

            el-alert(title="good", type="success", :closable="false")
              css-rule
                template(slot="selector") a
                template(slot="declaration-block")
                  comment
                    declaration-block(:properties="cssProperties")
              | or

              comment
                css-rule
                  template(slot="selector") a
                  template(slot="declaration-block")
                    declaration-block(:properties="cssProperties")

            el-alert(:title="noInvalidDoubleSlashComments ? 'bad' : 'good' ", :type="noInvalidDoubleSlashComments ? 'error' : 'success'", :closable="false")
              css-rule
                template(slot="selector") a
                template(slot="declaration-block")
                  | //
                  declaration-block(:properties="cssProperties")
              | or

              css-rule
                | //
                template(slot="selector") a
                template(slot="declaration-block")
                  declaration-block(:properties="cssProperties")

            | Limit language features
            | Comment
            | comment-word-blacklist:

            el-radio-group(v-model="commentWordBlacklist")
              el-radio-button(label="1") ["foo", "bar"]
              el-radio-button(label="2") ["/^TODO:/"]
              el-radio-button(label="3") "foo"
              el-radio-button(label="4") "/^TODO:/"
              el-radio-button(:label="false")

            | {{ commentWordBlacklist  }}

            el-alert(title="good", type="success", :closable="false")
              comment comment
              comment tODO: comment

            el-alert(
            :title="commentWordBlacklist === '1' || commentWordBlacklist === '3' ? 'bad' : 'good' ",
            :type="commentWordBlacklist === '1' || commentWordBlacklist === '3' ? 'error' : 'success'",
            :closable="false"
            )
              comment comment foo bar

            el-alert(
            :title="commentWordBlacklist === '2' || commentWordBlacklist === '4' ? 'bad' : 'good' ",
            :type="commentWordBlacklist  === '2' || commentWordBlacklist === '4' ? 'error' : 'success'",
            :closable="false"
            )
              comment TODO: comment

            | Stylistic issues
            | Comment
            | comment-empty-line-before:

            el-radio-group(v-model="commentEmptyLineBefore.option")
              el-radio-button(label="always")
              el-radio-button(label="never")

            el-checkbox-group(v-model="commentEmptyLineBefore.secondaryOptions")
              el-checkbox-button(label="except.first-nested")
              el-checkbox-button(label="ignore.after-comment")
              el-checkbox-button(label="ignore.stylelint-commands")

            el-alert(
            :title="commentEmptyLineBefore.option === 'always' || commentEmptyLineBefore.option === 'never' ? 'good' : 'bad'",
            :type="commentEmptyLineBefore.option === 'always' || commentEmptyLineBefore.option === 'never' ? 'success': 'error'",
            :closable="false"
            )
              css-rule(style="display:inline-block;")
                template(slot="selector") a
              comment(style="display:inline-block;")

            el-alert(
            :title="commentEmptyLineBefore.option === 'always' ? 'good' : 'bad'",
            :type="commentEmptyLineBefore.option === 'always' ? 'success': 'error'",
            :closable="false"
            )
              css-rule
                template(slot="selector") a
              br
              comment

            el-alert(
            :title="commentEmptyLineBefore.option === 'never' ? 'good' : 'bad'",
            :type="commentEmptyLineBefore.option === 'never' ? 'success': 'error'",
            :closable="false"
            )
              css-rule
                template(slot="selector") a
              comment


            el-alert(
            :title="commentEmptyLineBefore.secondaryOptions.indexOf('except.first-nested') !== -1 ? 'bad' : 'good'",
            :type="commentEmptyLineBefore.secondaryOptions.indexOf('except.first-nested') !== -1 ? 'error' : 'success'"
            )
              css-rule
                template(slot="selector") a
                template(slot="declaration-block")
                  div(v-if="commentEmptyLineBefore.secondaryOptions.indexOf('except.first-nested') !== -1", style="background: red;") s
                  comment
                  declaration-block(:properties="cssProperties")

            el-alert(
            :title="commentEmptyLineBefore.option === 'always' && commentEmptyLineBefore.secondaryOptions.indexOf('ignore.after-comment') !== -1 ? 'good' : 'bad'",
            :type="commentEmptyLineBefore.option === 'always' && commentEmptyLineBefore.secondaryOptions.indexOf('ignore.after-comment') !== -1 ? 'success': 'error'",
            :closable="false"
            )
              css-rule
                template(slot="selector") a
              br
              comment
              comment

            el-alert(
            :title="commentEmptyLineBefore.option === 'never' && commentEmptyLineBefore.secondaryOptions.indexOf('ignore.after-comment') !== -1 ? 'good' : 'bad'",
            :type="commentEmptyLineBefore.option === 'never' && commentEmptyLineBefore.secondaryOptions.indexOf('ignore.after-comment') !== -1 ? 'success': 'error'",
            :closable="false"
            )
              css-rule
                template(slot="selector") a
              comment

            el-alert(
            :title="commentEmptyLineBefore.option === 'always' && commentEmptyLineBefore.secondaryOptions.indexOf('ignore.stylelint-commands') !== -1 ? 'good' : 'bad'",
            :type="commentEmptyLineBefore.option === 'always' && commentEmptyLineBefore.secondaryOptions.indexOf('ignore.stylelint-commands') !== -1 ? 'success' : 'error'",
            :closable="false"
            )
              css-rule
                template(slot="selector") a
                template(slot="declaration-block")
                  comment stylelint-disable line
                  declaration-block(:properties="cssProperties")

            el-alert(
            :title="commentEmptyLineBefore.option === 'never' && commentEmptyLineBefore.secondaryOptions.indexOf('ignore.stylelint-commands') !== -1 ? 'good' : 'bad'",
            :type="commentEmptyLineBefore.option === 'never' && commentEmptyLineBefore.secondaryOptions.indexOf('ignore.stylelint-commands') !== -1 ? 'success' : 'error'",
            :closable="false"
            )
              css-rule
                template(slot="selector") a
                template(slot="declaration-block")
                  div Space
                  comment stylelint-disable line
                  declaration-block(:properties="cssProperties")

</template>

<style lang="scss">

</style>

<script>
  import Comment from '../components/Comment.vue'
  import CodeSnippet from '../components/CodeSnippet.vue'
  import CssRule from '../components/CssRule'
  import DeclarationBlock from '../components/DeclarationBlock.vue'
  import CommentNoEmpty from '../components/rule-comment/CommentNoEmpty.vue'
  import NoInvalidDoublesSlashComments from '../components/rule-comment/NoInvalidDoublesSlashComments'

  export default {
    name: 'Index',
    components: {
      CommentNoEmpty,
      NoInvalidDoublesSlashComments,
      Comment,
      CodeSnippet,
      CssRule,
      DeclarationBlock
    },
    data: function () {
      return {
        commentNoEmpty: false,
        noInvalidDoubleSlashComments: false,
        commentWordBlacklist: false,
        commentEmptyLineBefore: {
          option: 'never',
          secondaryOptions: []
        },
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
      handleChangingCssProperties (e) {

      }
    }
  }
</script>
