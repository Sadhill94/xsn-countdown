<script setup>
const socials = [
  {
    name: 'Discord',
    url: 'https://discord.gg/cyF5yCA',
    cssClass: 'w-28 h-28 lg:w-24 lg:h-24',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/stakenetofficial',
    cssClass: 'w-24 h-24 lg:w-20 lg:h-20',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/XSNofficial',
    cssClass: 'w-24 h-24 lg:w-20 lg:h-20',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/stakenet',
    cssClass: 'w-32 h-32 lg:w-28 lg:h-28',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/StakenetOfficial',
    cssClass: 'w-24 h-24 lg:w-20 lg:h-20',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/stakenetofficial',
    cssClass: 'w-24 h-24 lg:w-20 lg:h-20',
  },
  {
    name: 'Stakenet official',
    url: 'https://stakenet.io',
    cssClass: 'w-4/5 lg:w-full',
  },
  {
    name: 'Stakenet community',
    url: 'https://stakenet.net',
    cssClass: 'w-4/5 lg:w-full',
  },
]
</script>

<template>
  <h3 class="mb-4 md:mb-6 pl-6">REACH OUT</h3>
  <section class="flex flex-row flex-wrap items-center justify-center w-full">
    <div
      v-for="social in socials"
      :key="social.name"
      class="w-full md:w-1/2 xl:w-1/4 xxl:w-3/12 p-6 md:p-10 xl:p-6 xxl:p-12"
    >
      <a :href="social.url" target="_blank" rel="noreferrer noopener">
        <div
          class="social-card w-full p-12 bg-secondary rounded-lg text-center relative shadow-xl"
        >
          <img
            :src="`/socials/${social.name
              .toLowerCase()
              .replace(/\s/g, '')}.png`"
            :alt="`${social.name} social link`"
            class="mx-auto mb-6"
            :class="social.cssClass"
          />
          <span
            class="text-center absolute bottom-10 left-0 right-0 uppercase"
            >{{ social.name }}</span
          >
        </div>
      </a>
    </div>
  </section>
</template>
<style lang="scss">
.social-card {
  min-height: 15rem;
  @screen md {
    min-height: 17rem;
  }
  @screen xl {
    min-height: 15rem;
  }
}
</style>
