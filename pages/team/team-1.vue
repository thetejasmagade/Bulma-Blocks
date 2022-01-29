<template>
  <div>
    <Navbar
      v-on:changeColor="updateColor($event)"
      v-on:layout="previewLayout($event)"
      v-on:copyToClip="copyToClipBoard($event)"
      uiType="Team"
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
        <div class="container is-max-widescreen centered has-text-centered">
            <h2 class="title is-3 pb-2 my-1 is-size-5-mobile">Our Team</h2>
            <p>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
                Franzen you
                probably haven't
                <br />
                heard of them.
            </p>
        </div>
        <div class="columns is-centered pt-6">
            <div class="column">
                <div class="card is-shadowless mb-4" style="border: 2px solid #E5E7EB;">
                    <article class="media m-4">
                        <div class="media-left">
                            <figure class="image is-64x64">
                                <img src="https://dummyimage.com/128x128/f5f5f5/777778" class="is-rounded" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <h5 class="pt-3 my-0">Holden Caulfield</h5>
                                <p class="py-0 my-0">UI Designer</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="card is-shadowless mb-4" style="border: 2px solid #E5E7EB;">
                    <article class="media m-4">
                        <div class="media-left">
                            <figure class="image is-64x64">
                                <img src="https://dummyimage.com/128x128/f5f5f5/777778" class="is-rounded" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <h5 class="pt-3 my-0">Henry Letham</h5>
                                <p class="py-0 my-0">CTO</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="card is-shadowless mb-4" style="border: 2px solid #E5E7EB;">
                    <article class="media m-4">
                        <div class="media-left">
                            <figure class="image is-64x64">
                                <img src="https://dummyimage.com/128x128/f5f5f5/777778" class="is-rounded" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <h5 class="pt-3 my-0">Oskar Blinde</h5>
                                <p class="py-0 my-0">Founder</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <div class="column">
                <div class="card is-shadowless mb-4" style="border: 2px solid #E5E7EB;">
                    <article class="media m-4">
                        <div class="media-left">
                            <figure class="image is-64x64">
                                <img src="https://dummyimage.com/128x128/f5f5f5/777778" class="is-rounded" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <h5 class="pt-3 my-0">John Doe</h5>
                                <p class="py-0 my-0">DevOps</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="card is-shadowless mb-4" style="border: 2px solid #E5E7EB;">
                    <article class="media m-4">
                        <div class="media-left">
                            <figure class="image is-64x64">
                                <img src="https://dummyimage.com/128x128/f5f5f5/777778" class="is-rounded" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <h5 class="pt-3 my-0">Tejas Magade</h5>
                                <p class="py-0 my-0">Creator</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="card is-shadowless mb-4" style="border: 2px solid #E5E7EB;">
                    <article class="media m-4">
                        <div class="media-left">
                            <figure class="image is-64x64">
                                <img src="https://dummyimage.com/128x128/f5f5f5/777778" class="is-rounded" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <h5 class="pt-3 my-0">Martin Eden</h5>
                                <p class="py-0 my-0">Software Engineer</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <div class="column">
                <div class="card is-shadowless mb-4" style="border: 2px solid #E5E7EB;">
                    <article class="media m-4">
                        <div class="media-left">
                            <figure class="image is-64x64">
                                <img src="https://dummyimage.com/128x128/f5f5f5/777778" class="is-rounded" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <h5 class="pt-3 my-0">Atticus Finch</h5>
                                <p class="py-0 my-0">QA Engineer</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="card is-shadowless mb-4" style="border: 2px solid #E5E7EB;">
                    <article class="media m-4">
                        <div class="media-left">
                            <figure class="image is-64x64">
                                <img src="https://dummyimage.com/128x128/f5f5f5/777778" class="is-rounded" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <h5 class="pt-3 my-0">Alper Kamu</h5>
                                <p class="py-0 my-0">System</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="card is-shadowless mb-4" style="border: 2px solid #E5E7EB;">
                    <article class="media m-4">
                        <div class="media-left">
                            <figure class="image is-64x64">
                                <img src="https://dummyimage.com/128x128/f5f5f5/777778" class="is-rounded" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <h5 class="pt-3 my-0">Rodrigo Monchi</h5>
                                <p class="py-0 my-0">Product Manager</p>
                            </div>
                        </div>
                    </article>
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