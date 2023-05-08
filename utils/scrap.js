import puppeteer from 'puppeteer'

export default async function scrap(scrapper, template) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  try {
    const data = await scrapper(page, template)
    return data
  } finally {
    await browser.close()
  }
}

