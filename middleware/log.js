const chalk = require('chalk');
module.exports =(request,response,next) => {
    console.log(chalk.blue(`Current Request Url ${request.url}`));
    next();
}