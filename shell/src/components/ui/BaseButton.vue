<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
}
</script>

<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #171717;
  border: 1px solid #171717;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #000000;
  border-color: #000000;
}

.flat {
  background-color: transparent;
  color: #171717;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #000000;
  color: #000000;
}

.flat:hover,
.flat:active {
  color: #000000;
}

.outline:hover,
.outline:active {
  background-color: #171717;
  color: #ffffff;
}
</style>
