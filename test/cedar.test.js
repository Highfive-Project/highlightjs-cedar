const fs = require("fs");
const path = require("path");
const hljs = require("highlight.js");
const hljsCedar = require("../src/cedar.js");

const filePaths = [
  "basic/permit.txt",
  "basic/permit-forbid.txt",
  "basic/sets.txt",
  "basic/attributes-1.txt",
  "basic/attributes-2.txt",
  "basic/undefined-scopes.txt",
  "basic/groups.txt",
  "basic/context.txt",
  "basic/templates.txt",
];

describe("Cedar syntax highlighting", () => {
  beforeAll(() => {
    hljs.registerLanguage("cedar", hljsCedar);
  });

  test.each(filePaths)("highlights syntax for %s", (filePath) => {
    const code = fs.readFileSync(path.join(__dirname, filePath), "utf8");
    const result = hljs.highlight(code, {
      language: "cedar",
    });
    expect(result.value).toMatchSnapshot();
  });
});
