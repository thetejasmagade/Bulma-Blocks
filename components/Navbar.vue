<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
      style="background-color: #edf2f7"
    >
      <v-list rounded>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          no-action
          :color="appBarColor"
          active-class="border"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title
                v-text="item.title"
                class="title is-4 pb-1"
              ></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            link
            :to="child.url"
          >
            <v-list-item-content>
              <v-list-item-title
                v-text="child.title"
                class="pb-1"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      flat
      class="appBar"
      :color="appBarColor"
    >
      <v-btn
        icon
        @click.stop="drawer = !drawer"
        style="color: white"
        class="pr-5"
      >
        <v-icon v-if="drawer">mdi-arrow-left</v-icon>
        <v-icon v-else>mdi-menu</v-icon>
      </v-btn>

      <v-toolbar-title v-text="title" class="appBar" />
      <v-spacer />

      <v-btn
        class="mx-3"
        id="content-desktop"
        @click="isPreviewLayout"
        v-if="isPreviewBtn && this.uiType != 'Home'"
        rounded
        depressed
      >
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z"
          />
        </svg>
        &nbsp;code
      </v-btn>

      <v-btn
        class="mx-3"
        id="content-mobile"
        @click="isPreviewLayout"
        v-if="isPreviewBtn"
        icon
        depressed
        style="color: white"
      >
        <svg style="width: 30px; height: 30px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z"
          />
        </svg>
      </v-btn>

      <v-snackbar v-model="snackbar" :timeout="timeout" bottom="true">
        <h4 class="headline">Code Copied! 🔥</h4>

        <template v-slot:action="{ attrs }">
          <v-btn icon text v-bind="attrs" @click="snackbar = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>

      <v-btn
        v-if="isCopyBtn"
        class="mx-3"
        id="content-desktop"
        rounded
        depressed
        @click="copyToClip"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
          />
        </svg>
        &nbsp;copy to clipboard
      </v-btn>

      <v-btn
        @click="isCodeLayout"
        v-if="isCopyBtn"
        class="mx-3"
        id="content-desktop"
        rounded
        depressed
      >
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M17,18C17.56,18 18,18.44 18,19C18,19.56 17.56,20 17,20C16.44,20 16,19.56 16,19C16,18.44 16.44,18 17,18M17,15C14.27,15 11.94,16.66 11,19C11.94,21.34 14.27,23 17,23C19.73,23 22.06,21.34 23,19C22.06,16.66 19.73,15 17,15M17,21.5A2.5,2.5 0 0,1 14.5,19A2.5,2.5 0 0,1 17,16.5A2.5,2.5 0 0,1 19.5,19A2.5,2.5 0 0,1 17,21.5M9.14,19.75L8.85,19L9.14,18.26C10.43,15.06 13.5,13 17,13C18.05,13 19.06,13.21 20,13.56V8L14,2H6C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10.5C9.95,21.34 9.5,20.58 9.14,19.75M13,3.5L18.5,9H13V3.5Z"
          />
        </svg>
        &nbsp;preview
      </v-btn>
      <v-btn
        @click="isCodeLayout"
        v-if="isCopyBtn"
        class="mx-3"
        id="content-mobile"
        icon
        depressed
        style="color: white"
      >
        <svg style="width: 30px; height: 30px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M17,18C17.56,18 18,18.44 18,19C18,19.56 17.56,20 17,20C16.44,20 16,19.56 16,19C16,18.44 16.44,18 17,18M17,15C14.27,15 11.94,16.66 11,19C11.94,21.34 14.27,23 17,23C19.73,23 22.06,21.34 23,19C22.06,16.66 19.73,15 17,15M17,21.5A2.5,2.5 0 0,1 14.5,19A2.5,2.5 0 0,1 17,16.5A2.5,2.5 0 0,1 19.5,19A2.5,2.5 0 0,1 17,21.5M9.14,19.75L8.85,19L9.14,18.26C10.43,15.06 13.5,13 17,13C18.05,13 19.06,13.21 20,13.56V8L14,2H6C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10.5C9.95,21.34 9.5,20.58 9.14,19.75M13,3.5L18.5,9H13V3.5Z"
          />
        </svg>
      </v-btn>

      <div class="desktopButtons" id="content-desktop">
        <div>
          <v-btn color="#00d1b2" @click="primaryColor" icon small>
            <v-icon>mdi-circle</v-icon>
          </v-btn>
          <v-btn color="#209cee" @click="linkColor" icon small>
            <v-icon>mdi-circle</v-icon>
          </v-btn>
          <v-btn color="#3273dc" @click="infoColor" icon small>
            <v-icon>mdi-circle</v-icon>
          </v-btn>
          <v-btn color="#23d160" @click="successColor" icon small>
            <v-icon>mdi-circle</v-icon>
          </v-btn>
          <v-btn color="#ffdd57" @click="warningColor" icon small>
            <v-icon>mdi-circle</v-icon>
          </v-btn>
          <v-btn color="#ff3860" @click="dangerColor" icon small>
            <v-icon>mdi-circle</v-icon>
          </v-btn>
        </div>
      </div>

      <v-btn class="mx-3" id="content-desktop" rounded depressed>
        <GithubSvg />
        &nbsp;GitHub
      </v-btn>
      <v-btn icon right style="color: white" id="content-mobile">
        <GithubSvg />
      </v-btn>
    </v-app-bar>
    <div class="mobileButtons" id="content-mobile" v-if="this.uiType != 'Home'">
      <div>
        <v-btn color="#00d1b2" @click="primaryColor" icon small>
          <v-icon>mdi-circle</v-icon>
        </v-btn>
        <v-btn color="#209cee" @click="linkColor" icon small>
          <v-icon>mdi-circle</v-icon>
        </v-btn>
        <v-btn color="#3273dc" @click="infoColor" icon small>
          <v-icon>mdi-circle</v-icon>
        </v-btn>
        <v-btn color="#23d160" @click="successColor" icon small>
          <v-icon>mdi-circle</v-icon>
        </v-btn>
        <v-btn color="#ffdd57" @click="warningColor" icon small>
          <v-icon>mdi-circle</v-icon>
        </v-btn>
        <v-btn color="#ff3860" @click="dangerColor" icon small>
          <v-icon>mdi-circle</v-icon>
        </v-btn>
      </div>
    </div>

    <div class="mobileCopyButton">
      <v-btn
        v-if="isCopyBtn"
        class="mx-3"
        id="content-mobile"
        rounded
        fab
        small
        depressed
        :color="appBarColor"
        @click="copyToClip"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
          />
        </svg>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appBarColor: "#00d1b2",
      title: "BULMA BLOCKS",
      isPreviewBtn: true,
      isCopyBtn: false,
      clipped: false,
      drawer: true,
      snackbar: false,
      timeout: 2000,
      items: [
        {
          items: [{ title: "Home Page", url: "/" }],
          title: "Home",
        },
        {
          items: [
            { title: "Header Type 1", url: "/header/header-1" },
            { title: "Header Type 2", url: "/header/header-2" },
          ],
          title: "Header",
        },
        {
          items: [
            { title: "Blogs Type 1", url: "/blogs/blogs-1" },
            { title: "Blogs Type 2", url: "/blogs/blogs-2" },
            { title: "Blogs Type 3", url: "/blogs/blogs-3" },
            { title: "Blogs Type 4", url: "/blogs/blogs-4" },
            { title: "Blogs Type 5", url: "/blogs/blogs-5" },
          ],
          title: "Blogs",
        },
        {
          items: [
            { title: "Content Type 1", url: "/content/content-1" },
            { title: "Content Type 2", url: "/content/content-2" },
            { title: "Content Type 3", url: "/content/content-3" },
            { title: "Content Type 4", url: "/content/content-4" },
            { title: "Content Type 5", url: "/content/content-5" },
            { title: "Content Type 6", url: "/content/content-6" },
          ],
          title: "Contents",
        },
        {
          items: [
            { title: "Contact Type 1", url: "/contact/contact-1" },
            { title: "Contact Type 2", url: "/contact/contact-2" },
            { title: "Contact Type 3", url: "/contact/contact-3" },
            { title: "Contact Type 4", url: "/contact/contact-4" },
          ],
          title: "Contact",
        },
        {
          items: [
            { title: "CTA Type 1", url: "/cta/cta-1" },
            { title: "CTA Type 2", url: "/cta/cta-2" },
            { title: "CTA Type 3", url: "/cta/cta-3" },
            { title: "CTA Type 4", url: "/cta/cta-4" },
          ],
          title: "CTA",
        },
        {
          items: [
            { title: "E-Commerce Type 1", url: "/e-com/e-com-1" },
            { title: "E-Commerce Type 2", url: "/e-com/e-com-2" },
            { title: "E-Commerce Type 3", url: "/e-com/e-com-3" },
            { title: "E-Commerce Type 4", url: "/e-com/e-com-4" },
          ],
          title: "E-Commerce",
        },
        {
          items: [
            { title: "Feature Type 1", url: "/feature/feature-1" },
            { title: "Feature Type 2", url: "/feature/feature-2" },
            { title: "Feature Type 3", url: "/feature/feature-3" },
            { title: "Feature Type 4", url: "/feature/feature-4" },
            { title: "Feature Type 5", url: "/feature/feature-5" },
          ],
          title: "Feature",
        },
        {
          items: [
            { title: "Footer Type 1", url: "/footer/footer-1" },
            { title: "Footer Type 2", url: "/footer/footer-2" },
            { title: "Footer Type 3", url: "/footer/footer-3" },
          ],
          title: "Footer",
        },
        {
          items: [
            { title: "HERO Type 1", url: "/HERO/hero-1" },
            { title: "HERO Type 2", url: "/HERO/hero-2" },
            { title: "HERO Type 3", url: "/HERO/hero-3" },
            { title: "HERO Type 4", url: "/HERO/hero-4" },
            { title: "HERO Type 5", url: "/HERO/hero-5" },
            { title: "HERO Type 6", url: "/HERO/hero-6" },
          ],
          title: "HERO",
        },
        {
          items: [
            { title: "Pricing Type 1", url: "/pricing/pricing-1" },
            { title: "Pricing Type 2", url: "/pricing/pricing-2" },
          ],
          title: "Pricing",
        },
        {
          items: [
            { title: "Statistic Type 1", url: "/statistics/statistic-1" },
            { title: "Statistic Type 2", url: "/statistics/statistic-2" },
            { title: "Statistic Type 3", url: "/statistics/statistic-3" },
          ],
          title: "Statistics",
        },
        {
          items: [{ title: "Step Type 1", url: "/step/step-1" }],
          title: "Steps",
        },
        {
          items: [
            { title: "Team Type 1", url: "/team/team-1" },
            { title: "Team Type 2", url: "/team/team-2" },
            { title: "Team Type 3", url: "/team/team-3" },
          ],
          title: "Team",
        },
        {
          items: [
            { title: "Testimonial Type 1", url: "/testimonial/testimonial-1" },
            { title: "Testimonial Type 2", url: "/testimonial/testimonial-2" },
            { title: "Testimonial Type 3", url: "/testimonial/testimonial-3" },
          ],
          title: "Testimonial",
        },
      ],
    };
  },

  props: {
    uiType: {
      type: String,
      required: true,
    },
  },

  created() {
    if (this.uiType == "Home") {
      this.items[0].active = true;
    } else if (this.uiType == "Header") {
      this.items[1].active = true;
    } else if (this.uiType == "Blogs") {
      this.items[2].active = true;
    } else if (this.uiType == "Content") {
      this.items[3].active = true;
    } else if (this.uiType == "Contact") {
      this.items[4].active = true;
    } else if (this.uiType == "CTA") {
      this.items[5].active = true;
    } else if (this.uiType == "E-Commerce") {
      this.items[6].active = true;
    } else if (this.uiType == "Feature") {
      this.items[7].active = true;
    } else if (this.uiType == "Footer") {
      this.items[8].active = true;
    } else if (this.uiType == "HERO") {
      this.items[9].active = true;
    } else if (this.uiType == "Pricing") {
      this.items[10].active = true;
    } else if (this.uiType == "Statistics") {
      this.items[11].active = true;
    } else if (this.uiType == "Step") {
      this.items[12].active = true;
    } else if (this.uiType == "Team") {
      this.items[13].active = true;
    } else if (this.uiType == "Testimonial") {
      this.items[14].active = true;
    }
  },

  methods: {
    isPreviewLayout() {
      this.isPreviewBtn = false;
      this.isCopyBtn = true;
      this.$emit("layout", false);
    },
    isCodeLayout() {
      this.isPreviewBtn = true;
      this.isCopyBtn = false;
      this.$emit("layout", true);
    },
    copyToClip() {
      this.$emit("copyToClip", "");
      this.snackbar = true;
      // alert("Code Copied! 🔥");
    },
    primaryColor() {
      this.appBarColor = "#00d1b2";
      this.$emit("changeColor", "#00d1b2");
    },
    linkColor() {
      this.appBarColor = "#209cee";
      this.$emit("changeColor", "#209cee");
    },
    infoColor() {
      this.appBarColor = "#3273dc";
      this.$emit("changeColor", "#3273dc");
    },
    successColor() {
      this.appBarColor = "#23d160";
      this.$emit("changeColor", "#23d160");
    },
    warningColor() {
      this.appBarColor = "#ffdd57";
      this.$emit("changeColor", "#ffdd57");
    },
    dangerColor() {
      this.appBarColor = "#ff3860";
      this.$emit("changeColor", "#ff3860");
    },
  },
};
</script>

<style>
.appBar {
  color: white;
}

.desktopButtons {
  background-color: white;
  border: none;
  border-radius: 100px;
  padding: 5px;
}

.mobileButtons {
  background-color: lightgrey;
  border: none;
  border-radius: 100px;
  width: 47%;
  padding-left: 2px;
  position: fixed;
  bottom: 10px;
  z-index: 5;
  right: 10px;
}

.mobileCopyButton {
  position: fixed;
  bottom: 10px;
  z-index: 5;
  left: 0px;
}

#content-desktop {
  display: block;
}
#content-mobile {
  display: none;
}

@media screen and (max-width: 768px) {
  #content-desktop {
    display: none;
  }
  #content-mobile {
    display: block;
  }
}

.border {
  border: 2px dashed gray;
}

/* width */
::-webkit-scrollbar {
  width: 0px;
}
</style>