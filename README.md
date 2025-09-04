# Website - Bits und Bäume 2022

Based on [Eleventy Starter Boilerplate](https://github.com/ixartz/Eleventy-Starter-Boilerplate)


### To Create a new Post (with Markdown and Frontmatter) you can use the convenient Form in B&B Wiki

https://wiki.bits-und-baeume.org/arbeitsgruppen/ag-website/posts/start

Write to it [at] bits-und-baeume dot org if you think you should have access to the wiki.


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
git clone https://github.com/bitsundbaeume/bits-und-baeume.org.git b-und-b
cd b-und-b
npm install && npm run prepare
```


This might also be necessary: Install latest version of eleventy, see also [eleventy github repo](https://github.com/11ty/eleventy)
```
npm install --save-dev @11ty/eleventy
```


Should return at least version 2.0.1
```
npx @11ty/eleventy --version
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

### Deployment and preview


The data in this repository runs the website <https://bits-und-baeume.org> which is maintained by multiple people. As for any complex digital project multiple versions exist which need to be managed to avoid confusion. This project uses git-branches to manage the different versions: each version has its own branch. Every contributor can create their own branch (must be a named like a valid file name and only contain ascii characters but no spaces).

Currently (2023-05-21), the deployment for production and (experiemental) development is separated:

#### Production deployment (and dev preview)

If you edit or push to <https://github.com/bitsundbaeume/bits-und-baeume.org> a webhook to `bubweb.uber.space` is triggered. The result depends on the branch:

- `dev` branch: the built result is available at <https://staging.bits-und-baeume.org> (for preview purpose)
- `main` branch: the built result is available at <https://bits-und-baeume.org>
- any other branch: the webhook is ignored


#### Additional preview infrastructure

If you edit or push to <https://codeberg.org/bits-und-baeume/bits-und-baeume.org> a webhook to `bubdd.uber.space` is triggered. The build process is triggered for any branch.
After about 3 min the build-result of your branch is available at [https://bubdd.uber.space/stamm/vorschau/\<branchname\>](https://bubdd.uber.space/stamm/vorschau/).

**Background:**

This additional preview infrastructure was added after the original built system and – for stability reasons – should interfere as little as possible with it. It is based on [flabbs](https://codeberg.org/cknoll/flabbs/) (flask based build system).

### Contributing

There are several ways of contributing:

- using the web front end of github or codeberg
	- pro: no local installation required, everything happens in browser
	- pro: good for fixing typos, changing content of modest complexity (copy-paste-adapt)
	- con: testing changes requires a complete run of the build system (3 min)
	- remark: The **github** repo is connected to the build system for the **official version** of the website. To prevent accidental damage only limited people have write access to this repo. On the other hand the **codeberg** repo is only connected to the build system for the **preview versions**. Here we can be much more liberal with write access to the repo. Due to the capabilities of git to work with multiple remote repositories transfering commits from codeberg to github is simple. E.g. `git pull codeberg`, `git push github` (assuming a suitable configuration of remotes).
- using `git` (version control system) and `eleventy` (node-based static site generator) on your local system
	- pro: good for big changes, maximum flexibility and control
	- con: requires some knowledge of git and installation of local software

Of course, if you have any question: please ask (use website room in matrix, open an issue or write an email)

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
