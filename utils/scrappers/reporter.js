export default async function scrapReporter(page, reporterSourceData) {
  const pageUrl = reporterSourceData.source
  await page.goto(pageUrl)

  const titleSelector = reporterSourceData.dataSource.title_url.url
  const contentSelector = reporterSourceData.dataSource.excerpt.url
  const dateSelector = reporterSourceData.dataSource.date.url

  let selector = await page.waitForSelector(titleSelector)
  const titleUrl = await selector.evaluate(el => {
    return {
      title: el.textContent,
      link: el.href
    }
  })

  selector = await page.waitForSelector(contentSelector)
  const content = await selector.evaluate(el => {
    return {
      content: el.textContent,
    }
  })

  selector = await page.waitForSelector(dateSelector)
  const date = await selector.evaluate(el => {
    return {
      postDate: el.textContent,
    }
  })

  const scrappedData = {
    source: reporterSourceData.name,
    homePage: pageUrl,
    ...titleUrl,
    ...content,
    ...date
  }
  return scrappedData
}
