# Cronodile Crawler

Dictionary JSON Generator

This file is master crawler to create "dictionary.json", this file will loop any example link on this page (https://crontab.guru/examples.html) and then open each link on new puppeteer page. After that, the crawler will read "human readable" div and "input" element as crontab formula.

### Credits

Anything results from this crawler are generated from [https://crontab.guru/examples.html](https://crontab.guru/examples.html), but for usage on **cronodile** we customize again the **results**.

### DISCLAIMER 

THIS FILE JUST FOR EDUCATE ANOTHER DEVELOPER ABOUT HOW TO CRAWL AJAX WEBSITE USING GOOGLE PUPPETEER. DON'T RUN IT, EXCEPT YOU USE THIS FILE JUST FOR PERSONAL USE.

### WARNING 

This crawler creating 70 new page on puppeteer browser and then it'll be showing memory leak warning. So, if you want copy this for personal use. You must thinking about memory usage too.
