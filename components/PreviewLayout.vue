<template>
  <div v-html="code"></div>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>