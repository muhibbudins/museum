# 🐊 Cronodile - WIP

Create cron using Node with human readable command

### Usage

```js
// Import Cronodile
const Cronodile = require('./')
// Initialize Cronodile
const cron = new Cronodile('id')

cron
  // Command must be Function
  .command(() => {
    console.log('run your command here')
  })
  // Run must be string and available on time table
  .run('setiap menit')
```