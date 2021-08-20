const urlShortener = require('./../controllers/url.controller');
const assert = require('assert').strict;
const app = require('./../index')



describe("ShortenURL", async() => {

    var actualUrl = 'http://www.google.com'
    const obj = {
        actualUrl
    }
    it("[URL will be shorten]", () => {
        
        urlShortener.addURL(obj).then((res)=>{
            assert.notStrictEqual(res.response,'')
        })
        

    });

    it("[Retrieve actual URL from shorten URL ]", () => {
        urlShortener.addURL(obj).then((res)=>{
            urlShortener.getShortUrl(res.response).then((resp)=>{
                assert.strictEqual(actualUrl, resp.response[0].actualUrl)
            })
        })
        

    });
});