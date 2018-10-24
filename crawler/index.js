/**
 * 
 * Dictionary JSON Generator
 * 
 * This file is master crawler to create "dictionary.json", this
 * file will loop any example link on this page (https://crontab.guru/examples.html)
 * and then open each link on new puppeteer page. After that,
 * the crawler will read "human readable" div and "input" element
 * as crontab formula.
 *
 * ! DISCLAIMER 
 * 
 * THIS FILE JUST FOR EDUCATE ANOTHER DEVELOPER ABOUT HOW TO
 * CRAWL AJAX WEBSITE USING GOOGLE PUPPETEER. DON'T RUN IT, EXCEPT
 * YOU USE THIS FILE JUST FOR PERSONAL USE.
 * 
 * ! WARNING 
 * 
 * This crawler creating 70 new page on puppeteer browser and then
 * it'll be showing memory leak warning. So, if you want copy this
 * for personal use. You must thinking about memory usage too.
 * 
 */
const fs = require('fs')
const puppet = require('puppeteer')

const source = [
  'every minute',
  'every 1 minute',
  'every 2 minutes',
  'every even minute',
  'every uneven minute',
  'every 3 minutes',
  'every 4 minutes',
  'every 5 minutes',
  'every five minutes',
  'every 6 minutes',
  'every 10 minutes',
  'every 15 minutes',
  'every fifteen minutes',
  'every ten minutes',
  'every quarter hour',
  'every 20 minutes',
  'every 30 minutes',
  'every hour at 30 minutes',
  'every half hour',
  'every 60 minutes',
  'every hour',
  'every 1 hour',
  'every 2 hours',
  'every two hours',
  'every even hour',
  'every other hour',
  'every 3 hours',
  'every three hours',
  'every 4 hours',
  'every 6 hours',
  'every six hours',
  'every 8 hours',
  'every 12 hours',
  'hour range',
  'between certain hours',
  'every day',
  'daily',
  'once a day',
  'every night',
  'every day at 1am',
  'every day at 2am',
  'every day 8am',
  'every morning',
  'every midnight',
  'every day at midnight',
  'every night at midnight',
  'every sunday',
  'every monday',
  'every tuesday',
  'every wednesday',
  'every thursday',
  'every friday',
  'every friday at midnight',
  'every saturday',
  'every weekday',
  'weekdays only',
  'monday to friday',
  'every weekend',
  'weekends only',
  'every 7 days',
  'every week',
  'weekly',
  'once a week',
  'every month',
  'monthly',
  'once a month',
  'every other month',
  'every quarter',
  'every 6 months',
  'every year'
]

const test = [
  'every 2 minutes',
  'every 6 minutes',
  'every 20 minutes',
  'every 1 hour',
  'every 4 hours',
  'hour range',
  'between certain hours',
  'every day',
  'every sunday',
  'every friday at midnight',
  'every weekday'
]

const fetchURL = async (url, browser) => {
  const page = await browser.newPage()

  await page.goto(`https://crontab.guru/${url.replace(' ', '-')}`, {
    timeout: 0
  })

  return await page.evaluate(() => {
    const key = window.location.pathname.replace('/', '').replace(/ |%20/g, '-')

    const bracket = {}
    
    bracket[key] = {
      text: document.getElementById('hr').innerText.replace(/“|”|\./g, ''),
      value: document.getElementById('input').value
    }

    return bracket
  })
}

(async () => {
  const browser = await puppet.launch()

  Promise.all(test.map(async (url) => {
    return await fetchURL(url, browser)
  })).then(result => {
    browser.close()
  
    const content = {}
  
    result.map(crontab => {
      const key = Object.keys(crontab).pop()
  
      content[key] = crontab[key]
    })
  
    // Disable writing new dictionary.json
    fs.writeFileSync(
      '../source/dictionary.json', JSON.stringify(content, null, 2)
    )
  
    process.exit(0)
  })
})()