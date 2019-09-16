/**
 *  Created by liangsfs on 2019-09-16
 */

import message from '../components/Message/index.js'

// console.log(message);

export default {
  install (_Vue) {
    Object.defineProperty(_Vue, '$message', {
      configurable: true,
      enumerable: true,
      value: message
    })
  }

}
