<template>
  <div>
    <Navbar
      v-on:changeColor="updateColor($event)"
      v-on:layout="previewLayout($event)"
      v-on:copyToClip="copyToClipBoard($event)"
      uiType="Contact"
    />
    <div class="m-5"></div>
    <PreviewLayout v-if="isPreviewLayout" :code="code" />
    <CodeLayout v-else :code="code" />
    <div class="m-5"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appBarColor: "#00d1b2",
      classOfTextColor: "has-text-primary",
      classOfBackgroundColor: "has-text-primary-light",
      classOfButton: "button is-primary",
      classOfStyle: "#00d1b2",
      isPreviewLayout: true,
      code: `
<section class="p-5">
   <div class="has-text-centered">
      <h1 class="title is-3 is-size-4-mobile">Contact Us</h1>
      <p class="subtitle is-6 has-text-grey mb-5 ">Post-ironic portland shabby chic echo
         park, banjo
         fashion axe
      </p>
   </div>
   <div class="columns is-desktop">
      <div class="column is-one-quarter mt-2">
         <div class="media ">
            <div class="media-left">
               <span class="icon m-0 pt-5">
               <i class="fas fa-map-marker-alt fa-2x has-text-primary"></i>
               </span>
            </div>
            <div class="pl-4">
               <p class="title is-5">Location:</p>
               <p class="subtitle is-size-6 ">A108 Adam Street, New York,<br /> NY 535022</p>
            </div>
         </div>
         <div class="media ">
            <div class="media-left">
               <span class="icon m-0 pt-5">
               <i class="fas fa-envelope fa-2x has-text-primary"></i>
               </span>
            </div>
            <div class="pl-4">
               <p class="title is-5">Email:</p>
               <p class="subtitle is-size-6 ">example@example.com<br />example2@example.com</p>
            </div>
         </div>
         <div class="media pt-5 pb-4">
            <div class="media-left">
               <span class="icon m-0 pt-5">
               <i class="fas fa-phone-alt fa-2x has-text-primary"></i>
               </span>
            </div>
            <div class="pl-4">
               <p class="title is-5">Call:</p>
               <p class="subtitle is-size-6 ">123-456-789<br />987-654-321</p>
            </div>
         </div>
      </div>
      <div class="column">
         <div class="pb-5">
            <div class="columns">
               <div class="column">
                  <label class="label has-text-weight-normal has-text-left pt-2">Name</label>
                  <input class="input" type="text" placeholder="Your Name">
               </div>
               <div class="column">
                  <label class="label has-text-weight-normal has-text-left pt-2">Email</label>
                  <input class="input" type="email" placeholder="Your Email">
               </div>
            </div>
            <label class="label has-text-weight-normal has-text-left pt-1">Message</label>
            <textarea class="textarea" placeholder="Enter your message..." rows="3"></textarea>
            <button class="button is-primary is-fullwidth mt-5">Button</button>
         </div>
      </div>
   </div>
</section>
`,
    };
  },

  methods: {
    previewLayout(layout) {
      this.isPreviewLayout = layout;
    },
    async copyToClipBoard(text) {
      try {
        await this.$copyText(this.code);
      } catch (e) {
        console.error(e);
      }
    },
    replaceTextColor(msg) {
      for (var i = 0; i <= 13; i++) {
        this.code = this.code.replace("has-text-primary", msg);
        this.code = this.code.replace("has-text-link", msg);
        this.code = this.code.replace("has-text-info", msg);
        this.code = this.code.replace("has-text-success", msg);
        this.code = this.code.replace("has-text-warning", msg);
        this.code = this.code.replace("has-text-danger", msg);
      }
    },
    replaceBtnColor(msg) {
      for (var i = 0; i <= 13; i++) {
        this.code = this.code.replace("is-primary", msg);
        this.code = this.code.replace("is-link", msg);
        this.code = this.code.replace("is-info", msg);
        this.code = this.code.replace("is-success", msg);
        this.code = this.code.replace("is-warning", msg);
        this.code = this.code.replace("is-danger", msg);
      }
    },
    replaceLineBackgroundColor(msg) {
      for (var i = 0; i <= 13; i++) {
        this.code = this.code.replace("background-color: #00d1b2;", msg);
        this.code = this.code.replace("background-color: #209cee;", msg);
        this.code = this.code.replace("background-color: #3273dc;", msg);
        this.code = this.code.replace("background-color: #23d160;", msg);
        this.code = this.code.replace("background-color: #ffdd57;", msg);
        this.code = this.code.replace("background-color: #ff3860;", msg);
      }
    },
    replaceBackgroundColor(msg) {
      for (var i = 0; i <= 13; i++) {
        this.code = this.code.replace("has-text-primary-light", msg);
        this.code = this.code.replace("has-text-link-light", msg);
        this.code = this.code.replace("has-text-info-light", msg);
        this.code = this.code.replace("has-text-success-light", msg);
        this.code = this.code.replace("has-text-warning-light", msg);
        this.code = this.code.replace("has-text-danger-light", msg);
      }
    },
    updateColor(color) {
      this.appBarColor = color;
      if (this.appBarColor == "#00d1b2") {
        this.classOfTextColor = "has-text-primary";
        this.classOfButton = "button is-primary";
        this.classOfStyle = "#00d1b2";
        this.classOfBackgroundColor = "has-text-primary-light";
        this.replaceTextColor("has-text-primary");
        this.replaceBtnColor("is-primary");
        this.replaceBackgroundColor("has-text-primary-light");
        this.replaceLineBackgroundColor("background-color: #00d1b2;");
      } else if (this.appBarColor == "#209cee") {
        this.classOfTextColor = "has-text-link";
        this.classOfButton = "button is-link";
        this.classOfStyle = "#209cee";
        this.classOfBackgroundColor = "has-text-link-light";
        this.replaceTextColor("has-text-link");
        this.replaceBtnColor("is-link");
        this.replaceBackgroundColor("has-text-link-light");
        this.replaceLineBackgroundColor("background-color: #209cee;");
      } else if (this.appBarColor == "#3273dc") {
        this.classOfTextColor = "has-text-info";
        this.classOfButton = "button is-info";
        this.classOfStyle = "#3273dc";
        this.classOfBackgroundColor = "has-text-info-light";
        this.replaceTextColor("has-text-info");
        this.replaceBtnColor("is-info");
        this.replaceBackgroundColor("has-text-info-light");
        this.replaceLineBackgroundColor("background-color: #3273dc;");
      } else if (this.appBarColor == "#23d160") {
        this.classOfTextColor = "has-text-success";
        this.classOfButton = "button is-success";
        this.classOfStyle = "#23d160";
        this.classOfBackgroundColor = "has-text-success-light";
        this.replaceTextColor("has-text-success");
        this.replaceBtnColor("is-success");
        this.replaceBackgroundColor("has-text-success-light");
        this.replaceLineBackgroundColor("background-color: #23d160;");
      } else if (this.appBarColor == "#ffdd57") {
        this.classOfTextColor = "has-text-warning";
        this.classOfButton = "button is-warning";
        this.classOfStyle = "#ffdd57";
        this.classOfBackgroundColor = "has-text-warning-light";
        this.replaceTextColor("has-text-warning");
        this.replaceBtnColor("is-warning");
        this.replaceBackgroundColor("has-text-warning-light");
        this.replaceLineBackgroundColor("background-color: #ffdd57;");
      } else if (this.appBarColor == "#ff3860") {
        this.classOfTextColor = "has-text-danger";
        this.classOfButton = "button is-danger";
        this.classOfStyle = "#ff3860";
        this.classOfBackgroundColor = "has-text-danger-light";
        this.replaceTextColor("has-text-danger");
        this.replaceBtnColor("is-danger");
        this.replaceBackgroundColor("has-text-danger-light");
        this.replaceLineBackgroundColor("background-color: #ff3860;");
      }
    },
  },
};
</script>

<style>
</style>