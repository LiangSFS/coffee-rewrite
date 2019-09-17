import { shallowMount } from '@vue/test-utils'
import TabBar from '@/components/TabBar.vue'
import 'vue-router'

describe('TabBar.vue', () => {
  it('is a vue instance', () => {
    const wrapper = shallowMount(TabBar)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
