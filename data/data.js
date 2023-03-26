export default {
  reporter: {
    name: 'reporter',
    source: 'https://www.ethiopianreporter.com',
    dataSource: {
      title_url: {
        url: '#tdi_133 > div > div > div.td-module-meta-info > h3 > a',
        text: 'textContent',
        link: 'href'
      },
      excerpt: {
        url: '#tdi_133 > div > div > div.td-module-meta-info > div.td-excerpt',
        text: 'textContent'
      },
      date: {
        url: '#tdi_133 > div > div > div.td-module-meta-info > div.td-editor-date > span > span.td-post-date > time',
        code: 'innerHTML'
      }
    }
  },
}

