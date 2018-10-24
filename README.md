# 🐊 Cronodile - WIP

Create cron using Node with human readable command

### Usage

Install cronodile using :

```bash
$ npm i cronodile
```

And then, create code like this

```js
// Import Cronodile
const Cronodile = require('./')
// Initialize Cronodile
const cron = new Cronodile('id')

cron
  // Command must be Function
  .command(() => {
    console.log('run your function / something here')
  })
  // Run must be string and available on time table
  .run('setiap menit')
```

### Available Command

> English


| Command       | Description    |
| :-----------: | :------------- |
| every-minute | |
| every-1-minute | |
| every-2-minutes | |
| every-even-minute | |
| every-uneven-minute | |
| every-3-minutes | |
| every-4-minutes | |
| every-5-minutes | |
| every-five-minutes | |
| every-6-minutes | |
| every-10-minutes | |
| every-15-minutes | |
| every-fifteen-minutes | |
| every-ten-minutes | |
| every-quarter-hour | |
| every-20-minutes | |
| every-30-minutes | |
| every-hour-at-30-minutes | |
| every-half-hour | |
| every-60-minutes | |
| every-hour | |
| every-1-hour | |
| every-2-hours | |
| every-two-hours | |
| every-even-hour | |
| every-other-hour | |
| every-3-hours | |
| every-three-hours | |
| every-4-hours | |
| every-6-hours | |
| every-six-hours | |
| every-8-hours | |
| every-12-hours | |
| hour-range | |
| between-certain-hours | |
| every-day | |
| daily | |
| once-a-day | |
| every-night | |
| every-day-at-1am | |
| every-day-at-2am | |
| every-day-8am | |
| every-morning | |
| every-midnight | |
| every-day-at-midnight | |
| every-night-at-midnight | |
| every-sunday | |
| every-monday | |
| every-tuesday | |
| every-wednesday | |
| every-thursday | |
| every-friday | |
| every-friday-at-midnight | |
| every-saturday | |
| every-weekday | |
| weekdays-only | |
| monday-to-friday | |
| every-weekend | |
| weekends-only | |
| every-7-days | |
| every-week | |
| weekly | |
| once-a-week | |
| every-month | |
| monthly | |
| once-a-month | |
| every-other-month | |
| every-quarter | |
| every-6-months | |
| every-year | |