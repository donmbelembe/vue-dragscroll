<script setup lang="ts">
import "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"
import { ref } from 'vue';

let drag= ref(true)
let oh= ref(false)

const eventTrigged = function(name, e?) {
  console.log(name);
  if (name == 'dragscrollmove') {
    console.log(e.detail)
  }
}

const testClick = function() {
    alert('Clicked')
}

</script>

<template>
  <div class="container">
      <div class="row mt-4 justify-content-center">
        <h1 class="display-4">vue-dragscroll</h1>
      </div>

      <div class="row mt-4">
        <div class="col-12 col-md-6">
          <p class="lead"><strong>vue-dragscroll</strong> is a micro vue.js directive which enables scrolling via holding the mouse button ("drag and drop" or "click and hold" style).</p>
          <p class="lead">For vue 2 please use the <a href="https://www.npmjs.com/package/vue-dragscroll/v/3.0.1" target="_blank">version 3.0 of this package</a></p>
        </div>
        <div class="col-12 col-md-6">
          <a href="https://github.com/donmbelembe/vue-dragscroll" target="_blank" class="text-warning">
            <i class="fa fa-github"></i> View on github
          </a>
          <br>
          <a href="https://unpkg.com/vue-dragscroll" target="_blank" class="text-danger">
            <i class="fa fa-bookmark"></i> CDN : https://unpkg.com/vue-dragscroll
          </a>
          <br>
          <a href="https://www.npmjs.com/package/vue-dragscroll" target="_blank" class="text-info">
            <i class="fa fa-bookmark"></i> NPM : https://www.npmjs.com/package/vue-dragscroll
          </a>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-12 text-center mb-3">
          <h4 class="text-uppercase">Installation</h4>
        </div>

        <div class="col-12 col-md-6">
          <div>
            <p><strong>Via NPM</strong></p>
            <pre class="prettyprint">
  <code>npm install vue-dragscroll</code>
</pre>
          </div>
          <div class="mt-2">
            <p><strong>Install globally (main.js)</strong></p>
            <pre class="prettyprint">
  import { createApp } from 'vue'
  import App from './App.vue'
  import VueDragscroll from "vue-dragscroll";
  
  const app = createApp(App);
  
  app.use(VueDragscroll);
  app.mount('#app')
</pre>
          </div>
          <div class="mt-2">
            <p><strong>(Or) Install for a single component</strong></p>
            <pre class="prettyprint">
import { dragscroll } from 'vue-dragscroll'

export default {
  directives: {
    dragscroll
  }
}
</pre>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div>
            <p><strong>Via CDN</strong></p>
            <pre class="prettyprint">
  <code>
    &lt;body>
      &lt;div id="app"&gt;
        &lt;div vue-dragscroll&gt;
          ...
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;script src="https://unpkg.com/vue"&gt;&lt;/script&gt;
      &lt;script src="https://unpkg.com/vue-dragscroll"&gt;&lt;/script&gt;
      &lt;script&gt;
    
        const App = {
          data() {
            return {
              message: 'Hello World'
            }
          }
        }
    
        const app = Vue.createApp(App);
        app.use(VueDragscroll);
        app.mount('#app')
      &lt;/script&gt;
    &lt;/body&gt;
  </code>
</pre>
          </div>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-12 text-center">
          <h4 class="text-uppercase">Usage</h4>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-sm-6 mt-3">
          <p><strong>Just add the directive to the parent element</strong></p>
          <div v-if="drag">
            <pre class="prettyprint lang-html">
<code>
&lt;div v-dragscroll&gt; ... &lt;div&gt;
&lt;!-- For more control --&gt;
&lt;div v-dragscroll="true"&gt; ... &lt;div&gt;
</code>
</pre>
        </div>
        <div v-else="drag">
<pre class="prettyprint lang-html">
  <code>&lt;div v-dragscroll="false"&gt; ... &lt;div&gt;</code>
