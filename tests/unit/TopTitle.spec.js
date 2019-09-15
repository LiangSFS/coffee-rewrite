import { shallowMount } from '@vue/test-utils'
import TopTitle from '@/components/TopTitle.vue'

describe('TopTitle.vue', () => {
  it('renders props.backText when passed', () => {
    const backText = '返回'
    const wrapper = shallowMount(TopTitle, {
      propsData: { backText }
    })
    expect(wrapper.text()).toMatch(backText)
  })
  it('renders props.title when passed', () => {
    const title = '咖啡小窝'
    const wrapper = shallowMount(TopTitle, {
      propsData: { title }
    })
    expect(wrapper.text()).toMatch(title)
    // wrapper.vm   wrapper.element    wrapper.isVueInstance()   toBeTruthy()
  })
})
