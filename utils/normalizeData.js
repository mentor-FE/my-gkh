export function replaceEscapedQuotesAndWrap(str) {
  let replaced = str.replace(/\\\"/g, '"');
  return `${replaced}`;
}