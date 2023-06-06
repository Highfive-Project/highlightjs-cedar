/*
Language: Cedar
Description: Cedar is a language for defining permissions as policies, which describe who should have access to what. It is also a specification for evaluating those policies.
Website: https://www.cedarpolicy.com
Category: web
*/

module.exports = function (hljs) {
  const KEYWORD = {
    match:
      /(?:forbid|permit|def|let|else|then|if|has|advice|is|where|in|unless|when|for)\b/,
    scope: "keyword",
  };

  const TEMPLATE = {
    match: /(?:\?resource|\?principal)\b/,
    scope: "built_in",
  };

  const SPECIAL_VARIABLE = {
    match: /(?:resource|principal|context|resource|action|this)\b/,
    scope: "variable.language",
  };

  const LITERAL = {
    match: /(?:true|false)\b/,
    scope: "literal",
  };

  const OPERATOR = {
    match: /(?:::|==|!=|>|<|>=|<=|&&|\|\|)/,
    scope: "operator",
  };

  const PUNCTUATION = {
    match: /(?:,|;|\.|\[|\]|\(|\)|{|})/,
    scope: "punctuation",
  };

  return {
    contains: [
      KEYWORD,
      LITERAL,
      SPECIAL_VARIABLE,
      TEMPLATE,
      OPERATOR,
      PUNCTUATION,
      hljs.NUMBER_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_LINE_COMMENT_MODE,
    ],
  };
};
