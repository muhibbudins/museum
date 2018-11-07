const Cronodile = require('./')

const jobOne = new Cronodile.create('id')
const jobTwo = new Cronodile.create('id')
const jobThree = new Cronodile.create('en')

jobOne
	.command(function() {
		console.log('[Job 01] run your command here')

		console.info(this.api.running) // true
	})
	.run(Cronodile.time.EVERY_10_SECONDS)

jobTwo
	.command((api) => {
		console.log('[Job 02] run your command here')

		console.info(api.running) // true
	})
	.run(Cronodile.time.EVERY_30_SECONDS)

jobThree.command('./example_file').run('every 10 seconds')

// stop jobTwo after 20 seconds
setTimeout(function() {
	jobTwo.api.stop()
}, 1000 * 20)