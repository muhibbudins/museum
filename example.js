const Cronodile = require('./')
const cron = new Cronodile('id')

cron
  .command(() => {
    console.log('run your command here')
  })
  .run('setiap menit')