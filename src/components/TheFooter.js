import { Component } from "../core/foundation";
import about from "../store/about";
import aboutStore from '../store/about'

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    const { blog, github } = aboutStore.state
    this.el.innerHTML = /* html */`
      <div>
        <a href="${github}">GitHub Repository</a>
      </div>
      <div>
        <a href="${blog}">${new Date().getFullYear()} MINHOO</a>
      </div>
    `
  }
}