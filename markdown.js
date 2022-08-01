const markdownItDefault = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

// you can use any plugins and configs you want
const markdownIt = markdownItDefault({
  html: true,
  breaks: false,
  linkify: true,
});

markdownIt.use(markdownItAttrs, {
  allowedAttributes: ['id', 'class']
})

module.exports = markdownIt;
