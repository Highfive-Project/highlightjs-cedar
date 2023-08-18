/*
Language: Cedar
Description: Cedar is a language for defining permissions as policies, which describe who should have access to what. It is also a specification for evaluating those policies.
Website: https://www.cedarpolicy.com
Category: web
*/

module.exports = function (hljs) {
  const KEYWORD = {
    match:
      /\b(?:forbid|permit|else|then|if|has|advice|is|where|in|unless|when|for|like)\b/,
    scope: "keyword",
  };

  const TEMPLATE = {
    match: /(?:\?resource|\?principal)\b/,
    scope: "variable.language",
  };

  const SPECIAL_VARIABLE = {
    match: /\b(?:resource|principal|context|resource|action|this)\b/,
    scope: "variable.language",
  };

  const LITERAL = {
    match: /\b(?:true|false)\b/,
    scope: "literal",
  };

  const OPERATOR = {
    match: /(?:::|==|!=|>|<|>=|<=|&&|\|\||\+|-|\*|!)/,
    scope: "operator",
  };

  const FUNCTION = {
    match: /(ip|decimal)(?=\()/,
    scope: "title.function",
  };

  const DOT_OPERATOR = {
    match:
      /(?<=\.)(?:contains|containsAll|containsAny|lessThan|lessThanOrEqual|greaterThan|greaterThanOrEqual|isIpV4|isIpV6|isLoopback|isMulticast|isInRange)(?=\()/,
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
      FUNCTION,
      OPERATOR,
      DOT_OPERATOR,
      PUNCTUATION,
      hljs.NUMBER_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_LINE_COMMENT_MODE,
    ],
  };
};
