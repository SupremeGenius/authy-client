'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = verificationViaAssert;

var _validator = require('validator.js');

var _lodash = require('lodash');

var _enums = require('../enums');

/**
 * Verification via choices.
 */

const choices = (0, _lodash.values)(_enums.verificationVia);

/**
 * Export `VerificationViaAssert`.
 */

/**
 * Module dependencies.
 */

function verificationViaAssert() {
  // Class name.
  this.__class__ = 'VerificationVia';

  // Validation algorithm.
  this.validate = value => {
    if (!(0, _lodash.isString)(value)) {
      throw new _validator.Violation(this, value, { value: _validator.Validator.errorCode.must_be_a_string });
    }

    try {
      _validator.Assert.choice(choices).validate(value);
    } catch (e) {
      throw new _validator.Violation(this, value, e.violation);
    }

    return true;
  };

  return this;
}
module.exports = exports['default'];