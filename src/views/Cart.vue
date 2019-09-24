<template>
    <div class="cart">
        <template v-if="!cartList.length">
            <img class="empty-img" src="../assets/cart/cart.png" alt="">
            <p class="empty-text">您的购物车有点寂寞</p>
            <router-link class="go-to-drink" to="/list">去喝一杯</router-link>
        </template>
        <template v-else>
            <div class="shopping-list">
                <ul class="cart-list">
                    <li class="cart-item" v-lazy-container="{ selector: 'img' }" v-for="listItem in cartList" :key="listItem.id">
                        <div aspectratio class="imgWrap">
                            <img aspectratio-content :data-src="listItem.img.url" :alt="listItem.img.alt" :title="listItem.img.title" />
                        </div>
                        <div class="product-detail">
                            <h5>{{listItem.name}}</h5>
                            <p>{{listItem.des}}</p>
                            <span class="price">￥{{listItem.price}}</span>
                            <div class="shop-wrap">
                                <span class="sub" v-if="!!cartShowList[listItem.id]" @touchstart.stop="subCart(listItem.id)">-</span><span class="product-count" v-if="!!cartShowList[listItem.id]">{{cartShowList[listItem.id].count}}</span><span class="add" @touchstart.stop="addCart(listItem)" >+</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="total-amount">
                    <span>应付金额：</span>
                    <button>去支付</button>
                    <span class="money">￥{{cartAmount}}</span>

                </div>
            </div>

        </template>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'cart',
  computed: {
    ...mapState({
      cartList: 'shoppingCart'
    }),
    ...mapGetters({
      cartAmount: 'shoppingTotalAmount'
    }),
    cartShowList () {
      return this.cartList.reduce((showList, cur) => {
        showList[cur.id] = cur
        return showList
      }, {})
    }
  },
  methods: {
    ...mapMutations({
      addCart: 'incrementCart',
      subCart: 'decrementCart'
    })
  }
}
</script>

<style scoped lang="less">
    .cart{
        display:flex;
        flex-direction: column;
        align-items: center;
        height: 85vh;
        background-color: #f5f8fa;
        .empty-img{
            width: 200px;
            margin-top: 260px;
        }
        .empty-text{
            font-size: 38px;
        }
        .go-to-drink{
            font-size: 34px;
            color:#6fd6fd;
            padding: 10px 20px;
            background-color:#fff;
        }
    }
    .cart-list{
        padding-left: 14px;
        margin:0;
        box-sizing:border-box;
        .cart-item{
            display: flex;
            justify-content:flex-start;
            align-items:center;
            width:750px;
            box-sizing:border-box;
            margin:15px;
            padding-bottom: 15px;
            position: relative;
            .imgWrap{
                width: 180px;
                margin:0 10px;
                border-radius:20px;
                background-color: darkcyan;
                overflow:hidden;
                img{
                    border-radius:20px;
                }
            }
            .imgWrap{
                aspect-ratio: "1:1";
            }
            .product-detail{
                margin-right: 20px;
                padding-bottom:10px;
                text-align: left;
                h5{
                    margin:12px 24px 10px 0;
                    font-size: 32px;
                    font-weight:600;
                }
                p{
                    margin:0 20px  60px 0;
                    font-size: 30px;
                    color:#8C8C8C;
                }
                span{
                    font-size: 32px;
                    color:#ff0000;

                }
                .shop-wrap{
                    position: absolute;
                    bottom: 30px;
                    right: 20px;
                    .add, .sub{
                        display:inline-block;
                        color:#fff;
                        width: 40px;
                        height: 40px;
                        line-height: 40px;
                        font-size: 30px;
                        border-radius: 50%;
                        text-align:center;
                        background-color: #8bbcd2;
                    }
                    .product-count{
                        padding: 30px;
                        color: #FF6F00;
                        font-size: 32px;
                        font-weight: 900;
                    }

                }
            }
        }
    }
    .shopping-list{
        margin-bottom: 200px;
        .total-amount{
            width: 700px;
            position: fixed;
            bottom: 100px;
            left:0;
            padding: 30px 25px;
            text-align:left;
            background-color: #ff464d;
            span{
                color: #f9ff75;
                font-size: 48px;
            }
            .money{
                position: absolute;
                right: 200px;
                margin-right: 20px;
            }
            button{
                position: absolute;
                right:0;
                top:0;
                background-color: #ffc80a;
                color: #fff;
                width: 200px;
                height: 110px;
                border:none;
                font-size: 36px;
            }
        }
    }
</style>
<style scoped lang="postcss">
    @svg square{
        @rect{
            width: 100%;
            height:100%;
            fill:transparent;
            stroke: #6fd6fd;
            stroke-width: 1px;
        }
    }
    .cart .go-to-drink{
       background-image: svg(square)
    }
</style>
