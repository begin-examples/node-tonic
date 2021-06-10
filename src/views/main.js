const Tonic = require('tonic-ssr')

class MainComponent extends Tonic {
  constructor (props) {
    super()
    this.props = props
  }

  render () {
    return this.html`
      <my-header></my-header>

      <main>
        Hello!
      </main>

      <footer>
      </footer>
    `
  }
}

module.exports = MainComponent
