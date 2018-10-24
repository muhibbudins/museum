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

const string = [
  'every minute',
  'every 1 minute',
  'every 2 minutes'
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

  Promise.all(string.map(async (url) => {
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