<template>
    <input  class="coffee-form-input" @input="onInput" v-coffeeblur="{emitValidate}" :value="value">
</template>

<script>
export default {
  name: 'CoffeeFormInput',
  inject: ['coffeeFormItem'],
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  directives: {
    'coffeeblur': {
      bind (el, binding) {
        el.onblur = function () {
          if (el.type === 'button') { // 排除button
            return false
          }
          binding.value.emitValidate()
        }
      },
      unbind (el, binding) {
        el.onblur = null
      }
    }
  },
  methods: {
    onInput (ev) {
      // console.log(this);
      // console.log(this.coffeeFormItem);
      this.$emit('input', ev.target.value)
    },
    emitValidate () {
      this.coffeeFormItem.$emit('validate')
    }
  }
}
</script>

<style scoped lang="less">
    input.coffee-form-input{
        width: 600px;
        font-size: 30px;
        background-color: transparent !important;
        color: #fff !important;
        border:none;
        padding: 10px 40px;
        &:focus{
            box-shadow: 0 0 20px 0 #fff;
        }
    }
</style>
