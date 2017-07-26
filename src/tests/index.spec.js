const { describe, before, after, it } = global;
import { expect } from 'chai';
import cheerio from 'cheerio';
import express from 'express';
import fs from 'fs';
import path from 'path';
import util from 'util';
const readFile = util.promisify(fs.readFile);

import transformHtml from '../';
import { fromDataURI } from '../util';

const TEST_PORT = 8080;

describe('transformHtml', () => {
  let app = null;
  let server = null;
  before(done => {
    app = express().use(express.static(path.join(__dirname, 'fixtures')));
    server = app.listen(TEST_PORT, done);
  });

  after(() => server.close());

  it('should transform HTML file with script tags (scripts.html)', async () => {
    const bailouts = [];
    const successes = [];
    const config = {
      fetch: {
        baseURL: 'http://localhost:8080/',
      },
      onSuccess: (type, el) => successes.push({ type, el }),
      onBailout: (err, type, el) => bailouts.push({ err, type, el }),
    };
    const originalHtml = await readFile(
      path.join(__dirname, 'fixtures', 'scripts.html'),
      'utf-8',
    );
    const transformedHtml = await transformHtml(originalHtml, config);
    expect(bailouts).to.have.lengthOf(1);
    expect(bailouts[0].type).to.equal('script');
    expect(bailouts[0].el.attribs).to.have.property(
      'data-script-id',
      'not-found',
    );
    expect(successes).to.have.lengthOf(1);
    expect(successes[0].type).to.equal('script');
    expect(successes[0].el.attribs).to.have.property(
      'data-script-id',
      'hello-world',
    );

    const $ = cheerio.load(transformedHtml);
    const notFound = $('script[data-script-id="not-found"]').get(0);
    expect(notFound.attribs).to.have.property('src', 'not-found.js');
    const helloWorld = $('script[data-script-id="hello-world"]').get(0);
    const helloWorldInlinedSource = fromDataURI(helloWorld.attribs.src);
    expect(helloWorldInlinedSource).to.equal('console.log("Hello world!");');
  });
});
