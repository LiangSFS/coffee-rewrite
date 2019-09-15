/**
 *  Created by liangsfs on 2019-09-14
 */

import axios from 'axios'

export default {
  install (_Vue) {
    Object.defineProperty(_Vue, '$axios', {
      configurable: true,
      enumerable: true,
      value: axios
    })
  }
}
