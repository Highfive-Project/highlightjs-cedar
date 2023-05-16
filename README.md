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
    Smithy code...
  </code>
</pre>
...
<link rel="stylesheet" href="path/to/theme.css" />
<script src="path/to/highlight.min.js"></script>
<script src="path/to/hljs-cedar.min.js"></script>
<script>
  hljs.registerLanguage("cedar", hljsSmithy);
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
namespace example.weather

service Weather {
    version: "2006-03-01",
    resources: [City],
    operations: [GetCurrentTime]
}

resource City {
    identifiers: { cityId: CityId },
    read: GetCity,
    list: ListCities,
    resources: [Forecast],
}
`;

hljs.registerLanguage("smithy", hljsSmithy);
const result = hljs.highlight(code, {
  language: "smithy",
});
```
