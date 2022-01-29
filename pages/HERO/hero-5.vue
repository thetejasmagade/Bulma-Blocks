<template>
  <div>
    <Navbar
      v-on:changeColor="updateColor($event)"
      v-on:layout="previewLayout($event)"
      v-on:copyToClip="copyToClipBoard($event)"
      uiType="HERO"
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
        <div class="columns is-8 is-variable ">
            <div class="column">
                <figure class="image">
                    <img src="https://dummyimage.com/500x450/f5f5f5/777778">
                </figure>
            </div>
            <div class="column is-two-thirds">
                <div class="is-hidden-mobile">
                    <h1 class="title is-3 is-size-4-mobile pt-6">Knausgaard typewriter readymade marfa
                    </h1>
                    <p>Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella
                        selvage wolf narwhal<br>
                        dreamcatcher.</p>
                    <div class="field is-grouped pt-5" style="width: 60%;">
                        <p class="control is-expanded">
                            <input class="input" type="text" placeholder="Find a repository">
                        </p>
                        <p class="control">
                            <a class="button is-primary px-5">
                                Button
                            </a>
                        </p>
                    </div>
                    <p class="help">Neutra shabby chic ramps, viral fixie.</p>
                    <button class="button is-large has-background-light is-shadowless my-5 mr-4 is-hidden-mobile">
                        <span class="icon is-large">
                            <i class="fab fa-google-play"></i>
                        </span>
                        <span>
                            <div class="columns">
                                <div class="column">
                                    <p class="subtitle is-7 p-0 m-0">GET IT ON</p>
                                    <p class="subtitle is-4 p-0 m-0">Google Play</p>
                                </div>
                            </div>
                        </span>
                    </button>
                    <button class="button is-large has-background-light is-shadowless my-5 ml-4 is-hidden-mobile">
                        <span class="icon is-large">
                            <i class="fab fa-apple"></i>
                        </span>
                        <span>
                            <div class="columns">
                                <div class="column">
                                    <p class="subtitle is-7 p-0 m-0">Download on the</p>
                                    <p class="subtitle is-4 p-0 m-0">App Store</p>
                                </div>
                            </div>
                        </span>
                    </button>
                </div>
                <div class="is-hidden-tablet is-centered has-text-centered">
                    <h1 class="title is-3 is-size-4-mobile pt-6">Knausgaard typewriter readymade marfa
                    </h1>
                    <p>Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella
                        selvage wolf narwhal<br>
                        dreamcatcher.</p>
                    <div class="field is-grouped pt-5">
                        <p class="control is-expanded">
                            <input class="input" type="text" placeholder="Find a repository">
                        </p>
                        <p class="control">
                            <a class="button is-primary px-5">
                                Button
                            </a>
                        </p>
                    </div>
                    <p class="help pb-5">Neutra shabby chic ramps, viral fixie.</p>
                    <div class="columns is-gapless is-mobile">
                        <div class="column">
                            <button class="button is-medium has-background-light is-shadowless is-hidden-tablet mr-2">
                                <span class="icon is-medium">
                                    <i class="fab fa-google-play"></i>
                                </span>
                                <span>
                                    <div class="columns">
                                        <div class="column">
                                            <p class="is-size-7 p-0 m-0">GET IT ON</p>
                                            <p class="is-size-6 p-0 m-0">Google Play</p>
                                        </div>
                                    </div>
                                </span>
                            </button>
                        </div>
                        <div class="column">
                            <button class="button is-medium has-background-light is-shadowless is-hidden-tablet">
                                <span class="icon is-medium">
                                    <i class="fab fa-apple"></i>
                                </span>
                                <span>
                                    <div class="columns">
                                        <div class="column">
                                            <p class="is-size-7 p-0 m-0">Download on the</p>
                                            <p class="is-size-6 p-0 m-0">App Store</p>
                                        </div>
                                    </div>
                                </span>
                            </button>
                        </div>
                    </div>
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