const chalk = require('chalk');
/**
 * 描述
 * @date 2020-12-08
 * @param {any} request
 * @param {any} response
 * @param {any} next
 * @returns {any}
 */
module.exports = (request,response,next) => {
    console.log(chalk.red(`Current Request Url ${request.url} Not Found`));
    next();
}