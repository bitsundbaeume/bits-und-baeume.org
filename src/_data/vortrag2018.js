const { default: axios } = require('axios');

module.exports = async () => {
  try {
    const res = await axios.get('https://api.media.ccc.de/public/conferences/bub2018');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
