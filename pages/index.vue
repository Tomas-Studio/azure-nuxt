<template>
  <div v-for="item of data" :key="item.name" class="p3 border border-blue-500">
    <div>{{ item.name }}</div>
    <div>{{ item.age }}</div>
  </div>
  <pre>
    {{ data }}
  </pre>
  <pre>
    {{ axo }}
  </pre>
</template>

<script setup lang="ts">
const { data } = useFetch('/api/users')

const { data: axo } = useFetch('https://api.publicapis.org/entries')
</script>