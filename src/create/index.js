const chalk = require('chalk');
const exec = require('child_process').exec;
const path = require('path');
const co = require('co');
const prompt = require('co-prompt');
module.exports = () => {
    co(function* () {
        let projectName = yield prompt('Project name: ')
        console.log(chalk.white('start(开始)...'))
        let cmdStr = `git clone https://github.com/tangqq/react-admin.git ${projectName} `;
        const clild = exec(cmdStr, (error, stdout, stderr) => {
            if (error) {
                console.log(error)
                process.exit('error')
            }
            console.log(chalk.green('\n √ Generation completed!(创建完成)'));

            console.log(chalk.white('npm(开始安装依赖包)...'));
            const install = exec(`cd ${projectName} && npm install`, (error, stdout, stderr) => {
                if (error) {
                    console.log(error)
                    process.exit('error')
                }
                console.log('安装完成')
                process.exit('success')
            })
            install.stdout.on('data',(data)=>{
                console.log('stdout:',data)
            });
            install.stderr.on('data',data=>{
                console.log('stderr:',data)
            })
        })
        clild.stdout.on('data',(data)=>{
            console.log('stdout:',data)
        });
        clild.stderr.on('data',data=>{
            console.log('stderr:',data)
        })
    })
}