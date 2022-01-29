<template>
  <section style="font-size: 20px">
    <RequiredJsBanner v-if="requiredJs == true" />

    <pre>
      <code v-highlight class="html">{{ code }}</code>
      </pre>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isRequiredJs: true,
      requiredJsCode: `
        document.addEventListener('DOMContentLoaded', () => {

            // Get all "navbar-burger" elements
            const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {

                // Add a click event on each of them
                $navbarBurgers.forEach(el => {
                    el.addEventListener('click', () => {

                        // Get the target from the "data-target" attribute
                        const target = el.dataset.target;
                        const $target = document.getElementById(target);

                        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                        el.classList.toggle('is-active');
                        $target.classList.toggle('is-active');

                    });
                });
            }
        });`,
    };
  },
  methods: {
    async copyToClip(text) {
      try {
        await this.$copyText(this.requiredJsCode);
      } catch (e) {
        console.error(e);
      }
    },
  },
  props: {
    code: {
      type: String,
      required: true,
    },
    requiredJs: {
      type: Boolean,
    },
  },
};
</script>

<style>
</style>