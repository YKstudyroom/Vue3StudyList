<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <header>
      <nav>
        <RouterLink to="/List3-2">List3-2</RouterLink>
        <RouterLink to="/List3-3">List3-3</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}

header {
  width: 200px; /* 固定幅に変更 */
  background-color: #f8f8f8;
  padding: 1rem;
  position: fixed; /* 左端に固定 */
  left: 0;
  top: 0;
  bottom: 0;
}

nav {
  font-size: 14px;
  text-align: left;
}

nav a {
  display: block;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--color-border);
}

nav a:first-of-type {
  border-top: 1px solid var(--color-border);
}

main {
  flex-grow: 1;
  padding: 2rem;
  overflow-y: auto;
  margin-left: 200px; /* ヘッダーの幅分だけ右にずらす */
  width: calc(100% - 200px); /* ヘッダーを除いた幅を確保 */
  height: 100vh; /* 全画面表示 */
  box-sizing: border-box; /* paddingを含めたサイズ調整 */
}
</style>
