// 컴포넌트의 개념은 다른 자바스크립트 파일과 구분하기 위해 파일명의 첫글자는 대문자로 만드는것

import { Component } from './core/foundation'
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'


export default class App extends Component {
  render() {
    const theHeader = new TheHeader().el
    const theFooter = new TheFooter().el
    const routerView = document.createElement('router-view')
    
    this.el.append(
      theHeader,
      routerView,
      theFooter
    )
  }
}