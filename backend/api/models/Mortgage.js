/**
 * Mortgage.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true,
    },
    address: {
      type: 'string',
      required: true,
    },
    phoneNumber: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
    },
    loanAmount: {
      type: 'string'
    },
  },

};

