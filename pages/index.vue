<template>
  <pre>
    {{ data }}
  </pre>
</template>

<script setup lang="ts">
const { data } = useFetch('/api/users')
</script>