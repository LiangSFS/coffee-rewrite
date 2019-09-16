/**
 *  Created by liangsfs on 2019-09-16
 */
import axios from 'axios'

export let http = {
  apiGet (url, data) {
    return new Promise((resolve, reject) => {
      axios.get(url, data).then((response) => {
        resolve(response.data)
      }).catch((response) => {
        reject(response)
      })
    })
  }

}
