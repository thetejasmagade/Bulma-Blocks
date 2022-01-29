<template>
  <div>
    <Navbar uiType="Home" />
    <div>
      <v-alert color="#2A3B4D" dark icon="mdi-firework" dense class="mb-0">
        <h3 style="font-size: 19px">
          &nbsp;&nbsp;Copy below
          <span><a href="#code" style="color: red">Starter Template</a></span>
          and paste it into your HTML file and after that you can use Bulma
          Blocks easily in your simple website. This is not mandatory there is
          another
          <span><a href="#code1" style="color: lime">alternative</a></span> to
          this. <a href="#code1" style="color: lime">Click here</a>
        </h3>
      </v-alert>
      <pre class="pt-0 mt-0" id="code">
      <code v-highlight class="html pt-0 mt-0" style="font-size: 1.2rem;">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;

&lt;head>
    &lt;meta charset="UTF-8"&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title>Bulma Blocks&lt;/title&gt;
    &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"&gt;
    &lt;script src="https://kit.fontawesome.com/8548bca167.js" crossorigin="anonymous"&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;

&lt;!-- Insert block codes here --&gt;

&lt;!-- Remove this before use --&gt;
&lt;a href="https://bulma.io/documentation/"&gt;Bulma CSS documentation&lt;/a&gt;
&lt;!-- Remove this before use --&gt;

&lt;/body&gt;
&lt;/html&gt;
</code>
      </pre>

      <v-alert color="#2A3B4D" dark icon="mdi-firework" dense class="mb-0">
        <h3 style="font-size: 19px">
          &nbsp;&nbsp;You can copy and paste this both stylesheet and script
          tags in your
          <span style="color: orange">&lt;head&gt;</span> tag and you are ready
          to use Bulma Blocks in your website.
        </h3>
      </v-alert>
      <pre class="pt-0 mt-0" id="code1">
      <code v-highlight class="html pt-0 mt-0" style="font-size: 1.2rem;">
&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"&gt;
    
&lt;script src="https://kit.fontawesome.com/8548bca167.js" crossorigin="anonymous"&gt;&lt;/script&gt;
</code>
      </pre>
    </div>

    <v-alert color="#2A3B4D" dark dense class="mb-0">
      <h3 style="font-size: 20px">
        <v-icon>mdi-firework</v-icon> Live Examples of Bulma Blocks
      </h3>
    </v-alert>

    <aside class="menu pb-6">
      <ul class="menu-list">
        <li>
          <ul>
            <li>
              <h3 style="font-size: 20px; color: orangered">Example 1 - Bulma Hosting</h3>
              <a href="https://thetejasmagade.github.io/bulma-blocks-examples/example-1/index.html" style="font-size: 16px; color: blue" target="_blank"
                >Live Preview
                <v-icon style="font-size: 19px; color: gray"
                  >mdi mdi-open-in-new</v-icon
                ></a
              > 
              <a href="https://github.com/thetejasmagade/bulma-blocks-examples/tree/master/example-1" style="font-size: 16px; color: blue" target="_blank"
                >Github
                <v-icon style="font-size: 19px; color: gray"
                  >mdi mdi-open-in-new</v-icon
                ></a
              >
            </li>
            <br>
            <li>
              <h3 style="font-size: 20px; color: orangered">Example 2 - Bulma Garage</h3>
              <a href="https://thetejasmagade.github.io/bulma-blocks-examples/example-2/index.html" style="font-size: 16px; color: blue" target="_blank"
                >Live Preview
                <v-icon style="font-size: 19px; color: gray"
                  >mdi mdi-open-in-new</v-icon
                ></a
              > 
              <a href="https://github.com/thetejasmagade/bulma-blocks-examples/tree/master/example-2" style="font-size: 16px; color: blue" target="_blank"
                >Github
                <v-icon style="font-size: 19px; color: gray"
                  >mdi mdi-open-in-new</v-icon
                ></a
              >
            </li>
            <br>
            <li>
              <h3 style="font-size: 20px; color: orangered">Example 3 - Bulma Education</h3>
              <a href="https://thetejasmagade.github.io/bulma-blocks-examples/example-3/index.html" style="font-size: 16px; color: blue" target="_blank"
                >Live Preview
                <v-icon style="font-size: 19px; color: gray"
                  >mdi mdi-open-in-new</v-icon
                ></a
              > 
              <a href="https://github.com/thetejasmagade/bulma-blocks-examples/tree/master/example-3" style="font-size: 16px; color: blue" target="_blank"
                >Github
                <v-icon style="font-size: 19px; color: gray"
                  >mdi mdi-open-in-new</v-icon
                ></a
              >
            </li>
            <br>
            <li>
              <h3 style="font-size: 20px; color: orangered">Example 4 - Bulma Shop</h3>
              <a href="https://thetejasmagade.github.io/bulma-blocks-examples/example-4/index.html" style="font-size: 16px; color: blue" target="_blank"
                >Live Preview
                <v-icon style="font-size: 19px; color: gray"
                  >mdi mdi-open-in-new</v-icon
                ></a
              > 
              <a href="https://github.com/thetejasmagade/bulma-blocks-examples/tree/master/example-4" style="font-size: 16px; color: blue" target="_blank"
                >Github
                <v-icon style="font-size: 19px; color: gray"
                  >mdi mdi-open-in-new</v-icon
                ></a
              >
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  </div>
</template>



<script>
export default {
  data() {
    return {
      appBarColor: "#00d1b2",
      starterTemplate: "",
    };
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>