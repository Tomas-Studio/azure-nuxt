<template>
  <div v-for="item of data" :key="item.name">
    <div>{{ item.name }}</div>
    <div>{{ item.age }}</div>
  </div>
  <pre>
    {{ data }}
  </pre>
</template>

<script setup lang="ts">
const { data } = useFetch('/api/users')
</script>