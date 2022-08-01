const path = require('path');
const sharp = require('sharp');
const debug = require('debug')('thumbnails');
const MemoryCache = require('../utils/memory-cache');

function getMemoryCacheKey(obj) {
  return JSON.stringify(obj);
}

function generateThumbnailShortCode({
  inputDir, outputDir, destPath = '', useCache = true,
}) {
  // Short for 'gallery-thumbnail'.
  // ⚠️ If you are changing this, update .gitignore and
  // 'clean:thumbnails' script in production
  const prefix = 'gt--';

  debug('inputDir:', inputDir);
  debug('outputDir:', outputDir);
  debug('destPath:', destPath);
  debug('Using cache:', useCache);
  const memCache = new MemoryCache();

  return async function thumbnailShortCode(filePath, width = 800) {
    const extension = path.extname(filePath);
    const name = path.basename(filePath, extension);

    const src = path.join(inputDir, filePath);
    const dest = path.join(outputDir, destPath, `${prefix}${name}${extension}`);
    const href = `/${path.join(destPath, `${prefix}${name}${extension}`)}`;

    let key;
    if (useCache) {
      key = getMemoryCacheKey({ dest, width });
      debug('Cache key: %o', key);

      const cached = memCache.get(key);
      if (cached) {
        debug('Found cached, returning %o', cached);
        return cached;
      }
    }

    debug(`Generating: ${src} → ${dest}`);
    const s = sharp(src);
    s.resize({ width });
    s.modulate({
      brightness: 1.0625,
    });
    s.tint({ r: 208, g: 226, b: 169 });
    s.gamma(1, 2); // https://sharp.pixelplumbing.com/api-operation#gamma

    await s.toFile(dest);

    if (useCache) {
      debug(`Adding to cache: ${href}`);
      memCache.add(key, href);
    }

    return href;
  };
}

module.exports = generateThumbnailShortCode;
