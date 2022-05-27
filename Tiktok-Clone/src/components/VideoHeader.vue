<script setup>
defineProps({
  channel: String,
  description: String,
  song: String,
  image: String,
});
</script>

<template>
  <div class="flex w-full justify-between">
    <div class="flex items-start space-x-4">
      <img
        :src="image"
        class="h-12 w-12 rounded-full"
        alt="UEFA Champions League"
      />
      <div>
        <b>UEFA Champions League</b>
        <p class="text-sm">Van Dijk’s reaction 🥶</p>
        <!-- song -->
        <div class="flex space-x-2 text-sm items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"
            />
          </svg>
          <p>{{ song }}</p>
        </div>
      </div>
    </div>

    <div>
      <button
        class="border-pink-600 border text-pink-600 px-6 font-bold rounded-sm hover:bg-pink-100"
      >
        Follow
      </button>
    </div>
  </div>
</template>
