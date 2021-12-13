<script setup>
import { onMounted, onUnmounted, ref, defineEmits } from 'vue'
import moment from 'moment-timezone'
import { Fireworks } from 'fireworks-js'
import { EVENT_TIME_STRING } from '../constants.js'

const emit = defineEmits(['onDexLaunch'])

const timer = ref(null)
const isLaunched = ref(false)
const interval = ref(null)

const eventTime = moment(EVENT_TIME_STRING).tz('Europe/Berlin')
const currentTime = ref(moment().tz())
const duration = ref(moment.duration(eventTime.diff(currentTime.value)))

onMounted(() => {
  setTimer()
  if (duration.value.asSeconds() > 0) {
    interval.value = setInterval(setTimer.bind(this), 1000)
  }
})

onUnmounted(() => {
  interval.value = null
})

const setFireWorks = () => {
  isLaunched.value = true
  setTimeout(() => {
    const container = document.querySelector('#launch-done')
    const fireworks = new Fireworks(container, {
      rocketsPoint: 50,
      hue: { min: 0, max: 360 },
      delay: { min: 3, max: 10 },
      speed: 1,
      acceleration: 1.05,
      friction: 0.95,
      gravity: 1.5,
      particles: 50,
      trace: 3,
      explosion: 3,
      autoresize: true,
      brightness: {
        min: 50,
        max: 80,
        decay: { min: 0.015, max: 0.03 },
      },
      mouse: {
        click: false,
        move: false,
        max: 3,
      },
      boundaries: {
        x: 50,
        y: 50,
        width: container.clientWidth,
        height: container.clientHeight + 500,
      },
      sound: {
        enable: false,
      },
    })
    fireworks.start()
  }, 300)
}

const setTimer = () => {
  if (duration.value.asSeconds() <= 1 && !isLaunched.value) {
    emit('onDexLaunch', true)
    setFireWorks()
    timer.value = moment.duration(EVENT_TIME_STRING)
    clearInterval(interval.value)
  } else {
    duration.value = moment.duration(eventTime.diff(moment().tz()))
    timer.value = moment.duration(duration.value - 1000, 'milliseconds')
  }
}
</script>

<template>
  <section class="timer">
    <div
      v-show="isLaunched"
      id="launch-done"
      class="absolute top-0 w-full left-0 right-0 launcher"
    ></div>
    <div v-if="timer">
      <div
        class="timer-numbers flex flex-col lg:flex-row items-center justify-center text-center relative"
      >
        <div>
          <h2>{{ timer.days() < 10 ? '0' : '' }}{{ timer.days() }}</h2>
          <span>D</span>
        </div>
        <div>
          <h2>{{ timer.hours() < 10 ? '0' : '' }}{{ timer.hours() }}</h2>
          <span>H</span>
        </div>
        <div>
          <h2>{{ timer.minutes() < 10 ? '0' : '' }}{{ timer.minutes() }}</h2>
          <span>M</span>
        </div>
        <div>
          <h2>{{ timer.seconds() < 10 ? '0' : '' }}{{ timer.seconds() }}</h2>
          <span>S</span>
        </div>
      </div>
      <div
        class="hidden lg:flex flex-row items-center justify-center text-center"
      >
        <h5>days</h5>
        <h5>hours</h5>
        <h5>minutes</h5>
        <h5>seconds</h5>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.launcher {
  @apply top-0;
  min-height: 55rem;
  @screen md {
    min-height: 60rem;
  }
  @screen lg {
    min-height: 80rem;
  }
  @screen xl {
    min-height: 100rem;
  }
}
</style>
