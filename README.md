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
| every minute | At every minute |
| every 1 minute | At every minute |
| every 2 minutes | At every 2nd minute |
| every even minute | At every 2nd minute |
| every uneven minute | At every 2nd minute from 1 through 59 |
| every 3 minutes | At every 3rd minute |
| every 4 minutes | At every 4th minute |
| every 5 minutes | At every 5th minute |
| every five minutes | At every 5th minute |
| every 6 minutes | At every 6th minute |
| every 10 minutes | At every 10th minute |
| every 15 minutes | At every 15th minute |
| every fifteen minutes | At every 15th minute |
| every ten minutes | At every 10th minute |
| every quarter hour | At every 15th minute |
| every 20 minutes | At every 20th minute |
| every 30 minutes | At every 30th minute |
| every hour at 30 minutes | At minute 30 |
| every half hour | At every 30th minute |
| every 60 minutes | At minute 0 |
| every hour | At minute 0 |
| every 1 hour | At minute 0 |
| every 2 hours | At minute 0 past every 2nd hour |
| every two hours | At minute 0 past every 2nd hour |
| every even hour | At minute 0 past every 2nd hour |
| every other hour | At minute 0 past every 2nd hour |
| every 3 hours | At minute 0 past every 3rd hour |
| every three hours | At minute 0 past every 3rd hour |
| every 4 hours | At minute 0 past every 4th hour |
| every 6 hours | At minute 0 past every 6th hour |
| every six hours | At minute 0 past every 6th hour |
| every 8 hours | At minute 0 past every 8th hour |
| every 12 hours | At minute 0 past every 12th hour |
| hour range | At minute 0 past every hour from 9 through 17 |
| between certain hours | At minute 0 past every hour from 9 through 17 |
| every day | At 00:00 |
| daily | At 00:00 |
| once a day | At 00:00 |
| every night | At 00:00 |
| every day at 1am | At 01:00 |
| every day at 2am | At 02:00 |
| every day 8am | At 08:00 |
| every morning | At 09:00 |
| every midnight | At 00:00 |
| every day at midnight | At 00:00 |
| every night at midnight | At 00:00 |
| every sunday | At 00:00 on Sunday |
| every monday | At 00:00 on Monday |
| every tuesday | At 00:00 on Tuesday |
| every wednesday | At 00:00 on Wednesday |
| every thursday | At 00:00 on Thursday |
| every friday | At 00:00 on Friday |
| every friday at midnight | At 00:00 on Friday |
| every saturday | At 00:00 on Saturday |
| every weekday | At 00:00 on every day of week from Monday through Friday |
| weekdays only | At 00:00 on every day of week from Monday through Friday |
| monday to friday | At 00:00 on every day of week from Monday through Friday |
| every weekend | At 00:00 on Saturday and Sunday |
| weekends only | At 00:00 on Saturday and Sunday |
| every 7 days | At 00:00 on Sunday |
| every week | At 00:00 on Sunday |
| weekly | At 00:00 on Sunday |
| once a week | At 00:00 on Sunday |
| every month | At 00:00 on day of month 1 |
| monthly | At 00:00 on day of month 1 |
| once a month | At 00:00 on day of month 1 |
| every other month | At 00:00 on day of month 1 in every 2nd month |
| every quarter | At 00:00 on day of month 1 in every 3rd month |
| every 6 months | At 00:00 on day of month 1 in every 6th month |
| every year | At 00:00 on day of month 1 in January |