</pre>
          </div>
          <div>
            <input type="checkbox" v-model="drag"> Enable drag
          </div>
          <div>
            <input type="checkbox" v-model="oh"> (overflow: hidden)
          </div>
        </div>

        <div class="col-12 col-sm-6 mt-3 d-flex justify-content-center">
          <div class="big-box grab-bing border border-danger bg-secondary" :class="{oh: oh}" v-dragscroll="drag"
            v-on:dragscrollstart="eventTrigged('dragscrollstart')" v-on:dragscrollend="eventTrigged('dragscrollend')"
            v-on:dragscrollmove="eventTrigged('dragscrollmove', $event)">
            <img src="./assets/image.jpg" alt="">
          </div>
        </div>
        <div class="col-12 col-md-6 mt-3 d-flex justify-content-center">
          <div class="big-box grab-bing border border-danger bg-secondary" :class="{oh: oh}" v-dragscroll="drag"
            v-on:dragscrollstart="eventTrigged('dragscrollstart')" v-on:dragscrollend="eventTrigged('dragscrollend')"
            v-on:dragscrollmove="eventTrigged('dragscrollmove', $event)">
            <p class="p">Lorem ipsum dolor sit ameturutem. Unde impedit laboriosam deserunt ipsa?</p>
            <p class="p">Lorem ipsum dolor sit</p>
            <p class="p">Lorem ipsum</p>
            <p class="p">Lorem ipsum dolor sit ameturutem. Unde impedit laboriosam</p>
            <p class="p">ameturutem. Unde impedit laboriosam deserunt ipsa?</p>
            <p class="p">Lorem ipsum dolor sit ameturutem. Unde impedit laboriosam deserunt ipsa?</p>
            <p class="p">Unde impedit laboriosam deserunt ipsa?</p>
            <input type="text">
            <p class="p">Lorem ipsum dolor sit ameturutem. <button class="btn btn-default" @click="testClick()">Test click</button> Unde impedit laboriosam deserunt ipsa?</p>
            <p class="p">Unde impedit laboriosam deserunt ipsa?</p>
            <p class="p">Lorem ipsum dolor sit ameturutem. Unde impedit laboriosam deserunt ipsa?</p>
            <p class="p">Loremlaboriosam deserunt ipsa?</p>
            <p class="p">deserunt ipsa?</p>
            <p class="p">Lorepedit laboriosam deserunt ipsa?</p>
            <p class="p">Loremeturutem. Unde impedit laboriosam deserunt ipsa?</p>
            <p class="p">Lorepedit laboriosam deserunt ipsa?</p>
            <p class="p">Lore ameturutem. Unde impedit laboriosam deserunt ipsa?</p>

          </div>
        </div>
      </div>

      <hr>

      <div class="row">
        <div class="col-12 col-sm-6 mt-3">
          <p><strong>Directive with <span class="text-danger">:nochilddrag</span> argument</strong></p>
