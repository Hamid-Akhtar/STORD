const shortnerUrl = require("../models/shortenerUrl");

module.exports.addURL = async (obj) => {
  try {
    let shortUrl = "";
    let ShortUrlExists = true;
    if (obj.actualUrl) {
      while (ShortUrlExists) {
        shortUrl = Math.random().toString(26).substring(4);
        const exists = await shortnerUrl.find({ customUrl: shortUrl });
        if (exists) {
          ShortUrlExists = false;
        }
      }
    }

    const url = new shortnerUrl({
      actualUrl: obj.actualUrl,
      customUrl: shortUrl,
    });
    await url.save();
    return { response: shortUrl };
  } catch (e) {
    console.log(e);
  }
};

module.exports.getShortUrl = async (value) => {
  try {
    const exists = await shortnerUrl.find({ customUrl: value });
    return { response: exists };
  } catch (e) {
    console.log(e);
  }
};
