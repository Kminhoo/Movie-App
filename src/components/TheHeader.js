import { Component } from "../core/foundation";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header',
      state : {
        menus: [
          { name: 'Search', href: '#/' },
          { name: 'Movie', href: '#/movie?id=tt4520988' },
          { name: 'About', href: '#/about' }
        ]
      }
    })
    window.addEventListener('popstate', () => {
      this.render()
    })
  }
  render() {
    this.el.innerHTML = /* html */`
      <a href="#/" class="logo"><span>OMDbAPI</span>.COM</a>
      <nav>
        <ul>
          ${this.state.menus.map((menu) => {
            const href = menu.href.split('?')[0]
            const hash = location.hash.split('?')[0]
            const isActive = href === hash
            return /* html */`
              <li>
                <a
                  class="${isActive ? 'active' : ''}" 
                  href="${menu.href}">
                  ${menu.name}
                </a>
              <li>`
          }).join('')}
        </ul>
      </nav>
      <a href="#/" class="user">
        <img src="https://img1.daumcdn.net/thumb/C428x428/?scode=mtistory2&fname=https%3A%2F%2Ftistory2.daumcdn.net%2Ftistory%2F5156369%2Fattach%2F6e21534d388448568efe0cf1219fe4ec" alt="User">
      </a>
    `
  }
}