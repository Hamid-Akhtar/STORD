const Joi = require('joi');

module.exports.paramSchema = Joi.object({
    slug: Joi.string().required()
  });

module.exports.bodySchema = Joi.object({
    actualUrl: Joi.string().required()
  });