<script setup lang="ts">
import VCodeBlock from '@wdns/vue-code-block'
import { ref } from 'vue'

const code3_2 = ref(`
  import { ref } from "vue"
  const name = ref("田中太郎");
`)



</script>

<template>
  <div>
    <h1></h1>
    <VCodeBlock :code="code3_2" highlightjs label="リスト3-2" lang="javascript" theme="neon-bunny" />
    
  
  
  
  </div>

</template>
