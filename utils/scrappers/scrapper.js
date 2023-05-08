export default async function scrapper(page, sourceData) {
  const pageUrl = sourceData.source
  await page.setDefaultNavigationTimeout(0)
  await page.goto(pageUrl)

  const titleSelector = sourceData.dataSource.title_url.url
  const contentSelector = sourceData.dataSource.excerpt.url
  const dateSelector = sourceData.dataSource.date.url

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
      postDate: el.innerHTML
    }
  })

  const scrappedData = {
    source: sourceData.name,
    homePage: pageUrl,
    ...titleUrl,
    ...content,
    postDate: new Date(date.postDate)
  }
  return scrappedData
}
