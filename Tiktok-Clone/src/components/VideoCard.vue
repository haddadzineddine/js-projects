<script setup>
import VideoHeader from "./VideoHeader.vue";

defineProps({
  channel: String,
  description: String,
  song: String,
  url: String,
  image: String,
});
</script>

<template>
  <div>
    <VideoHeader
      :channel="channel"
      :description="description"
      :song="song"
      :image="image"
    />

    <div class="flex items-end space-x-4">
      <video
        width="300"
        height="500"
        class="ml-16 mt-4 rounded-xl"
        controls
        :src="url"
      ></video>
      <div class="space-y-4 mb-4 flex flex-col justify-center items-center">
        <div class="rounded-full bg-gray-200 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <b class="text-sm text-gray-600"> 534.1k </b>
        <div class="rounded-full bg-gray-200 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <b class="text-sm text-gray-600"> 2262 </b>
        <div class="rounded-full bg-gray-200 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
            />
          </svg>
        </div>
        <b class="text-sm text-gray-600"> 2565 </b>
      </div>
    </div>
  </div>
</template>
