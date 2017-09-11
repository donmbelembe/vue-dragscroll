# vue-dragscroll

vue-dragscroll is a micro vue.js directive which
enables scrolling via holding the mouse button ("drag and drop" or
"click and hold" style, [online
demo](https://donmbelembe.github.io/vue-dragscroll/)).


### Usage


Download the and unpack
[distribution](https://github.com/donmbelembe/vue-dragscroll/releases),
or install it using [Npm](https://npmjs.com):`

npm:

```sh
$ npm install vue-dragscroll
```

Load the `vue-dragscroll.js` in a preferable way (that is an UMD module):

```html
<script src="path/to/vue-dragscroll.min.js"></script>
<!-- OR -->
<script src="https://unpkg.com/vue-dragscroll"></script>
```

Add the `v-dragscroll` directive to a scrollable element:

```html
<div v-dragscroll>
    Big text goes here...
</div>
```

That's it! Now you can scroll it by dragging. You can also add the
`v-dragscroll` directive to the `<body>` element and drag the whole page.

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

-

Follow me on twitter: https://twitter.com/Donbelembe
