/**
 *  Created by liangsfs on 2019-09-14
 */

import Swiper from 'swiper'

export default {
  install (_Vue) {
    Object.defineProperty(_Vue, '$swiper', {
      configurable: true,
      enumerable: true,
      value: Swiper
    })
  }
}
