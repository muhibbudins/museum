const Cronodile = require('./')

const jobOne = new Cronodile.create('id')
const jobTwo = new Cronodile.create('id')

jobOne
	.command(() => {
		console.log('[JOB1] run your command here ')
	})
	.run(Cronodile.time.EVERY_EVEN_SECOND)

jobTwo.fromFile('./example_file').run('setiap menit')

setTimeout(function() {
	jobTwo.api.stop()
}, 120000)