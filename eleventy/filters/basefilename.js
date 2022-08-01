const path = require('path');

function basefilename(filePath) {
  const extension = path.extname(filePath);
  const name = path.basename(filePath, extension);
  return name;
}

module.exports = basefilename;
