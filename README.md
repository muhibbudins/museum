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