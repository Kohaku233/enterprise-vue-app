<script setup lang="ts">
// import { ref } from 'vue'

defineProps<{ msg: string }>()
</script>

<template>
  <h1 class="animate__animated animate__fadeIn">
    {{ msg }}
  </h1>
  <h2>
    Whereas the recognition of the inherent dignity and the equal and
    inalienable rights of all members of the human family is the foundation of
    Freedom, Justice and peace in the world
  </h2>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <p>
    各部位を正確に作るには時間がかかるので、当初の意図とは異なるが、巨大な人体を作ることにした。高さは約
    8
    フィートで、これに釣り合う体格だ。これを決断し、数か月にわたって材料を集め整理した後、作業を開始した。
  </p>
</template>

<style scoped>
.animate__animated.animate__fadeIn {
  --animate-duration: 4s;
}
h1 {
  font-family: 'Noto Serif TC', serif;
  font-weight: 900;
}
h2 {
  font-family: 'Zen Antique', serif;
  font-weight: 700;
}
p {
  font-family: 'Zen Antique', serif;
}
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  font-family: 'Zen Antique', serif;

  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
