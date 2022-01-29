<template>
  <div>
    <Navbar
      v-on:changeColor="updateColor($event)"
      v-on:layout="previewLayout($event)"
      v-on:copyToClip="copyToClipBoard($event)"
      uiType="Pricing"
    />
    <div class="m-5"></div>

    <section class="p-5" v-if="isPreviewLayout">
      <div class="container is-centered has-text-centered is-max-widescreen">
        <h1 class="title is-3 is-size-4-mobile">Pricing</h1>
        <p class="subtitle is-6 has-text-grey py-3">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
        </p>
        <div class="field has-addons has-addons-centered">
          <p class="control">
            <a class="px-5" :class="classOfButton"> Monthly </a>
          </p>
          <p class="control">
            <a class="button px-5"> Annually </a>
          </p>
        </div>
      </div>
      <div class="columns pt-5 mt-5">
        <div class="column">
          <div
            class="card is-shadowless p-5"
            style="
              border: 2px solid #e5e7eb;
              border-radius: 10px;
              height: 425px;
            "
          >
            <p
              class="has-text-weight-medium is-size-6"
              style="letter-spacing: 1px"
            >
              START
            </p>
            <h2 class="title is-2">Free</h2>
            <v-divider></v-divider>
            <span class="icon-text py-1">
              <span class="icon">
                <i class="fas fa-check"></i>
              </span>
              <span>Vexillologist pitchfork</span>
            </span>
            <span class="icon-text py-1">
              <span class="icon">
                <i class="fas fa-check"></i>
              </span>
              <span>Tumeric plaid portland</span>
            </span>
            <span class="icon-text pt-1 pb-6">
              <span class="icon">
                <i class="fas fa-check"></i>
              </span>
              <span>Mixtape chillwave tumeric</span>
            </span>
            <button class="button is-fullwidth has-background-grey mt-5">
              <span class="has-text-light">Button</span>
              <span class="icon is-small">
                <i class="fas fa-arrow-right has-text-light"></i>
              </span>
            </button>
            <p class="help">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
        <div class="column">
          <div
            class="card is-shadowless p-5"
            style="border-radius: 10px; height: 425px"
            :style="classOfBorderColor"
          >
            <p class="is-pulled-right" :class="classOfTextColor">
              <span
                class="
                  has-background-info-light
                  p-1
                  box-radius
                  has-text-weight-medium
                  is-size-7-mobile
                "
                >POPULAR</span
              >
            </p>
            <p
              class="has-text-weight-medium is-size-6"
              style="letter-spacing: 1px"
            >
              PRO
            </p>
            <h2 class="title is-2">
              $38<span class="subtitle is-4 has-text-grey">&nbsp;/mo</span>
            </h2>
            <v-divider></v-divider>
            <span class="icon-text py-1">
              <span class="icon">
                <i class="fas fa-check" :class="classOfTextColor"></i>
              </span>
              <span>Vexillologist pitchfork</span>
            </span>
            <span class="icon-text py-1">
              <span class="icon">
                <i class="fas fa-check" :class="classOfTextColor"></i>
              </span>
              <span>Tumeric plaid portland</span>
            </span>
            <span class="icon-text py-1">
              <span class="icon">
                <i class="fas fa-check" :class="classOfTextColor"></i>
              </span>
              <span>Hexagon neutra unicorn</span>
            </span>
            <span class="icon-text pt-1 pb-6">
              <span class="icon">
                <i class="fas fa-check" :class="classOfTextColor"></i>
              </span>
              <span>Mixtape chillwave tumeric</span>
            </span>
            <button class="is-fullwidth" :class="classOfButton">
              <span>Button</span>
              <span class="icon is-small">
                <i class="fas fa-arrow-right"></i>
              </span>
            </button>
            <p class="help">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
        <div class="column">
          <div
            class="card is-shadowless p-5"
            style="
              border: 2px solid #e5e7eb;
              border-radius: 10px;
              height: 425px;
            "
          >
            <p
              class="has-text-weight-medium is-size-6"
              style="letter-spacing: 1px"
            >
              BUSINESS
            </p>
            <h2 class="title is-2">
              $56<span class="subtitle is-4 has-text-grey">&nbsp;/mo</span>
            </h2>
            <v-divider></v-divider>
            <span class="icon-text pb-1">
              <span class="icon">
                <i class="fas fa-check"></i>
              </span>
              <span>Vexillologist pitchfork</span>
            </span>
            <span class="icon-text py-1">
              <span class="icon">
                <i class="fas fa-check"></i>
              </span>
              <span>Tumeric plaid portland</span>
            </span>
            <span class="icon-text py-1">
              <span class="icon">
                <i class="fas fa-check"></i>
              </span>
              <span>Hexagon neutra unicorn</span>
            </span>
            <span class="icon-text py-1">
              <span class="icon">
                <i class="fas fa-check"></i>
              </span>
              <span>Vexillologist pitchfork</span>
            </span>
            <span class="icon-text pt-1">
              <span class="icon">
                <i class="fas fa-check"></i>
              </span>
              <span>Mixtape chillwave tumeric</span>
            </span>
            <button class="button is-fullwidth has-background-grey mt-5">
              <span class="has-text-light">Button</span>
              <span class="icon is-small">
                <i class="fas fa-arrow-right has-text-light"></i>
              </span>
            </button>
            <p class="help">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
        <div class="column">
          <div
            class="card is-shadowless p-5"
            style="
              border: 2px solid #e5e7eb;
              border-radius: 10px;
              height: 425px;
            "
          >
            <p
              class="has-text-weight-medium is-size-6"
              style="letter-spacing: 1px"
            >
              SPECIAL
            </p>
            <h2 class="title is-2">
              $72<span class="subtitle is-4 has-text-grey">&nbsp;/mo</span>
            </h2>
            <v-divider></v-divider>
            <span class="icon-text pb-1">
              <span class="icon">
                <i class="fas fa-check"></i>
              </span>
              <span>Vexillologist pitchfork</span>
            </span>
            <span class="icon-text py-1">
              <span class="icon">
                <i class="fas fa-check"></i>
              </span>
              <span>Tumeric plaid portland</span>
            </span>
            <span class="icon-text py-1">
              <span class="icon">
                <i class="fas fa-check"></i>
              </span>
              <span>Hexagon neutra unicorn</span>
            </span>
            <span class="icon-text py-1">
              <span class="icon">
                <i class="fas fa-check"></i>
              </span>
              <span>Vexillologist pitchfork</span>
            </span>
            <span class="icon-text pt-1">
              <span class="icon">
                <i class="fas fa-check"></i>
              </span>
              <span>Mixtape chillwave tumeric</span>
            </span>
            <button class="button is-fullwidth has-background-grey mt-5">
              <span class="has-text-light">Button</span>
              <span class="icon is-small">
                <i class="fas fa-arrow-right has-text-light"></i>
              </span>
            </button>
            <p class="help">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
      </div>
    </section>

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
        <div class="container is-centered has-text-centered is-max-widescreen">
            <h1 class="title is-3 is-size-4-mobile">Pricing</h1>
            <p class="subtitle is-6 has-text-grey py-3">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
            </p>
            <div class="field has-addons has-addons-centered">
                <p class="control">
                    <a class="button is-primary px-5">
                        Monthly
                    </a>
                </p>
                <p class="control">
                    <a class="button px-5">
                        Annually
                    </a>
                </p>
            </div>
        </div>
        <div class="columns pt-5 mt-5">
            <div class="column">
                <div class="card is-shadowless p-5"
                    style="border: 2px solid #E5E7EB; border-radius: 10px; height: 425px;">
                    <p class="has-text-weight-medium is-size-6" style="letter-spacing: 1px;">START</p>
                    <h2 class="title is-2">Free</h2>
                    <hr>
                    <span class="icon-text py-1">
                        <span class="icon">
                            <i class="fas fa-check"></i>
                        </span>
                        <span>Vexillologist pitchfork</span>
                    </span>
                    <span class="icon-text py-1">
                        <span class="icon">
                            <i class="fas fa-check"></i>
                        </span>
                        <span>Tumeric plaid portland</span>
                    </span>
                    <span class="icon-text pt-1 pb-6">
                        <span class="icon">
                            <i class="fas fa-check"></i>
                        </span>
                        <span>Mixtape chillwave tumeric</span>
                    </span>
                    <button class="button is-fullwidth has-background-grey mt-5">
                        <span class="has-text-light">Button</span>
                        <span class="icon is-small">
                            <i class="fas fa-arrow-right has-text-light"></i>
                        </span>
                    </button>
                    <p class="help">Literally you probably haven't heard of them jean shorts.</p>
                </div>
            </div>
            <div class="column">
                <div class="card is-shadowless p-5"
                    style="border: 2px solid #00d1b2; height: 425px; border-radius: 10px;">
                    <p class="has-text-primary is-pulled-right"><span
                            class="has-background-info-light p-1 box-radius has-text-weight-medium is-size-7-mobile">POPULAR</span>
                    </p>
                    <p class="has-text-weight-medium is-size-6" style="letter-spacing: 1px;">PRO</p>
                    <h2 class="title is-2">$38<span class="subtitle is-4 has-text-grey">&nbsp;/mo</span></h2>
                    <hr>
                    <span class="icon-text py-1">
                        <span class="icon">
                            <i class="fas fa-check has-text-primary"></i>
                        </span>
                        <span>Vexillologist pitchfork</span>
                    </span>
                    <span class="icon-text py-1">
                        <span class="icon">
                            <i class="fas fa-check has-text-primary"></i>
                        </span>
                        <span>Tumeric plaid portland</span>
                    </span>
                    <span class="icon-text py-1">
                        <span class="icon">
                            <i class="fas fa-check has-text-primary"></i>
                        </span>
                        <span>Hexagon neutra unicorn</span>
                    </span>
                    <span class="icon-text pt-1 pb-6">
                        <span class="icon">
                            <i class="fas fa-check has-text-primary"></i>
                        </span>
                        <span>Mixtape chillwave tumeric</span>
                    </span>
                    <button class="button is-fullwidth is-primary">
                        <span>Button</span>
                        <span class="icon is-small">
                            <i class="fas fa-arrow-right"></i>
                        </span>
                    </button>
                    <p class="help">Literally you probably haven't heard of them jean shorts.</p>
                </div>
            </div>
            <div class="column">
                <div class="card is-shadowless p-5"
                    style="border: 2px solid #E5E7EB; border-radius: 10px; height: 425px;">
                    <p class="has-text-weight-medium is-size-6" style="letter-spacing: 1px;">BUSINESS</p>
                    <h2 class="title is-2">$56<span class="subtitle is-4 has-text-grey">&nbsp;/mo</span></h2>
                    <hr>
                    <span class="icon-text pb-1">
                        <span class="icon">
                            <i class="fas fa-check"></i>
                        </span>
                        <span>Vexillologist pitchfork</span>
                    </span>
                    <span class="icon-text py-1">
                        <span class="icon">
                            <i class="fas fa-check"></i>
                        </span>
                        <span>Tumeric plaid portland</span>
                    </span>
                    <span class="icon-text py-1">
                        <span class="icon">
                            <i class="fas fa-check"></i>
                        </span>
                        <span>Hexagon neutra unicorn</span>
                    </span>
                    <span class="icon-text py-1">
                        <span class="icon">
                            <i class="fas fa-check"></i>
                        </span>
                        <span>Vexillologist pitchfork</span>
                    </span>
                    <span class="icon-text pt-1">
                        <span class="icon">
                            <i class="fas fa-check"></i>
                        </span>
                        <span>Mixtape chillwave tumeric</span>
                    </span>
                    <button class="button is-fullwidth has-background-grey mt-5">
                        <span class="has-text-light">Button</span>
                        <span class="icon is-small">
                            <i class="fas fa-arrow-right has-text-light"></i>
                        </span>
                    </button>
                    <p class="help">Literally you probably haven't heard of them jean shorts.</p>
                </div>
            </div>
            <div class="column">
                <div class="card is-shadowless p-5"
                    style="border: 2px solid #E5E7EB; border-radius: 10px; height: 425px;">
                    <p class="has-text-weight-medium is-size-6" style="letter-spacing: 1px;">SPECIAL</p>
                    <h2 class="title is-2">$72<span class="subtitle is-4 has-text-grey">&nbsp;/mo</span></h2>
                    <hr>
                    <span class="icon-text pb-1">
                        <span class="icon">
                            <i class="fas fa-check"></i>
                        </span>
                        <span>Vexillologist pitchfork</span>
                    </span>
                    <span class="icon-text py-1">
                        <span class="icon">
                            <i class="fas fa-check"></i>
                        </span>
                        <span>Tumeric plaid portland</span>
                    </span>
                    <span class="icon-text py-1">
                        <span class="icon">
                            <i class="fas fa-check"></i>
                        </span>
                        <span>Hexagon neutra unicorn</span>
                    </span>
                    <span class="icon-text py-1">
                        <span class="icon">
                            <i class="fas fa-check"></i>
                        </span>
                        <span>Vexillologist pitchfork</span>
                    </span>
                    <span class="icon-text pt-1">
                        <span class="icon">
                            <i class="fas fa-check"></i>
                        </span>
                        <span>Mixtape chillwave tumeric</span>
                    </span>
                    <button class="button is-fullwidth has-background-grey mt-5">
                        <span class="has-text-light">Button</span>
                        <span class="icon is-small">
                            <i class="fas fa-arrow-right has-text-light"></i>
                        </span>
                    </button>
                    <p class="help">Literally you probably haven't heard of them jean shorts.</p>
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