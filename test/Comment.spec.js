import { shallowMount, mount } from '@vue/test-utils'
import Comment from '../src/components/Comment.vue'

describe('Comment', () => {
  it('render /**/ if not passed in slot', () => {
    const wrapper = shallowMount(Comment)

    expect(wrapper.text()).toBe('/**/')
  })

  it('render slot message when passed in slot', () => {
    const wrapper = shallowMount(Comment, {
      slots: 'simple slot'
    })

    expect(wrapper.text()).toBe('/*simple slot*/')
  })

  it('render component when passed in slot', () => {
    const wrapper = shallowMount(Comment, {
      slots: {
        default: Comment
      }
    })

    expect(wrapper.text()).toBe('/*/**/*/')
  })
})
