<script setup></script>

<template>
  <div class="border-b w-full">
    <header class="h-16 py-6 flex bg-white items-center mx-60 justify-between">
      <!-- logo -->
      <img src="../assets/logo.png" alt="avatar" class="h-8 w-34" />
      <!-- search input -->
      <div class="relative flex items-center rounded-3xl w-96 h-12 bg-gray-100">
        <div class="h-3/5 border-r w-80">
          <input
            type="text"
            class="px-6 rounded-bl-3xl w-full h-full focus:outline-none rounded-tl-3xl bg-gray-100"
            placeholder="Search accounts and videos "
          />
        </div>
        <button class="h-6 w-6 absolute top-3 right-5">
          <svg
            class="h-full w-full text-gray-400"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>
      <!-- navbar -->
      <div>
        <ul class="flex">
          <li class="mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </li>
          <li class="mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </li>
          <li class="mr-6">
            <img
              class="h-7 w-7 rounded-full"
              src="../assets/user.jpg"
              alt="haddad zineddine"
            />
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>
