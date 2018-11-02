# 🐊 Cronodile

Create cron using Node with human readable command

### Usage

Install cronodile using :

```bash
$ npm i cronodile
```

And then, create code like this

```js
// Import Cronodile
const Cronodile = require('cronodile')
// Create Cronodile instance
const cron = new Cronodile('id')

cron
  // Command must be Function
  .command(() => {
    // Write your code here
    console.log('run your function / something here')
  })
  // Run parameter must be a string
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

> Indonesian

| Command       | Description    |
| :-----------: | :------------- |
| setiap menit | every minute |
| setiap 1 menit | every 1 minute |
| setiap 2 menit | every 2 minutes |
| rata setiap menit | every even minute |
| rata tidak setiap menit | every uneven minute |
| setiap 3 menit | every 3 minutes |
| setiap 4 menit | every 4 minutes |
| setiap 5 menit | every 5 minutes |
| setiap lima menit | every five minutes |
| setiap 6 menit | every 6 minutes |
| setiap 10 menit | every 10 minutes |
| setiap 15 menit | every 15 minutes |
| setiap limabelas menit | every fifteen minutes |
| setiap sepuluh menit | every ten minutes |
| setiap kuartal jam | every quarter hour |
| setiap 20 menit | every 20 minutes |
| setiap 30 menit | every 30 minutes |
| setiap jam pada menit 30 | every hour at 30 minutes |
| setiap setengah jam | every half hour |
| setiap 60 menit | every 60 minutes |
| setiap jam | every hour |
| setiap 1 jam | every 1 hour |
| setiap 2 jam | every 2 hours |
| setiap dua jam | every two hours |
| rata setiap jam | every even hour |
| setiap berganti jam | every other hour |
| setiap 3 jam | every 3 hours |
| setiap tiga jam | every three hours |
| setiap 4 jam | every 4 hours |
| setiap 6 jam | every 6 hours |
| setiap enam jam | every six hours |
| setiap 8 jam | every 8 hours |
| setiap 12 jam | every 12 hours |
| dalam waktu | hour range |
| diantara dua jam | between certain hours |
| setiap hari | daily |
| sehari sekali | once a day |
| setiap malam | every night |
| setiap hari jam 1 pagi | every day at 1am |
| setiap hari jam 2 pagi | every day at 2am |
| setiap hari 8 pagi | every day 8am |
| setiap pagi | every morning |
| setiap tengah malam | every midnight |
| setiap hari pada tengah malam | every day at midnight |
| setiap night at tengah malam | every night at midnight |
| setiap minggu | every sunday |
| setiap senin | every monday |
| setiap selasa | every tuesday |
| setiap rabu | every wednesday |
| setiap kamis | every thursday |
| setiap jumat | every friday |
| setiap jumat tengah malam | every friday at midnight |
| setiap sabtu | every saturday |
| setiap hari kerja | every weekday |
| hanya hari kerja | weekdays only |
| senin sampai jumat | monday to friday |
| setiap akhir minggu | every weekend |
| hanya hari minggu | weekends only |
| setiap 7 hari | every 7 days |
| setiap seminggu | every week |
| sekali seminggu | once a week |
| setiap bulan | monthly |
| sekali sebulan | once a month |
| setiap berganti bulan | every other month |
| setiap kuartal | every quarter |
| setiap 6 bulan | every 6 months |
| setiap tahun | every year| 

### License

This project under MIT License