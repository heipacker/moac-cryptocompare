/**
 * Created by heipacker on 17-12-13.
 */
const AbstractError = require('./AbstractError');
const util = require('util');

/**
 * 应用异常类
 * @param msg
 * @param status　http状态
 * @param code　result对象里的code
 * @constructor
 */
function ApplicationError(msg, status, code) {
    msg = msg || 'Custom Error';
    this.status = status;
    this.code = code;
    ApplicationError.super_.call(this, msg, this.constructor);
}

util.inherits(ApplicationError, AbstractError);
ApplicationError.prototype.name = 'Custom Error';

module.exports = ApplicationError;
