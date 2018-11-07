const CronJob = require('cron').CronJob
const dictionary = require('./source/dictionary.json')
const timeVariable = require('./source/variable')

class Cronodile {
	constructor(language, options) {
		try {
			this.meta = require(`./source/meta/${language || 'en'}.json`)
		} catch (error) {
			console.log('JSON file for meta language is not exist')
			process.exit(1)
		}

		const config = {
			timezone: 'Asia/Jakarta'
		}

		this.options = Object.assign(config, options)
	}

	command(command) {
		if (typeof command === "function") {
			this.command = command
			return this
		} else if (typeof command === "string") {
			this.command = require(command)
			return this
		} else {
			console.info('Command type unsupported')
			process.exit(1)
		}
	}

	run(time) {
		const cronTime = (typeof time === "string") ? this.meta[time.replace(/ /g, '-')] : time

		if (cronTime) {
			const cronCommand = (typeof time === "string") ? dictionary[cronTime] : cronTime
			const cronFunction = () => {
				console.log(`[Cronodile] Command ${cronCommand.text} at ${new Date().toLocaleTimeString()}`)
			
				this.command.bind(this)(this.api)
			}

			this.api = new CronJob(cronCommand.value, cronFunction, null, true, this.options['timezone'])
		}

		return this
	}
}

module.exports = {
	create: Cronodile,
	time: timeVariable
}
