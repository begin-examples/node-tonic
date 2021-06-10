const Tonic = require('tonic-ssr')
const HeaderComponent = require('@architect/views/header.js')
const MainComponent = require('@architect/views/main.js')

exports.handler = async function http () {
  Tonic.add(HeaderComponent)
  Tonic.add(MainComponent)

  let m = new MainComponent({})
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
