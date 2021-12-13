<script setup>
import { ref } from 'vue'
import moment from 'moment'

import { EVENT_TIME_STRING } from '../constants.js'

import Timer from '../components/Timer.vue'
import SocialLinks from '../components/SocialLinks.vue'

const eventTime = moment(EVENT_TIME_STRING).tz('Europe/Berlin')
const isReleased = ref(false)
</script>

<template>
  <section>
    <div
      id="countdown-screen"
      class="min-h-screen lg:max-h-screen flex items-center"
    >
      <div class="w-full mt-24 lg:mt-0 overflow-hidden relative">
        <div class="text-center mb-12 md:mb-24 lg:mb-48">
          <h1
            class="h2 current-stage font-semibold text-tertiary mb-6 md:mb-12"
          >
            GAIA
          </h1>
          <h2 class="h4 tracking-wider uppercase">
            {{ eventTime.format('MMMM Do - HH:mm') }} CET
          </h2>
        </div>
        <timer
          class="mb-8 md:mb-32 lg:mb-48 container"
          @onDexLaunch="isReleased = true"
        />
        <div class="text-center">
          <h3
            v-if="isReleased"
            class="h2 uppercase tracking-widest text-tertiary"
          >
            dex released !
          </h3>
          <h3 v-else class="h2 uppercase tracking-widest text-tertiary">
            till <span class="hidden md:inline">stakenet</span> dex release
          </h3>
        </div>
      </div>
    </div>
    <div class="container container--lg mt-12 md:mt-0 pb-12 lg:pb-24">
      <social-links />
    </div>
  </section>
</template>
<style lang="scss">
.current-stage {
  font-size: 5rem;
  letter-spacing: 1rem;

  @screen lg {
    font-size: 8rem;
    letter-spacing: 3rem;
  }
}
</style>
