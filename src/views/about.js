const Tonic = require('tonic-ssr')

class AboutComponent extends Tonic {
  constructor (props) {
    super()
    this.props = props
  }

  render () {
    return this.html`
      <my-header></my-header>

      <main>
        About
      </main>

      <footer>
      </footer>
    `
  }
}

module.exports = AboutComponent
