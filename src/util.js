export const toBase64 = (data, encoding) =>
  Buffer.from(data, encoding).toString('base64');

export const fromBase64 = (data, encoding) =>
  Buffer.from(data, 'base64').toString(encoding);

export const toDataURI = (mimeType, data, encoding = 'utf-8') =>
  `data:${mimeType};charset=${encoding};base64,${toBase64(data, encoding)}`;

export const fromDataURI = (data, encoding = 'utf-8') =>
  fromBase64(data.split(',')[1], encoding);
