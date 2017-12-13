/**
 * Created by heipacker on 17-12-13.
 */
const util = require('util');

function AbstractError(msg, constr) {
    if (!(this instanceof AbstractError)) {
        return new AbstractError(msg);
    }
    Error.captureStackTrace(this, constr || this.constructor);
    this.message = msg || 'Error'
}

util.inherits(AbstractError, Error);

AbstractError.prototype.name = 'Abstract Error';

module.exports = AbstractError;