<pre class="prettyprint lang-html">
&lt;div v-dragscroll:nochilddrag&gt; ... &lt;div&gt;
</pre>
          <i>This will only enable drag-scrolling for an element itself, but not for its children.</i>
          <a href="http://asvd.github.io/jailed/demos/web/process/" target="_blank">Check this example</a> <br>
          <i><strong>On below examples, you can scroll on when holding mouse outside of child element</strong></i> <br>
          <i>(Outside of the text or red box)</i>
        </div>

        <div class="col-12 col-sm-6 mt-3 d-flex justify-content-center">
          <div class="big-box oh grab-bing border border-danger bg-secondary" v-dragscroll:nochilddrag
            v-on:dragscrollstart="eventTrigged('dragscrollstart')" v-on:dragscrollend="eventTrigged('dragscrollend')"
            v-on:dragscrollmove="eventTrigged('dragscrollmove', $event)">
            <p class="p">Lorem ipsum dolor sit ameturutem. Unde impedit laboriosam deserunt ipsa?</p>
            <p class="p">Lorem ipsum dolor sit</p>
            <p class="p">Lorem ipsum</p>
            <p class="p">Lorem ipsum dolor sit ameturutem. Unde impedit laboriosam</p>
            <p class="p">deserunt ipsa?</p>
            <p class="p">Lorem ipsum doipsa?</p>
            <p class="p">Unde impedit laboriosam deserunt ipsa?</p>
            <p class="p">Lorem ipsum dolor sit ameturutem. Unde impedit laboriosam deserunt ipsa?</p>
            <p class="p">deserunt ipsa?</p>
            <p class="p">laboriosam deserunt ipsa?</p>
            <p class="p">Loremlaboriosam deserunt ipsa?</p>
            <p class="p">deserunt ipsa?</p>
            <p class="p">Lorepedit laboriosam deserunt ipsa?</p>
            <p class="p">Loremeturutem. Unde impedit laboriosam deserunt ipsa?</p>
            <p class="p">Lorepedit laboriosam deserunt ipsa?</p>
            <p class="p">Lore ameturutem. Unde impedit laboriosam deserunt ipsa?</p>
          </div>
        </div>

        <div class="col-12 col-sm-6 mt-3 d-flex justify-content-center">
          <div class="big-box oh grab-bing border border-danger bg-secondary" v-dragscroll:nochilddrag
            v-on:dragscrollstart="eventTrigged('dragscrollstart')" v-on:dragscrollend="eventTrigged('dragscrollend')"
            v-on:dragscrollmove="eventTrigged('dragscrollmove', $event)">
            <div class="small-box bg-danger m-5"></div>
            <div class="small-box bg-danger m-5"></div>
            <div class="small-box bg-danger m-5"></div>
            <div class="small-box bg-danger m-5"></div>
            <div class="small-box bg-danger m-5"></div>
            <div class="small-box bg-danger m-5"></div>
            <div class="small-box bg-danger m-5"></div>
            <div class="small-box bg-danger m-5"></div>
            <div class="small-box bg-danger m-5"></div>
            <div class="small-box bg-danger m-5"></div>
            <div class="small-box bg-danger m-5"></div>
            <div class="small-box bg-danger m-5"></div>
          </div>
        </div>
      </div>
      
      <hr>

      <div class="row">
        <div class="col-12 col-sm-6 mt-3">
          <p><strong>Horizontally only or Vertically only</strong></p>
          <div>
<pre class="prettyprint lang-html">
&lt;div v-dragscroll.x&gt; ... &lt;div&gt;
&lt;!-- Or --&gt;
&lt;div v-dragscroll.y="true"&gt; ... &lt;div&gt;
</pre>
          </div>
        </div>

        <div class="col-12 col-sm-6 mt-3 d-flex justify-content-center">
          <div class="big-box grab-bing border border-danger bg-secondary" v-dragscroll.x="drag" v-on:dragscrollstart="eventTrigged('dragscrollstart')"
            v-on:dragscrollend="eventTrigged('dragscrollend')" v-on:dragscrollmove="eventTrigged('dragscrollmove', $event)">
            <img src="./assets/image.jpg" alt="">
          </div>
        </div>
        <div class="col-12 col-sm-6 mt-3 d-flex justify-content-center">
          <div class="big-box grab-bing border border-danger bg-secondary" v-dragscroll.y="drag" v-on:dragscrollstart="eventTrigged('dragscrollstart')"
            v-on:dragscrollend="eventTrigged('dragscrollend')" v-on:dragscrollmove="eventTrigged('dragscrollmove', $event)">
            <p class="p">Lorem ipsum dolor sit ameturutem. Unde impedit laboriosam deserunt ipsa?</p>
            <p class="p">Lorem ipsum dolor sit</p>
            <p class="p">Lorem ipsum</p>
            <p class="p">Lorem ipsum dolor sit ameturutem. Unde impedit laboriosam</p>
            <p class="p">ameturutem. Unde impedit laboriosam deserunt ipsa?</p>
            <p class="p">Lorem ipsum dolor sit ameturutem. Unde impedit laboriosam deserunt ipsa?</p>
            <p class="p">Unde impedit laboriosam deserunt ipsa?</p>
            <p class="p">Lorem ipsum dolor sit ameturutem. Unde impedit laboriosam deserunt ipsa?</p>
            <p class="p">Unde impedit laboriosam deserunt ipsa?</p>
            <p class="p">Lorem ipsum dolor sit ameturutem. Unde impedit laboriosam deserunt ipsa?</p>
            <p class="p">Loremlaboriosam deserunt ipsa?</p>
            <p class="p">deserunt ipsa?</p>
            <p class="p">Lorepedit laboriosam deserunt ipsa?</p>
            <p class="p">Loremeturutem. Unde impedit laboriosam deserunt ipsa?</p>
            <p class="p">Lorepedit laboriosam deserunt ipsa?</p>
            <p class="p">Lore ameturutem. Unde impedit laboriosam deserunt ipsa?</p>

          </div>
        </div>
      </div>

      <hr>

      <div class="row">
        <div class="col-12 col-sm-6 mt-3">
          <p><strong>Select which elements can be dragged</strong></p>
          <div>
