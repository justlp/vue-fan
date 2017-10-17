<tempate>
    <span class="selector">{{ name }}</span>
</tempate>

<script>
    export default {
      name: 'selector',
      data: function () {
        return {
          name: '.foo'
        }
      }
    }
</script>

<style scoped></style>