/**
 *  Created by liangsfs on 2019-09-14
 */
// 同步提交 状态变化 mutations
export default {
  incrementCart (state, preload) {
    let cartList = state.shoppingCart
    let i = 0

    for (let len = cartList.length; i < len; i++) {
      if (cartList[i].id === preload.id) {
        cartList[i].count++
        break
      }
    }
    i >= cartList.length && cartList.push({
      ...preload,
      count: 1
    })
  },
  decrementCart (state, preloadId) {
    let cartList = state.shoppingCart

    for (let i = 0, len = cartList.length; i < len; i++) {
      if (cartList[i].id === preloadId) {
        cartList[i].count--
        !cartList[i].count && cartList.splice(i, 1)
        break
      }
    }
  }
}
