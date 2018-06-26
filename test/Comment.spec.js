import { shallowMount } from '@vue/test-utils'
import Comment from '../src/components/Comment.vue'

describe('Comment', () => {
  it('should be empty comments', () => {
    const wrapper = shallowMount(Comment)

    expect(wrapper.text()).toBe('/**/')
  })

  it('should be passed text through slot', () => {
    const wrapper = shallowMount(Comment, {
      slots: 'simple slot'
    })

    expect(wrapper.text()).toBe('/*simple slot*/')
  })
})
