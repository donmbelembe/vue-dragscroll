# vue-dragscroll

vue-dragscroll is a micro vue.js directive which
enables scrolling via holding the mouse button ("drag and drop" or
"click and hold" style, [online
demo](https://donmbelembe.github.io/vue-dragscroll/)).

## Installation

#### Via npm

```sh
$ npm install vue-dragscroll
```

Then, in your JavaScript file:

```js
import dragscroll from 'vue-dragscroll'

// Register dragscroll globally
Vue.directive('dragscroll', dragscroll)

// Or, register it locally in a component
export default {
  name: 'MyComponent',
  directives: {
    'dragscroll': dragscroll
  },
}
```

#### Via cdn

Download the and unpack
[distribution](https://github.com/donmbelembe/vue-dragscroll/releases)

```html
<script src="path/to/vue-dragscroll.min.js"></script>
<!-- OR -->
<script src="https://unpkg.com/vue-dragscroll"></script>
```

## Usage

Add the `v-dragscroll` directive to a scrollable element:

```html
<div v-dragscroll>
    Big text goes here...
</div>
```

That's it! Now you can scroll it by dragging.

Keep in mind that now it is not possible to select the content with
mouse, so apply the `cursor: default;` CSS style to prevent confusing
the users (or even `cursor: grab;` in case the content is not a text).
```css
/* EXEMPLE */
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
```

You can also add the `:nochilddrag` argument to the v-dragscroll,
which will only enable drag-scrolling for an element itself, but not
for its subchildren. This can be usefull, if you want to enable the
scrolling the area by dragging its empty space, but keep the
opportunity to select the text (see
[example](http://asvd.github.io/jailed/demos/web/process/)).
```html
<div v-dragscroll:nochilddrag>
  ...content
</div>
```

If you wish to handle enable/disable dragscrolling, you can pass a `boolean` as value (This doesn't apply for mobile)
```html
<div v-dragscroll="false">
  ...content
</div>
```

If you wish to scroll only Vertically or Horizotally, you can use `x` or `y` modifiers.
```html
<div v-dragscroll.x="false">
  ...content
</div>
<div v-dragscroll.y="false">
  ...content
</div>
```

## Events

The directive provides 3 events.

* dragscrollstart
* dragscrollmove
* dragscrollend

Example:

```html
<div
  v-dragscroll
  v-on:dragscrollstart="doSomething"
  v-on:dragscrollmove="doSomething"
  v-on:dragscrollend="doSomething"
>
..Content
<div>
```

Follow me on twitter: https://twitter.com/don_jon243
