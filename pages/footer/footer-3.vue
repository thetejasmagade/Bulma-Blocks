<template>
  <div>
    <Navbar
      v-on:changeColor="updateColor($event)"
      v-on:layout="previewLayout($event)"
      v-on:copyToClip="copyToClipBoard($event)"
      uiType="Footer"
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
<footer>
        <section class="p-5">
            <div class="columns">
                <div class="column">
                    <p class="subtitle is-6 has-text-weight-medium has-text-left-tablet is-centered has-text-centered">
                        CATEGORIES</p>
                    <div class="has-text-left-tablet is-centered has-text-centered">
                        <p>First Link</p>
                        <p>Second Link</p>
                        <p>Third Link</p>
                        <p>Fourth Link</p>
                    </div>
                </div>
                <div class="column">
                    <p class="subtitle is-6 has-text-weight-medium has-text-left-tablet is-centered has-text-centered">
                        CATEGORIES</p>
                    <div class="has-text-left-tablet is-centered has-text-centered">
                        <p>First Link</p>
                        <p>Second Link</p>
                        <p>Third Link</p>
                        <p>Fourth Link</p>
                    </div>
                </div>
                <div class="column">
                    <p class="subtitle is-6 has-text-weight-medium has-text-left-tablet is-centered has-text-centered">
                        CATEGORIES</p>
                    <div class="has-text-left-tablet is-centered has-text-centered">
                        <p>First Link</p>
                        <p>Second Link</p>
                        <p>Third Link</p>
                        <p>Fourth Link</p>
                    </div>
                </div>
                <div class="column">
                    <p class="subtitle is-6 has-text-weight-medium has-text-left-tablet is-centered has-text-centered">
                        CATEGORIES</p>
                    <div class="has-text-left-tablet is-centered has-text-centered">
                        <p>First Link</p>
                        <p>Second Link</p>
                        <p>Third Link</p>
                        <p>Fourth Link</p>
                    </div>
                </div>
                <div class="column">
                    <p class="subtitle is-6 has-text-weight-medium has-text-left-tablet is-centered has-text-centered">
                        CATEGORIES</p>
                    <div class="has-text-left-tablet is-centered has-text-centered">
                        <p>First Link</p>
                        <p>Second Link</p>
                        <p>Third Link</p>
                        <p>Fourth Link</p>
                    </div>
                </div>
                <div class="column">
                    <p class="subtitle is-6 has-text-weight-medium has-text-left-tablet is-centered has-text-centered">
                        CATEGORIES</p>
                    <div class="has-text-left-tablet is-centered has-text-centered">
                        <p>First Link</p>
                        <p>Second Link</p>
                        <p>Third Link</p>
                        <p>Fourth Link</p>
                    </div>
                </div>
            </div>
            <hr />
            <p>Placeholder</p>
            <div class="field is-grouped is-hidden-mobile">
                <p class="control is-expanded">
                    <input class="input" type="text" placeholder="Find a repository">
                </p>
                <p class="control">
                    <a class="button is-primary">
                        Search
                    </a>
                </p>
                <p class="control  pr-6 mr-6">Button
                    Bitters chicharrones fanny pack
                    <br />
                    waistcoat green juice
                </p>
                <span class="is-pulled-right pl-6 ml-6">
                    <span class="icon is-size-5">
                        <i class="fab fa-facebook-f pr-2"></i>
                        <i class="fab fa-twitter pr-2"></i>
                        <i class="fab fa-instagram pr-2"></i>
                        <i class="fab fa-linkedin-in pr-6 mr-6"></i>
                    </span>
                </span>
            </div>
            <div class="is-hidden-tablet">
                <div class="field is-grouped">
                    <p class="control is-expanded">
                        <input class="input" type="text" placeholder="Find a repository">
                    </p>
                    <p class="control">
                        <a class="button is-primary">
                            Search
                        </a>
                    </p>
                </div>
                <p class="is-centered has-text-centered">Bitters chicharrones fanny pack
                    waistcoat green juice</p>
                <p class="is-centered has-text-centered pt-5">
                    <span class="icon is-size-5">
                        <i class="fab fa-facebook-f pr-2"></i>
                        <i class="fab fa-twitter pr-2"></i>
                        <i class="fab fa-instagram pr-2"></i>
                        <i class="fab fa-linkedin-in"></i>
                    </span>
                </p>
            </div>
        </section>
        <div class="has-background-light p-3">
            <p>© 2020 BULMA BLOCKS —@tejasmagade
                <span class="is-pulled-right is-hidden-mobile">
                    Enamel pin tousled raclette tacos irony
                </span>
                <span class="is-hidden-tablet">Enamel pin tousled raclette tacos irony</span>
            </p>
        </div>
</footer>
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