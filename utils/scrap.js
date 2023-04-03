import puppeteer from 'puppeteer'

export default async function scrap(scrapper, template) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  try {
    const reporter = await scrapper(page, template)
    return reporter
  } finally {
    await browser.close()
  }
}

