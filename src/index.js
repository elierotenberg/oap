import cheerio from 'cheerio';
import merge from 'lodash.merge';

import transform from './transform';
import defaultConfig from './defaultConfig';

const transformHtml = async (html, _config = {}) => {
  const config = merge({}, defaultConfig, _config);
  const $ = cheerio.load(html);
  await transform($, config);
  return $.html();
};

export default transformHtml;
