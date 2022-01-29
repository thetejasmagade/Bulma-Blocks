<template>
  <div>
    <Navbar
      v-on:changeColor="updateColor($event)"
      v-on:layout="previewLayout($event)"
      v-on:copyToClip="copyToClipBoard($event)"
      uiType="Testimonial"
    />
    <div class="m-5"></div>
    <PreviewLayout v-if="isPreviewLayout" :code="code" />
    <CodeLayout v-else :code="code" />
    <div class="p-5"></div>
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
      classOfBorderColor: "border: 2px solid #00d1b2;",
      isPreviewLayout: true,
      code: `
<section class="p-5">
        <div class="columns is-desktop">
            <div class="column is-centered has-text-centered">
                <figure class="image is-96x96 is-inline-block">
                    <img class="is-rounded" src="https://dummyimage.com/128x128/f5f5f5/77777">
                </figure>
                <p class="pt-5">
                    Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1
                    kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
                    vaporware.
                </p>
                <div style="height: 0.25rem; width: 3rem; background-color: #00d1b2; border-radius: 0.25rem; margin: 0 auto;"
                    class="my-5">
                </div>
                <p class="has-text-black-ter has-text-weight-medium">HOLDEN CAULFIELD</p>
                <p class="has-text-grey">Senior Product Designer</p>
            </div>
            <div class="column is-centered has-text-centered">
                <figure class="image is-96x96 is-inline-block">
                    <img class="is-rounded" src="https://dummyimage.com/128x128/f5f5f5/77777">
                </figure>
                <p class="pt-5">
                    Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1
                    kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
                    vaporware.
                </p>
                <div style="height: 0.25rem; width: 3rem; background-color: #00d1b2; border-radius: 0.25rem; margin: 0 auto;"
                    class="my-5">
                </div>
                <p class="has-text-black-ter has-text-weight-medium">ALPER KAMU</p>
                <p class="has-text-grey">UI Developer</p>
            </div>
            <div class="column is-centered has-text-centered">
                <figure class="image is-96x96 is-inline-block">
                    <img class="is-rounded" src="https://dummyimage.com/128x128/f5f5f5/77777">
                </figure>
                <p class="pt-5">
                    Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1
                    kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
                    vaporware.
                </p>
                <div style="height: 0.25rem; width: 3rem; background-color: #00d1b2; border-radius: 0.25rem; margin: 0 auto;"
                    class="my-5">
                </div>
                <p class="has-text-black-ter has-text-weight-medium">HENRY LETHAM</p>
                <p class="has-text-grey">CTO</p>
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
    replaceBorderColor(msg) {
      for (var i = 0; i <= 13; i++) {
        this.code = this.code.replace("border: 2px solid #00d1b2;", msg);
        this.code = this.code.replace("border: 2px solid #209cee;", msg);
        this.code = this.code.replace("border: 2px solid #3273dc;", msg);
        this.code = this.code.replace("border: 2px solid #23d160;", msg);
        this.code = this.code.replace("border: 2px solid #ffdd57;", msg);
        this.code = this.code.replace("border: 2px solid #ff3860;", msg);
      }
    },
    updateColor(color) {
      this.appBarColor = color;
      if (this.appBarColor == "#00d1b2") {
        this.classOfTextColor = "has-text-primary";
        this.classOfButton = "button is-primary";
        this.classOfStyle = "#00d1b2";
        this.classOfBackgroundColor = "has-text-primary-light";
        this.classOfBorderColor = "border: 2px solid #00d1b2;";
        this.replaceTextColor("has-text-primary");
        this.replaceBtnColor("is-primary");
        this.replaceBackgroundColor("has-text-primary-light");
        this.replaceLineBackgroundColor("background-color: #00d1b2;");
        this.replaceBorderColor("border: 2px solid #00d1b2;");
      } else if (this.appBarColor == "#209cee") {
        this.classOfTextColor = "has-text-link";
        this.classOfButton = "button is-link";
        this.classOfStyle = "#209cee";
        this.classOfBackgroundColor = "has-text-link-light";
        this.classOfBorderColor = "border: 2px solid #209cee;";
        this.replaceTextColor("has-text-link");
        this.replaceBtnColor("is-link");
        this.replaceBackgroundColor("has-text-link-light");
        this.replaceLineBackgroundColor("background-color: #209cee;");
        this.replaceBorderColor("border: 2px solid #209cee;");
      } else if (this.appBarColor == "#3273dc") {
        this.classOfTextColor = "has-text-info";
        this.classOfButton = "button is-info";
        this.classOfStyle = "#3273dc";
        this.classOfBackgroundColor = "has-text-info-light";
        this.classOfBorderColor = "border: 2px solid #3273dc;";
        this.replaceTextColor("has-text-info");
        this.replaceBtnColor("is-info");
        this.replaceBackgroundColor("has-text-info-light");
        this.replaceLineBackgroundColor("background-color: #3273dc;");
        this.replaceBorderColor("border: 2px solid #3273dc;");
      } else if (this.appBarColor == "#23d160") {
        this.classOfTextColor = "has-text-success";
        this.classOfButton = "button is-success";
        this.classOfStyle = "#23d160";
        this.classOfBackgroundColor = "has-text-success-light";
        this.classOfBorderColor = "border: 2px solid #23d160;";
        this.replaceTextColor("has-text-success");
        this.replaceBtnColor("is-success");
        this.replaceBackgroundColor("has-text-success-light");
        this.replaceLineBackgroundColor("background-color: #23d160;");
        this.replaceBorderColor("border: 2px solid #23d160;");
      } else if (this.appBarColor == "#ffdd57") {
        this.classOfTextColor = "has-text-warning";
        this.classOfButton = "button is-warning";
        this.classOfStyle = "#ffdd57";
        this.classOfBackgroundColor = "has-text-warning-light";
        this.classOfBorderColor = "border: 2px solid #ffdd57;";
        this.replaceTextColor("has-text-warning");
        this.replaceBtnColor("is-warning");
        this.replaceBackgroundColor("has-text-warning-light");
        this.replaceLineBackgroundColor("background-color: #ffdd57;");
        this.replaceBorderColor("border: 2px solid #ffdd57;");
      } else if (this.appBarColor == "#ff3860") {
        this.classOfTextColor = "has-text-danger";
        this.classOfButton = "button is-danger";
        this.classOfStyle = "#ff3860";
        this.classOfBackgroundColor = "has-text-danger-light";
        this.classOfBorderColor = "border: 2px solid #ff3860;";
        this.replaceTextColor("has-text-danger");
        this.replaceBtnColor("is-danger");
        this.replaceBackgroundColor("has-text-danger-light");
        this.replaceLineBackgroundColor("background-color: #ff3860;");
        this.replaceBorderColor("border: 2px solid #ff3860;");
      }
    },
  },
};
</script>

<style>
</style>