<script setup>
defineProps({
  name: String,
  username: String,
  image: String,
});
</script>

<template>
  <div class="flex items-center mb-4">
    <img
      :src="image"
      :alt="username"
      class="h-10 w-10 rounded-full"
    />
    <div class="flex flex-col ml-4">
      <b>{{ username }}</b>
      <p class="text-sm">{{ name }}</p>
    </div>
  </div>
</template>
