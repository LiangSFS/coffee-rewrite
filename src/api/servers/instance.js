/**
 *  Created by liangsfs on 2019-09-16
 */

export let http = (axios) => ({
  apiGet (url, data) {
    return new Promise((resolve, reject) => {
      axios.get(url, data).then((response) => {
        resolve(response.data)
      }).catch((response) => {
        reject(response)
        this.$message({ type: 'warning' })
      })
    })
  },
  apiPost (url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url, data).then((response) => {
        resolve(response.data)
      }).catch((response) => {
        reject(response)
        this.$message({ type: 'warning' })
      })
    })
  },
  apiPut (url, data) {
    return new Promise((resolve, reject) => {
      axios.put(url, data).then((response) => {
        resolve(response.data)
      }).catch((response) => {
        reject(response)
        this.$message({ type: 'warning' })
      })
    })
  },
  apiPatch (url, data) {
    return new Promise((resolve, reject) => {
      axios.patch(url, data).then((response) => {
        resolve(response.data)
      }).catch((response) => {
        reject(response)
        this.$message({ type: 'warning' })
      })
    })
  },
  apiDelete (url, data) {
    return new Promise((resolve, reject) => {
      axios.delete(url, data).then((response) => {
        resolve(response.data)
      }).catch((response) => {
        reject(response)
        this.$message({ type: 'warning' })
      })
    })
  }
})
