import puppeteer from 'puppeteer'
import data from './data/data.js'
import scrapper from './utils/scrappers/scrapper.js'

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  const result = await scrapper(page, data.addisfortune)
  console.log(result);

  // other scrapper here
  await browser.close()
})()

