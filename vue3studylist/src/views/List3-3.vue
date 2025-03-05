<script setup lang="ts">
import { ref } from 'vue'

const name = ref('田中太郎')

import VCodeBlock from '@wdns/vue-code-block'
const code = ref(`import { ref } from 'vue'

const name = ref('田中太郎')
`)
</script>

<template>
  <p>例２</p>
  <VCodeBlock :code="code" highlightjs label="リスト3-3" lang="javascript" theme="neon-bunny" />
  <h1>こんにちは！{{ name }}さん！</h1>
</template>

<style lang="css">
pre {
  margin: 1em 0;
  padding: 1em;
  border-radius: 5px;
  background: #25292f;
  color: #fff;
  overflow-x: auto; /* ⭐ */
  -webkit-overflow-scrolling: touch; /* ⭐ */
}
</style>
