import { Component } from "../core/foundation";
import moiveStore, { searchMovies } from '../store/movie'

export default class MovieListMore extends Component {
  constructor() {
    super({
      tagName: 'button'
    })

    moiveStore.subscribe('pageMax', () => {
      const { page, pageMax } = moiveStore.state

      pageMax > page 
        ? this.el.classList.remove('hide') 
        : this.el.classList.add('hide')
    })
  }

  render() {
    this.el.classList.add('btn', 'view-more', 'hide')
    this.el.textContent = 'View more..'

    this.el.addEventListener('click', async () => {
      this.el.classList.add('hide')
      await searchMovies(moiveStore.state.page + 1)
    })
  }
}