var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var drafts      = require('metalsmith-drafts')
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var serve       = require('metalsmith-serve');

Metalsmith(__dirname)
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
  .use(serve())
  .build(function(err, files) {
    if (err) { throw err; }
  });
