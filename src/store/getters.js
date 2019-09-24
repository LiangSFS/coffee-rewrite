/**
 *  Created by liangsfs on 2019-09-14
 */
//  状态管理值 衍生值  getters
export default {
  shoppingTotalAmount: (state) => {
    return state.shoppingCart.reduce((acc, cur) => {
      acc += cur.count * cur.price
      return acc
    }, 0)
  }
  // shoppingTotalNumber: (state) => {
  //   return state.shoppingCart.reduce( (acc, cur) => {
  //     acc += cur.count
  //     return acc
  //   }, 0)
  // }
}
