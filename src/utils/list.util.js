/**
 *  Created by liangsfs on 2019-09-19
 */
import common from './common.js'

export let utils = Object.assign(common, {
  listElmOffsetTop (selector) {
    return document.querySelector(selector).offsetTop
  },
  handleScroll () {
    let aContentTitles = document.querySelectorAll('.products .item-title') // 所有被锚点的元素
    let currentTop = 0
    for (let i = 0, len = aContentTitles.length; i < len; i++) {
      // console.log(getComputedStyle(aContentTitles[i]).height)
      currentTop = aContentTitles[i].offsetTop - utils.listElmOffsetTop('.products') // 每个 锚点 offsetTop -  其容器 offsetTop
      // + parseInt(getComputedStyle(aContentTitles[i]).height)
      if (currentTop > utils.scrollTop()) {
        this.currentIndex = i - 1
        // console.log(10)
        break
      }

      this.currentIndex = len - 1
    }
  }
})
