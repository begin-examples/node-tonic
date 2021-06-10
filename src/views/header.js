const Tonic = require('tonic-ssr')

class MyHeader extends Tonic {
  constructor (props) {
    super()
    this.props = props
  }

  render() {
    return this.html`
    <header>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </header>
    `
  }
}

module.exports = MyHeader
