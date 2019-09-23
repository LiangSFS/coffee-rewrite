<template>
    <form class="coffee-form" >
        <slot></slot>
    </form>
</template>

<script>
import Schema from 'async-validator'
export default {
  name: 'CoffeeForm',
  provide () {
    return {
      coffeeForm: this
    }
  },
  props: {
    rules: {
      type: Object
    },
    model: {
      type: Object,
      required: true
    }
  },
  methods: {
    allValidate () {
      const allValidates = Object.keys(this.model).map((key) => {
        const rules = this.rules[key]

        const value = this.model[key]

        const descriptor = { [key]: rules }

        const validator = new Schema(descriptor)

        return validator.validate({ [key]: value })
      })
      // console.log(allValidates, Promise.all(allValidates))
      return Promise.all(allValidates)
    }
  }
}
</script>

<style scoped lang="less">
   .coffee-form{
       margin-top: 40px;
   }
</style>
