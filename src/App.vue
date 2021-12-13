<template>
  <div>
    <header class="absolute h-28 md:h-40 w-full bg-transparent">
      <div class="h-full lg:py-6 mx-auto w-full px-6 md:px-0 md:w-11/12">
        <a href="https://stakenet.io" target="_blank" rel="noopener noreferrer">
          <div class="flex items-center h-full">
            <img
              src="/socials/stakenetofficial.png"
              alt="link to xsn official website"
              class="w-80"
            />
          </div>
        </a>
      </div>
    </header>
    <main class="flex-grow">
      <router-view />
    </main>
  </div>
</template>