<pre class="prettyprint lang-html">
<code>
  &lt;div v-dragscroll&gt; 
    &lt;div class="child"&gt;...&lt;div&gt;&lt;!-- can be dragged --&gt;
    &lt;div class="child" data-no-dragscroll&gt;...&lt;div&gt;&lt;!-- can't be dragged --&gt;
  &lt;div&gt;

  &lt;div v-dragscroll:nochilddrag&gt; 
    &lt;div class="child" data-dragscroll&gt;...&lt;div&gt;&lt;!-- can be dragged --&gt;
    &lt;div class="child"&gt;...&lt;div&gt;&lt;!-- can't be dragged --&gt;
  &lt;div&gt;
</code>
</pre>
            <p class="font-italic">
              When using the directive all elements inside will be draggable. You can use 
              <strong>data-no-dragscroll</strong> to tell which elements <strong>can't</strong> be dragged.
            </p>
            <p class="font-italic">
              In the same way, if you are using <strong>nochilddrag</strong> you can use 
              <strong>data-dragscroll</strong> to tell which element <strong>can</strong> be dragged.
            </p>
          </div>
        </div>

        <div class="col-12 col-sm-6 mt-3">
          <div class="big-box grab-bing border border-danger bg-secondary mx-auto mb-3" v-dragscroll
            v-on:dragscrollstart="eventTrigged('dragscrollstart')" v-on:dragscrollend="eventTrigged('dragscrollend')"
            v-on:dragscrollmove="eventTrigged('dragscrollmove', $event)">
            <div class="bg-dark" style="width: 500px; height: 200px;" data-no-dragscroll>
              <div class="small-box bg-danger m-5"></div>
              <div class="small-box bg-danger m-5"></div>
              <div class="small-box bg-danger m-5"></div>
            </div>
          </div>

          <div class="big-box grab-bing border border-danger bg-secondary mx-auto" v-dragscroll:nochilddrag
            v-on:dragscrollstart="eventTrigged('dragscrollstart')" v-on:dragscrollend="eventTrigged('dragscrollend')"
            v-on:dragscrollmove="eventTrigged('dragscrollmove', $event)">
            <div class="bg-dark" style="width: 500px; height: 200px;" data-dragscroll>
              <div class="small-box bg-danger m-5"></div>
              <div class="small-box bg-danger m-5"></div>
              <div class="small-box bg-danger m-5"></div>
            </div>
          </div>
        </div>
      </div>

      <hr>

      <div class="row">
        <div class="col-12 col-sm-6 mt-3">
          <p><strong>firstchilddrag (DEPRECATED, prefer data attributes)</strong></p>
          <div>
<pre class="prettyprint lang-html">
<code>
  &lt;div v-dragscroll:firstchilddrag&gt; 
    &lt;div class="subContainer"&gt;...&lt;div&gt; 
  &lt;div&gt;
</code>
</pre>
            <p class="font-italic">
              When using <strong>nochilddrag</strong>, all elements inside the parent 
              element will not be draggable, but in some case you may need to have only
              one subchild and multile grandchild and only the grandchild should not be dragable.
            </p>
          </div>
        </div>

        <div class="col-12 col-sm-6 mt-3 d-flex justify-content-center">
          <div class="big-box grab-bing border border-danger bg-secondary" v-dragscroll:firstchilddrag
            v-on:dragscrollstart="eventTrigged('dragscrollstart')" v-on:dragscrollend="eventTrigged('dragscrollend')"
            v-on:dragscrollmove="eventTrigged('dragscrollmove', $event)">
            <div class="bg-dark" style="width: 500px; height: 200px;">
              <div class="small-box bg-danger m-5"></div>
              <div class="small-box bg-danger m-5"></div>
              <div class="small-box bg-danger m-5"></div>
            </div>
          </div>
        </div>
      </div>

      <hr>

      <div class="row">
        <div class="col-12 col-sm-6 mt-3">
          <p><strong>Pass scroll when max reached</strong></p>
          <div>
