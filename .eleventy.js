const htmlmin = require('html-minifier');
const dateFns = require('date-fns');
const path = require('path');
const img2picture = require('eleventy-plugin-img2picture');
const externalLinks = require('eleventy-plugin-external-links');
const markdownIt = require('./markdown.js');
const yaml = require('js-yaml');

const generateThumbnail = require('./eleventy/shortcodes/thumbnails');
const basefilename = require('./eleventy/filters/basefilename');

const INPUT_DIR = 'src';
const OUTPUT_DIR = '_site';


// TODO: this only intended for development (to speed up build time)
// const isProduction = process.env.ELEVENTY_ENV === 'production';
const isProduction = false;

const BASEURL = `${process.env.BASEURL ? process.env.BASEURL : ''}`

module.exports = function (eleventyConfig) {

  // set site.url according to env var (if provided, see BASEURL above)

  eleventyConfig.addGlobalData('site', {
    url: BASEURL,
    // add other global data as needed
  });


  // Enable YAML files format data!
  eleventyConfig.addDataExtension('yml', (contents) => yaml.load(contents));
  eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents));

  eleventyConfig.setLibrary('md', markdownIt);

  eleventyConfig.setEjsOptions({
    rmWhitespace: true,
    context: {
      dateFns,
    },
  });

  eleventyConfig.setBrowserSyncConfig({
    files: './_site/assets/styles/main.css',
    open: true,
  });

  eleventyConfig.addFilter('basefilename', basefilename);

  eleventyConfig.addNunjucksAsyncShortcode(
    'thumbnail',
    generateThumbnail({
      inputDir: INPUT_DIR,
      // img2picture plugin expects image files in INPUT_DIR.
      // So, during prodution build we keeping generated thumbnail images in
      // INPUT_DIR itself. img2picture will generate optimised image files and
      // copy to OUTPUT_DIR.
      // These generated thumbnails in INPUT_DIR are cleaned by
      // 'clean:thumbnails' NPM run script.
      outputDir: isProduction ? INPUT_DIR : OUTPUT_DIR,
      destPath: 'assets/images/',
    })
  );

  if (isProduction) {
    eleventyConfig.addPlugin(img2picture, {
      eleventyInputDir: INPUT_DIR,
      imagesOutputDir: `${OUTPUT_DIR}/assets/images`,
      urlPath: `${BASEURL}/assets/images/`,
      extensions: ['jpg', 'png', 'jpeg'],
      formats: ['avif', 'webp', 'jpeg'],
      minWidth: 200,
      maxWidth: 1500,
      widthStep: 200,
      filenameFormat: function (id, src, width, format) {
        const extension = path.extname(src);
        const name = path.basename(src, extension);
        return `${name}-${width}w.${format}`;
      },
    });

    eleventyConfig.addPlugin(externalLinks, {
      name: 'external-links',
      // add exception for mastodon link where we explicitly want to specify rel="me"
      regex: /^(([a-z]+:)(?!\/\/mastodon)|(\/\/))/i,
      target: '_blank',
      rel: 'noopener',
      extensions: ['.html'],
      includeDoctype: true,
    });

    eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
      if (outputPath.endsWith('.html')) {
        const minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
          minifyJS: true,
        });
        return minified;
      }

      return content;
    });
  }

  // Copy files static files
  eleventyConfig.addPassthroughCopy({ ['public']: '.' });
  eleventyConfig.addPassthroughCopy(`${INPUT_DIR}/assets/images`);
  eleventyConfig.addPassthroughCopy("./src/.htaccess");

  return {
    htmlTemplateEngine: 'njk',
    dir: {
      input: INPUT_DIR,
      output: OUTPUT_DIR,
      // data: '_data' // Default is '_data'
    },
  };
};
