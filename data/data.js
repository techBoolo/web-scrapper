export default {
  satenaw: {
    name: 'satenaw',
    source: 'https://satenaw.com',
    dataSource: {
      title_url: {
        url: '.post-group-row-1b-1a-3 > div:nth-child(1) > article:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1) > a:nth-child(1)',
        text: 'textContent',
        link: 'href'
      },
      excerpt: {
        url: '.post-group-row-1b-1a-3 > div:nth-child(1) > article:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > p:nth-child(1)',
        text: 'textContent'
      },
      date: {
        url: 'div.entry-date:nth-child(2) > time:nth-child(1)',
        code: 'textContent'
      }
    }
  },
  waltainfo: {
    name: 'waltainfo',
    source: 'https://waltainfo.com',
    dataSource: {
      title_url: {
        url: '#newscard_horizontal_vertical_posts-3 > div > div.col-12.first-col > div > div > h3 > a',
        text: 'textContent',
        link: 'href'
      },
      excerpt: {
        url: '#newscard_horizontal_vertical_posts-3 > div > div.col-12.first-col > div > div > div.entry-content > p',
        text: 'textContent'
      },
      date: {
        url: '#newscard_horizontal_vertical_posts-3 > div > div.col-12.first-col > div > div > div:nth-child(3) > div.date > a',
        code: 'textContent'
      }
    }
  },
  addisfortune: {
    name: 'addisfortune',
    source: 'https://addisfortune.news',
    dataSource: {
      title_url: {
        url: 'h4.bold-subtitle:nth-child(2) > a:nth-child(1)',
        text: 'textContent',
        link: 'href'
      },
      excerpt: {
        url: 'p.post_list_home_excerpt:nth-child(4)',
        text: 'textContent'
      },
      date: {
        url: 'div.p_wrapper_home:nth-child(5) > div:nth-child(1) > div:nth-child(1) > p:nth-child(1)',
        code: 'textContent'
      }
    }
  },
  ethiopianobserver: {
    name: 'ethiopianobserver',
    source: 'https://www.ethiopiaobserver.com',
    dataSource: {
      title_url: {
        url: '#post-12608 > h2 > a',
        text: 'textContent',
        link: 'href'
      },
      excerpt: {
        url: '#post-12608 > div.entry-summary',
        text: 'textContent'
      },
      date: {
        url: '#post-12608 > div.entry-meta > span.entry-date > time',
        code: 'textContent'
      }
    }
  },
  zehabesha: {
    name: 'zehabesha',
    source: 'https://amharic-zehabesha.com/',
    dataSource: {
      title_url: {
        url: '.post-181986 > div:nth-child(2) > h3:nth-child(1) > a:nth-child(1)',
        text: 'textContent',
        link: 'href'
      },
      excerpt: {
        url: '.post-181986 > div:nth-child(2) > div:nth-child(3) > p:nth-child(1)',
        text: 'textContent'
      },
      date: {
        url: '.post-181986 > div:nth-child(2) > div:nth-child(2) > span:nth-child(1)',
        code: 'textContent'
      }
    }
  },
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
  addisadmassnews: {
    name: 'addisadmassnews',
    source: 'https://addisadmassnews.com',
    dataSource: {
      title_url: {
        url: '#btcontentslider175 > div > div > div.bt-row.bt-row-first > div > div > a',
        text: 'textContent',
        link: 'href // add the domain here, source/link'
      },
      excerpt: {
        url: '#btcontentslider175 > div > div > div.bt-row.bt-row-first > div > div > p',
        text: 'textContent'
      },
      date: {
        url: '#btcontentslider175 > div > div > div.bt-row.bt-row-first > div > div > span',
        code: 'textContent',
        options: 'code.split(/Created\s+on\s+/)[1]'
      }
    }
  },
  addisstandard: {
    name: 'addisstandard',
    source: 'https://amharic.addisstandard.com',
    dataSource: {
      title_url: {
        url: 'body > div.eltdf-wrapper > div > div.eltdf-content > div > div > div > div:nth-child(2) > div > div > div > div > div.eltdf-bnl-holder.eltdf-pl-two-holder.eltd-post-columns-2 > div > div > div:nth-child(1) > div > div.eltdf-pt-two-content-holder > div > div.eltdf-pt-two-content-top-holder > h3 > a',
        link: 'href',
        text: 'textContent',
      },
      excerpt: {
        url: 'body > div.eltdf-wrapper > div > div.eltdf-content > div > div > div > div:nth-child(2) > div > div > div > div > div.eltdf-bnl-holder.eltdf-pl-two-holder.eltd-post-columns-2 > div > div > div:nth-child(1) > div > div.eltdf-pt-two-content-holder > div > div.eltdf-pt-two-content-top-holder > h3 > a',
        text: 'textContent',
      },
      date: {
        url: 'body > div.eltdf-wrapper > div > div.eltdf-content > div > div > div > div:nth-child(2) > div > div > div > div > div.eltdf-bnl-holder.eltdf-pl-two-holder.eltd-post-columns-2 > div > div > div:nth-child(1) > div > div.eltdf-pt-two-content-holder > div > div.eltdf-pt-two-content-bottom-holder > div > div.eltdf-pt-info-section-left > div > a',
        code: 'textContent'
      }
    }
  },
}

