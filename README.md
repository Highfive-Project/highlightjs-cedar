# highlightjs-cedar

Highlight.js syntax for Cedar

## Use in browser

Get `hljs-cedar.min.js` from [latest
release](https://github.com/jasmaa/highlightjs-cedar/releases) or build
`hljs-cedar.min.js` with:

```
yarn build
```

Include in HTML page:

```html
<pre>
  <code class="language-cedar">
    Cedar code...
  </code>
</pre>
...
<link rel="stylesheet" href="path/to/theme.css" />
<script src="path/to/highlight.min.js"></script>
<script src="path/to/hljs-cedar.min.js"></script>
<script>
  hljs.registerLanguage("cedar", hljsCedar);
  hljs.highlightAll();
</script>
```

## Use in Node

Install packages:

```
npm install highlight.js
npm install highlightjs-cedar
```

Import modules in Node:

```js
const hljs = require("highlight.js");
const hljsSmithy = require("highlightjs-cedar");

const code = `
// Users can edit their own info, admins can edit anyone's info
permit (
    principal,
    action,
    resource in HealthCareApp::InfoType::"accountinfo"
)
when {
    resource.subject == principal ||
    principal in HealthCareApp::Role::"admin"
};

//A patient may create an appointment for themselves, or an administrator can do it
permit (
    principal,
    action == HealthCareApp::Action::"createAppointment",
    resource
)
when {
    (context.referrer in HealthCareApp::Role::"doctor"  && resource.patient == principal) ||
    principal in HealthCareApp::Role::"admin"
};
`;

hljs.registerLanguage("cedar", hljsCedar);
const result = hljs.highlight(code, {
  language: "cedar",
});
```
