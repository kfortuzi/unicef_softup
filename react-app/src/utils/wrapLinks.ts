/* eslint-disable operator-linebreak */

export function wrapLinks(str: string): string {
  // eslint-disable-next-line no-useless-escape
  const urlRegex = /(https?:\/\/[^\s(){}\[\]]+)/g;

  const modifiedStr = str.replace(urlRegex, (url) => {
    const lastChar = url[url.length - 1];
    const urlWithoutLastChar = url.slice(0, -1);
    let wrappedUrl = url;

    if (
      lastChar === '(' ||
      lastChar === ')' ||
      lastChar === '{' ||
      lastChar === '}' ||
      lastChar === '[' ||
      lastChar === ']' ||
      lastChar === '.' ||
      lastChar === ',' ||
      lastChar === '!' ||
      lastChar === '?' ||
      lastChar === '`' ||
      lastChar === ' '
    ) {
      wrappedUrl = `<a href="${urlWithoutLastChar}" target="_blank">${urlWithoutLastChar}</a>${lastChar}`;
    } else {
      wrappedUrl = `<a href="${url}" target="_blank">${url}</a>`;
    }

    return wrappedUrl;
  });

  return modifiedStr;
}