<pre class="prettyprint lang-html">
<code>
  &lt;div v-dragscroll.pass&gt; 
    &lt;div class="subContainer"&gt;...&lt;div&gt; 
  &lt;div&gt;
</code>
</pre>
        <i>It would be helpful if scroll were passed to the window object, when max scroll position were reached.</i>
          </div>
        </div>

        <div class="col-12 col-sm-6 mt-3 d-flex justify-content-center">
          <div class="big-box grab-bing border border-danger bg-secondary" v-dragscroll.pass
            v-on:dragscrollstart="eventTrigged('dragscrollstart')" v-on:dragscrollend="eventTrigged('dragscrollend')"
            v-on:dragscrollmove="eventTrigged('dragscrollmove', $event)">
            <img src="./assets/image.jpg" alt="">
          </div>
        </div>
      </div>

      <hr>
      
      <div class="row scroller-container">
          <div class="col-12 col-sm-6 mt-3">
            <p><strong>Pass scroll to a container when max reached</strong></p>
            <div>
  <pre class="prettyprint lang-html">
  <code>
    &lt;div class="scroller-container" style="overflow: auto; height: 300px"&gt;
      &lt;div class="scroller" style="height: 600px"&gt;
        &lt;div v-dragscroll.pass="{container: '.scroller-container'}&gt; 
          &lt;div class="subContainer"&gt;...&lt;div&gt; 
        &lt;div&gt;
      &lt;div&gt;
    &lt;div&gt;
  </code>
  </pre>
          <i>It would be helpful if scroll were passed to the encapsulating scrolling context, when max scroll position were reached.</i>
            </div>
          </div>
  
          <div class="col-12 col-sm-6 mt-3 d-flex justify-content-center scroller bg-secondary">
            <div class="big-box grab-bing border border-danger bg-secondary" v-dragscroll.pass="{container: '.scroller-container'}"
              v-on:dragscrollstart="eventTrigged('dragscrollstart')" v-on:dragscrollend="eventTrigged('dragscrollend')"
              v-on:dragscrollmove="eventTrigged('dragscrollmove', $event)">
              <img src="./assets/image.jpg" alt="">
            </div>
          </div>
        </div>
  
        <hr>

      <div class="row">
        <div class="col-12 col-sm-6 mt-3">
          <p><strong>Apply dragscroll to a child dom element</strong></p>
          <div>
<pre class="prettyprint lang-html">
<code>
  &lt;!-- Vue --&gt;
  &lt;mycomponent v-dragscroll="{ target: '.my-draggable-div' }"&gt;
  &lt;/mycomponent&gt;
  
  &lt;!-- HTML generated --&gt;
  &lt;div class="mycomponent"&gt;
    &lt;div class="my-draggable-div"&gt;&lt;/div&gt;
  &lt;/div&gt;
</code>
</pre>
            <p class="font-italic">
              Use case: when you want to apply the directive to a child dom element you have no control over (because generated by vuejs).
            </p>
            <p class="font-italic">
              You can use <strong>v-dragscroll="{ target: 'element' }"</strong> to tell to which child the directive will be applied. This <strong>element</strong> string must be a valid CSS selector string (used by querySelector). Examples: <strong>'#element_id'</strong>,  <strong>'.element_class'</strong>, <strong>'section'</strong>.
            </p>
            <p class="font-italic">
                To control if drag should be enabled/disabled you can add the <strong>active</strong> parameter to the directive.
              </p>
              
<pre class="prettyprint lang-html">
<code>
  &lt;!-- Vue --&gt;
  &lt;mycomponent v-dragscroll="{ target: '.my-draggable-div', active: true }"&gt;
  &lt;/mycomponent&gt;
