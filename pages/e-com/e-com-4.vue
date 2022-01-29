<template>
  <div>
    <Navbar
      v-on:changeColor="updateColor($event)"
      v-on:layout="previewLayout($event)"
      v-on:copyToClip="copyToClipBoard($event)"
      uiType="E-Commerce"
    />
    <div class="m-5"></div>
    <section class="p-5" v-if="isPreviewLayout">
      <div class="container is-max-widescreen">
        <div class="columns is-max-widescreen">
          <div class="column">
            <p
              class="is-size-7 my-3"
              :class="classOfTextColor"
              style="letter-spacing: 1px"
            >
              <span
                class="
                  has-background-info-light
                  p-1
                  box-radius
                  has-text-weight-medium
                  is-size-7-mobile
                "
                >BRAND NAME</span
              >
            </p>
            <h1 class="title is-3 is-size-4-mobile mb-0">
              Animated Night Hill Illustrations
            </h1>
            <div class="tabs pt-4">
              <ul>
                <li class="is-active">
                  <a style="color: #00d1b2" :style="classOfStyle">
                    <span class="icon is-small"
                      ><i class="fas fa-info-circle" aria-hidden="true"></i
                    ></span>
                    <span>Description</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span class="icon is-small"
                      ><i class="fas fa-comments" aria-hidden="true"></i
                    ></span>
                    <span>Reviews</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span class="icon is-small"
                      ><i class="fas fa-asterisk" aria-hidden="true"></i
                    ></span>
                    <span>Details</span>
                  </a>
                </li>
              </ul>
            </div>
            <p class="mb-5">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean.
            </p>
            <v-divider class="my-2"></v-divider>
            <p class="">
              Color<span class="is-pulled-right has-text-black-bis">Blue</span>
            </p>
            <v-divider class="my-2"></v-divider>
            <p class="">
              Size<span class="is-pulled-right has-text-black-bis">Medium</span>
            </p>
            <v-divider class="my-2"></v-divider>
            <p class="">
              Quantity<span class="is-pulled-right has-text-black-bis">5</span>
            </p>
            <v-divider class="my-2"></v-divider>
            <div class="columns is-mobile my-2">
              <div class="column">
                <h2 class="title is-4 is-size-5-mobile mt-2">$ 55.00</h2>
              </div>
              <div class="column px-3">
                <button class="is-pulled-right px-5" :class="classOfButton">
                  Button
                </button>
              </div>
            </div>
          </div>
          <div class="column">
            <figure class="image is-5by4 mt-5">
              <img src="https://dummyimage.com/480x320/f5f5f5/777778" />
            </figure>
          </div>
        </div>
      </div>
    </section>

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
   <div class="container is-max-widescreen">
      <div class="columns is-max-widescreen">
         <div class="column">
            <p class="has-text-primary is-size-7 my-3" style="letter-spacing: 1px;"><span
               class="has-background-info-light p-1 box-radius has-text-weight-medium is-size-7-mobile">BRAND
               NAME</span>
            </p>
            <h1 class="title is-3 is-size-4-mobile mb-0">Animated Night Hill Illustrations</h1>
            <div class="tabs pt-4">
               <ul>
                  <li class="is-active">
                     <a style="color: #00d1b2;">
                     <span class="icon is-small"><i class="fas fa-info-circle"
                        aria-hidden="true"></i></span>
                     <span>Description</span>
                     </a>
                  </li>
                  <li>
                     <a>
                     <span class="icon is-small"><i class="fas fa-comments"
                        aria-hidden="true"></i></span>
                     <span>Reviews</span>
                     </a>
                  </li>
                  <li>
                     <a>
                     <span class="icon is-small"><i class="fas fa-asterisk"
                        aria-hidden="true"></i></span>
                     <span>Details</span>
                     </a>
                  </li>
               </ul>
            </div>
            <p class="mb-6">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy
               chia
               microdosing
               tilde DIY. XOXO fam
               inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric.
               Gastropub blue bottle
               austin listicle pour-over, neutra jean.
            </p>
            <hr class="my-2" />
            <p class="">Color<span class="is-pulled-right has-text-black-bis">Blue</span></p>
            <hr class="my-2" />
            <p class="">Size<span class="is-pulled-right has-text-black-bis">Medium</span></p>
            <hr class="my-2" />
            <p class="">Quantity<span class="is-pulled-right has-text-black-bis">5</span></p>
            <hr class="my-2" />
            <div class="columns is-mobile">
               <div class="column">
                  <h2 class="title is-4 is-size-5-mobile mt-2">$ 55.00</h2>
               </div>
               <div class="column px-3">
                  <button class="button is-primary is-pulled-right px-5">Button</button>
               </div>
            </div>
         </div>
         <div class="column">
            <figure class="image is-5by4 mt-5">
               <img src="https://dummyimage.com/480x320/f5f5f5/777778">
            </figure>
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
    replaceColor(msg) {
      for (var i = 0; i <= 13; i++) {
        this.code = this.code.replace("color: #00d1b2;", msg);
        this.code = this.code.replace("color: #209cee;", msg);
        this.code = this.code.replace("color: #3273dc;", msg);
        this.code = this.code.replace("color: #23d160;", msg);
        this.code = this.code.replace("color: #ffdd57;", msg);
        this.code = this.code.replace("color: #ff3860;", msg);
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
        this.classOfStyle = "color: #00d1b2;";
        this.classOfBackgroundColor = "has-text-primary-light";
        this.replaceTextColor("has-text-primary");
        this.replaceBtnColor("is-primary");
        this.replaceColor("color: #00d1b2;");
        this.replaceBackgroundColor("has-text-primary-light");
        this.replaceLineBackgroundColor("background-color: #00d1b2;");
      } else if (this.appBarColor == "#209cee") {
        this.classOfTextColor = "has-text-link";
        this.classOfButton = "button is-link";
        this.classOfStyle = "color: #209cee;";
        this.classOfBackgroundColor = "has-text-link-light";
        this.replaceTextColor("has-text-link");
        this.replaceBtnColor("is-link");
        this.replaceColor("color: #209cee;");
        this.replaceBackgroundColor("has-text-link-light");
        this.replaceLineBackgroundColor("background-color: #209cee;");
      } else if (this.appBarColor == "#3273dc") {
        this.classOfTextColor = "has-text-info";
        this.classOfButton = "button is-info";
        this.classOfStyle = "color: #3273dc;";
        this.classOfBackgroundColor = "has-text-info-light";
        this.replaceTextColor("has-text-info");
        this.replaceBtnColor("is-info");
        this.replaceColor("color: #3273dc;");
        this.replaceBackgroundColor("has-text-info-light");
        this.replaceLineBackgroundColor("background-color: #3273dc;");
      } else if (this.appBarColor == "#23d160") {
        this.classOfTextColor = "has-text-success";
        this.classOfButton = "button is-success";
        this.classOfStyle = "color: #23d160;";
        this.classOfBackgroundColor = "has-text-success-light";
        this.replaceTextColor("has-text-success");
        this.replaceBtnColor("is-success");
        this.replaceColor("color: #23d160;");
        this.replaceBackgroundColor("has-text-success-light");
        this.replaceLineBackgroundColor("background-color: #23d160;");
      } else if (this.appBarColor == "#ffdd57") {
        this.classOfTextColor = "has-text-warning";
        this.classOfButton = "button is-warning";
        this.classOfStyle = "color: #ffdd57;";
        this.classOfBackgroundColor = "has-text-warning-light";
        this.replaceTextColor("has-text-warning");
        this.replaceBtnColor("is-warning");
        this.replaceColor("color: #ffdd57;");
        this.replaceBackgroundColor("has-text-warning-light");
        this.replaceLineBackgroundColor("background-color: #ffdd57;");
      } else if (this.appBarColor == "#ff3860") {
        this.classOfTextColor = "has-text-danger";
        this.classOfButton = "button is-danger";
        this.classOfStyle = "color: #ff3860;";
        this.classOfBackgroundColor = "has-text-danger-light";
        this.replaceTextColor("has-text-danger");
        this.replaceBtnColor("is-danger");
        this.replaceColor("color: #ff3860;");
        this.replaceBackgroundColor("has-text-danger-light");
        this.replaceLineBackgroundColor("background-color: #ff3860;");
      }
    },
  },
};
</script>

<style>
</style>