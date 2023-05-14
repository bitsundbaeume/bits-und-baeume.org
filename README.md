# Website - Bits und Bäume 2022

Based on [Eleventy Starter Boilerplate](https://github.com/ixartz/Eleventy-Starter-Boilerplate)

### Features


<details>
<summary>
Production-ready in mind:
</summary>




-   🔥 [11ty](https://www.11ty.dev) for Static Site Generator
-   🎨 Integrate with [Tailwind CSS](https://tailwindcss.com)
-   💅 [PostCSS](https://postcss.org) for processing [Tailwind CSS](https://tailwindcss.com)
-   🖥️ Process image sizes and formats with [eleventy-plugin-img2picture](https://github.com/saneef/eleventy-plugin-img2picture)
-   ✨ Compress image with [Imagemin](https://github.com/imagemin/imagemin)
-   🔗 Add '\_blank' and 'noopener' to external links with [eleventy-plugin-external-links](https://github.com/vimtor/eleventy-plugin-external-links)
-   ☕ Minify HTML & CSS with [HTMLMinifier](https://www.npmjs.com/package/html-minifier) and [cssnano](https://cssnano.co)
-   ✏️ Linter with [ESLint](https://eslint.org)
-   🛠 Code Formatter with [Prettier](https://prettier.io)
-   💨 Live reload
-   📦 Module Bundler with [Webpack](https://webpack.js.org)
-   🦊 Templating with [EJS](https://ejs.co)
-   🤖 SEO metadata and [Open Graph](https://ogp.me/) tags
-   ⚙️ [JSON-LD](https://developers.google.com/search/docs/guides/intro-structured-data) for richer indexing
-   🗺 Sitemap.xml
-   ⚠️ 404 page
-   📖 Pagination
-   ✅ Cache busting
-   💯 Maximize lighthouse score

</details>

### Requirements

-   Node.js and npm

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/bitsundbaeume/bits-und-baeume.org.git b-und-b
cd b-und-b
npm install && npm run prepare
```
### Local development (unofficial, fast)


Recommended testing command for **reduced build time**:

Instead of the officially recommended `npm run dev` you might want use

```
npx @11ty/eleventy --serve --incremental --ignore-initial
```

and manually open the preview on <http://localhost:8080/>.

Advantage: It only re-builds changed files → much faster, no system freeze.

**Note:**

- This probably only works if the whole site was *once* already built completely by `npm run dev`.
- Only changed files are built, thus, one might need to add an empty line etc to trigger the build.


### Local development (official, might be slow)


You can run locally in development mode with live reload:

```
npm run dev
```


Open http://localhost:8080 with your favorite browser to see your blog.

See http://localhost:8080/elemente/ to see all styled design elements.


in a second console for local backend.

Then open http://localhost:8080/admin/ to see the admin interface.

### Project structure

```
.
├── public                # Static files
│   └── assets
│       └── images        # Images not needed by Webpack (like most svg or gif)
│          └── social     # Social Images used for Social Media via frontmatter "socialimage:"
└── src
    ├── _data             # Eleventy data folder
    ├── _includes
    │   └── layouts       # HTML layout files
    │   └── partials      # template parts
    ├── assets            # Assets folder that needs to be processed by Webpack
    │   ├── images        # Images like jpg, png, jpeg - and all files linked to in CSS files
    │   │   ├── galleries # Images used in galleries
    │   │   └── posts     # Images used in your blog posts (will be compressed by Webpack)
    │   └── styles        # Your blog CSS files
    └── different folders # holding your content
```

### Customization

You can easily change base settings of this boilerplate. Please change the following files:

-   `src/_data/site.json`: your configuration
-   `src/_includes/layouts`: your HTML layout
-   `src/_includes/partials`: change mainmenu or favicons here
-   `src/assets/styles/main.css`: your CSS file using Tailwind CSS
-   `src/elemente.njk`: all styled design elements

### Testing



Before deploying to production it's a good idea to test the build result by building it locally and run tests against it. At the moment the package.json scripts for testing are not running stable. To test your site please use:

```
npm run serve
```

to build and run the website locally.

In another console you can now run tests. For checking all links with broken-link-checker and for tests of performance, accessibility, best practices and security with hint:

```
blc http://localhost:5000 -ro && hint http://localhost:5000
```

### Deploy to production

You can see the results locally in production mode with:

```
npm run serve
```

The generated HTML and CSS files are minified. It will also remove unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build
```

Now, your blog is ready to be deployed. All generated files are located at `_site` folder, which you can deploy with any hosting service.

### License

Even after many changes and further developments by the team of [ACB. all**codes**are**beautiful**](https://allcodesarebeautiful.com) we gladly continue to list the copyright of the original boilerplate on which our work is based. This is for legal reasons and out of gratitude for the initial work we could build on.

Licensed under the MIT License, Copyright © 2020

See [LICENSE](LICENSE) for more information.
