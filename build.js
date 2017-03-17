const Metalsmith  = require('metalsmith');
const markdown    = require('metalsmith-markdown');
const drafts      = require('metalsmith-drafts')
const layouts     = require('metalsmith-layouts');
const permalinks  = require('metalsmith-permalinks');
const debug       = require('metalsmith-debug');

module.exports = () => {
  return Metalsmith(__dirname)
  .metadata({
    title: "My Static Site & Blog",
    description: "It's about saying »Hello« to the World.",
    generator: "Silkscreen",
    url: "http://silkscreenjs.com/"
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(drafts())
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars'
  }))
  .use(debug())
  .build(function(err, files) {
    if (err) {
      throw err;
    } else {
      console.log('build completed');
    }
  });
};
