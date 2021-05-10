<template>
  <div class="helloWorld">HelloWorld</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {}
</script>

<style scoped lang="scss">
.helloWorld {
  color: #45e677;
  font-weight: bold;
  font-size: 45px;
}
</style>
