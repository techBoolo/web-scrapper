import puppeteer from 'puppeteer'
import data from './data/data.js'
import scrapReporter from './utils/scrappers/reporter.js'

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  const reporter = await scrapReporter(page, data.reporter)
  console.log(reporter);

  // other scrapper here
  await browser.close()
})()

