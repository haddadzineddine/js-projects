<script setup></script>

<template>
  <div class="flex items-center mb-4">
    <div>
      <slot name="icon"></slot>
    </div>
    <div class="ml-8 text-lg">
      <slot />
    </div>
  </div>
</template>
