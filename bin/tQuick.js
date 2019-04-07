#!/usr/bin/env node --harmony
'use strict'
// 定义脚手架的文件路径
process.env.NODE_PATH = __dirname + '/../node_modules/'
const program = require('commander')
// 定义当前版本
program
    .version(require('../package').version )

// 定义使用方法
program
    .usage('<command>');

/*program
    .command('--help')
    .description('查看可使用命令')
    .alias('-h')
    .action(() => {
        program.help()
    });*/

program
    .command('create')
    .description('创建项目')
    .alias('c')
    .action(() => {
        require('../src/create')()
    });


program.parse(process.argv);

if(!program.args.length){
    require('../src/create')()
}