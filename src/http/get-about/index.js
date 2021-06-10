const Tonic = require('tonic-ssr')
const HeaderComponent = require('@architect/views/header.js')
const AboutComponent = require('@architect/views/about.js')

exports.handler = async function http () {
  Tonic.add(HeaderComponent)
  Tonic.add(AboutComponent)

  let m = new AboutComponent({})
  const body = await m.preRender()

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body
  }
}

