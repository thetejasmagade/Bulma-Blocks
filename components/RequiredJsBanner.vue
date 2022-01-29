<template>
  <div class="pl-4">
    <v-checkbox
      v-model="isRequiredJs"
      label="Additional JavaScript Code to work Hamburger Menu"
      style="color: orange"
    ></v-checkbox>
    <v-banner
      v-model="isRequiredJs"
      single-line
      transition="slide-y-transition"
    >
      <v-alert
        style="color: orange; border: 2px solid red"
        class="is-hidden-mobile"
      >
        This UI Block requires Additional Javascript Code to Work Hamburger
        Menu.
        <span
          style="color: yellow; font-style: italic; background-color: darkred"
          >(If you have used Starting Template then Ignore it)</span
        ><br />
        Copy code by pressing "Copy Code to Clipboard" button to the right and
        paste it before
        <span class="tag is-warning is-light">&lt;/body&gt;</span> tag.
      </v-alert>
      <template v-slot:actions="{ dismiss }">
        <v-btn
          text
          class="button is-danger is-light is-rounded"
          @click="dismiss"
        >
          Dismiss
        </v-btn>
        <v-btn
          text
          class="button is-success is-light is-rounded mx-2"
          @click="copyToClip"
        >
          Copy Code to Clipboard
        </v-btn>
      </template>
    </v-banner>
  </div>
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
};
</script>

<style>
</style>