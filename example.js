const Cronodile = require('./')

const jobOne = new Cronodile('id')
const jobTwo = new Cronodile('id')

jobOne
	.command(() => {
		console.log('[JOB1] run your command here')
	})
	.run('setiap menit')

jobTwo.command(() => {
		console.log('[JOB2] run your command here')
	})
	.run('setiap menit')

// cron
//   .fromFile('./example_file')
//   .run('setiap menit')