</code>
</pre>
          </div>
        </div>

        <div class="col-12 col-sm-6 mt-3 d-flex justify-content-center" >
          <div class="border border-danger bg-secondary my-draggable-div-parent"
          v-dragscroll="{ target: '.my-draggable-div', active: true }"
          v-on:dragscrollstart="eventTrigged('dragscrollstart')" v-on:dragscrollend="eventTrigged('dragscrollend')"
          v-on:dragscrollmove="eventTrigged('dragscrollmove', $event)">
          <div class="grab-bing my-draggable-div">
            <img src="./assets/image.jpg" alt="">
          </div>
          </div>
        </div>
      </div>

      <hr>

      <div class="row">
        <div class="col-12 col-sm-6 mt-3">
          <p>
            <strong>Ignore specific mouse buttons</strong>
          </p>
          <p>You can use the following modifiers:</p>
          <ul>
            <li><strong>noleft</strong></li>
            <li><strong>nomiddle</strong></li>
            <li><strong>noright</strong></li>
            <li><strong>noback</strong></li>
            <li><strong>noforward</strong></li>
          </ul>
          <div>
<pre class="prettyprint lang-html">
<code>
  &lt;div v-dragscroll.noleft="true"&gt; 
    &lt;div class="subContainer"&gt;...&lt;div&gt; 
  &lt;div&gt;
</code>
</pre>
        <i>This will not scroll using left click. (try with right click)</i>
          </div>
        </div>

        <div class="col-12 col-sm-6 mt-3 d-flex justify-content-center">
          <div class="big-box grab-bing border border-danger bg-secondary" v-dragscroll.noleft="true"
            v-on:dragscrollstart="eventTrigged('dragscrollstart')" v-on:dragscrollend="eventTrigged('dragscrollend')"
            v-on:dragscrollmove="eventTrigged('dragscrollmove', $event)">
            <img src="./assets/image.jpg" alt="">
          </div>
        </div>
      </div>

      <hr>

      <div class="row">
        <div class="col-12 mt-5 mb-3">
          <strong>EVENTS</strong> <br>
          <p>The directive provides 3 events.</p>
          <ul>
            <li><strong>dragscrollstart</strong></li>
            <li><strong>dragscrollmove</strong></li>
            <li><strong>dragscrollend</strong></li>
          </ul>
          <p>The dragscrollmove event includes a data object with the following format: </p>
<pre class="prettyprint">
  {
    detail: {
      deltaX: 0, // if using the x modifier, or no axis modifier
      deltaY: 0, // if using the y modifier, or no axis modifier
    },
  }
</pre>
          <p><strong>example:</strong></p>
          <pre class="prettyprint lang-html">
  &lt;div v-dragscroll  v-on:dragscrollstart="doSomething" v-on:dragscrollmove="doSomething(params, $event.detail.deltaX)" v-on:dragscrollend="doSomething"&gt;
    ...
  &lt;/div&gt;
</pre>
        </div>

      </div>

      <div class="row my-5">
        <div>
          Credit: <a href="http://asvd.github.io/dragscroll/" target="_blank">Javascript dragscroll library</a>
          <br>
          Follow Me: <a href="https://twitter.com/don_jon243" target="_blank">@don_jon243</a>
          <br>
          Photo by <strong>Toa Heftiba</strong> on <a href="https://unsplash.com/">Unsplash</a>
        </div>
      </div>
  </div>
</template>

<style scoped>
    .big-box {
      width: 300px;
      height: 300px;
      overflow: scroll;
    }
    
    .my-draggable-div-parent {
      width: 300px;
      height: 500px;
    }
    
    .my-draggable-div {
      margin: 25px;
      width: 250px;
      height: 250px;
      overflow: scroll;
    }

    .oh {
      overflow: hidden;
    }

    .small-box {
      width: 50px;
      height: 50px;
      display: inline-block;
    }

    p.p {
      margin: 25px;
      white-space: nowrap;
    }

    .grab-bing {
      cursor : -webkit-grab;
      cursor : -moz-grab;
      cursor : -o-grab;
      cursor : grab;
    }
    .grab-bing:active {
      cursor : -webkit-grabbing;
      cursor : -moz-grabbing;
      cursor : -o-grabbing;
      cursor : grabbing;
    }

    .scroller-container {
      height: 300px;
      overflow: auto;
    }

    .scroller {
      height: 600px;
    }
</style>
