<script setup lang="ts">
import VCodeBlock from '@wdns/vue-code-block'

// sample
import { ref } from 'vue'
const name = ref('田中太郎')

// typescriptの内容（codeBlocke用）
const codeScript = ref(`import { ref } from 'vue'

const now = new Date();
const nowStr = now.toLocalTimeString();
let timeStr = nowStr;
const timeStrRef = ref(nowStr);

function changeTime(): void {
    const newTime = new Date();
    const newTimeStr = newTime.toLocalTimeString();
    timeStrRef.value = newTimeStr;
}
setInterval(changeTime, 1000);
`)

// htmlの内容（codeBlocke用）
const codeTemplate = ref(`<p1>現在時刻: {{timeStr}}</p1>
<p1>現在時刻(ref): {{timeStr}}</p1>
`)
</script>

<template>
<div>
  <h1>リスト3-2</h1>
  <VCodeBlock :code="codeScript" highlightjs label="App.vue-script" lang="javascript" theme="neon-bunny" />
  <VCodeBlock :code="codeTemplate" highlightjs label="App.vue-template" lang="html" theme="neon-bunny" />
</div>
</template>

<style lang="css">
.retro-game-window{
  background-color: #00000033;
  box-shadow: 0 0 0 4px #000000 inset, 0 0 0 8px #ffffff inset;
  box-sizing: border-box;
  padding: 16px;
  margin: 16px 0; /* 上下の余白のみ設定し、左端に寄せる */

  width: 100%; /* 画面サイズいっぱいに */
  min-height: 96px; /* 最小の高さを指定 */
  color: #000000;
}
</style>
