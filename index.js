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

	fromFile(filePath) {
		const file = require(filePath)

		if (typeof file === "undefined") throw new Error('Invalid file path')
		if (typeof file !== "function") throw new Error('Invalid function')

		this.command = file
		return this
	}

	command(command) {
		this.command = command
		return this
	}

	run(time) {
		const cronTime = (typeof time === "string") ? this.meta[time.replace(/ /g, '-')] : time

		if (cronTime) {
			const cronCommand = (typeof time === "string") ? dictionary[cronTime] : cronTime
			const cronFunction = () => {
				console.log(`[Cronodile] Command ${cronCommand.text} at ${new Date().toLocaleTimeString()}`)
				this.command()
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
