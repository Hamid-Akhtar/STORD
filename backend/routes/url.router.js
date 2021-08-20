const express = require("Express");
const router = express.Router();
const validator = require('express-joi-validation').createValidator({})
const validationSchema = require("../Validations/validationSchema")
const urlController = require("../controllers/url.controller");

//Add Custom URL
router.post("/", validator.body(validationSchema.bodySchema) ,async (req, res) => {
  let obj = req.body;
  const response = await urlController.addURL(obj);
  res.json(response);
});

//get specific URL
router.get("/:slug",validator.params(validationSchema.paramSchema), async (req, res) => {
  let slug = req.params.slug;

  const response = await urlController.getShortUrl(slug);
  res.json(response);
});

module.exports = router;
