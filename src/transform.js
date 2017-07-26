import axios from 'axios';
import UglifyJS from 'uglify-js';

import { toDataURI } from './util';

const inlineScript = ($, fetch, config) => async el => {
  const src = $(el).attr('src');
  if (!src || !config.inlineResource(el)) {
    return;
  }
  let contents = null;
  try {
    contents = await fetch(src, { encoding: 'utf8' });
  } catch (err) {
    if (typeof config.onBailout === 'function') {
      config.onBailout(err, 'script', el);
    }
    return;
  }
  const { code } = UglifyJS.minify(contents);
  $(el).attr('src', toDataURI('text/javascript', code));
  $(el).attr('charset', 'utf-8');
  if (typeof config.onSuccess === 'function') {
    config.onSuccess('script', el);
  }
};

const transform = async ($, config) => {
  const agent = axios.create(Object.assign({ method: 'get' }, config.fetch));
  const fetch = (...args) => agent(...args).then(res => res.data);
  const scripts = $('script[src]')
    .toArray()
    .map(inlineScript($, fetch, config));

  await Promise.all([...scripts]);
  return $;
};

export default transform;
