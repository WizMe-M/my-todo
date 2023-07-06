<script setup>
defineProps({
  item: {
    type: String,
    required: true,
  }
});
defineEmits(['remove']);
</script>

<template>
  <div>
    <span>{{ item }}</span>
    <button @click="$emit('remove')">-</button>
  </div>
</template>

<style scoped>

</style>