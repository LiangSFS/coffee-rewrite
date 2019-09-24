<template>
    <div class="coffee-form-item">
        <slot></slot>
        <!-- 验证错误的信息 -->
        <p v-if="error">
            {{error}}
        </p>
    </div>
</template>

<script>
import Schema from 'async-validator'
// import validateRules from '../utils/validateRules.js'

export default {
  name: 'CoffeeFormItem',
  provide () {
    return {
      coffeeFormItem: this
    }
  },
  inject: ['coffeeForm'],
  props: {
    prop: {
      type: String
    }
  },
  data () {
    return {
      error: ''
    }
  },
  mounted () {
    this.$on('validate', this.validate)
  },
  methods: {
    validate () {
      //  console.log(this.coffeeForm.rules)
      // console.log(this.coffeeForm.model)

      const rules = this.coffeeForm.rules[this.prop]

      const value = this.coffeeForm.model[this.prop]

      const descriptor = { [this.prop]: rules }

      const validator = new Schema(descriptor)

      validator.validate({ [this.prop]: value }, (errors) => {
        if (errors) {
          // console.log(1, errors[0], this.error)

          if (errors[0].message.includes('required')) {
            // console.log('required')
            this.error = '输入不能为空'
          } else if (errors[0].message.includes('email')) {
            // console.log('email')
            this.error = '请输入有效的邮箱地址'
          } else if (errors[0].message.includes('password')) {
            // console.log('password')
            this.error = '请输入由数字、字母、下划线组成的6到10位密码'
          }

          // console.log(errors)
        } else {
          this.error = ''
        }
        // console.log(this.error);
      })
      // let validatePromise = () => {
      //   let keys = ["required", 'pattern']
      //   let prop = this.prop;
      //   return (i) => {
      //     const descriptor = {
      //       [this.prop]: { [ keys[i] ]: rules[ keys[i] ] }
      //     }
      //
      //     const validator = new schema(descriptor)
      //
      //     validator.validate( { [this.prop]: value }, (errors) => {
      //       if(errors){
      //         switch (keys[i]){
      //           case "required":
      //             this.error = "输入不能为空";
      //           break;
      //           case "pattern":
      //             let propMsgKey = this.prop + "Msg";
      //             this.error = validateRules[propMsgKey]
      //           break;
      //         }
      //
      //       }else {
      //         ++i;
      //         if(i < keys.length) validatePromise()(i)
      //       }
      //     })
      //   }
      //
      // }

      // validatePromise()(0);
    }
  }
}
</script>

<style scoped lang="less">
    .coffee-form-item{
        position: relative;
        border-bottom: 4px solid #fff;
        margin: 80px 0;
       p{
           position: absolute;
           bottom: -60px;
           text-align:left;
           width: 100%;
           margin:0;
           padding: 10px 20px;
           color: #848cff;
           background-color: transparent;
           font-size: 30px;
       }
    }
</style>
