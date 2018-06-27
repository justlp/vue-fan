import { mount, createLocalVue } from '@vue/test-utils'
import ElementUI from 'element-ui';
import CommentNoEmpty from '../src/components/rule-comment/CommentNoEmpty'

const localVue = createLocalVue();
localVue.use(ElementUI);

describe('CommentNoEmpty', () => {
  it('render success/error code snippets if emptyNoSpace checked true', () => {
    const wrapper = mount(CommentNoEmpty, { localVue })

    wrapper.findAll('.el-radio-button').at(0).trigger('click')

    expect(wrapper.find({ ref: 'emptyNoSpace' }).classes()).toContain('code-snippet--success')
    expect(wrapper.find({ ref: 'emptyIncludeSpace' }).classes()).toContain('code-snippet--success')
    expect(wrapper.find({ ref: 'emptyMultyline' }).classes()).toContain('code-snippet--success')
    expect(wrapper.find({ ref: 'commentIncludeSpace' }).classes()).toContain('code-snippet--error')
    expect(wrapper.find({ ref: 'commentMultyline' }).classes()).toContain('code-snippet--error')
  })

  it('render success/error code snippets if emptyNoSpace checked false', () => {
    const wrapper = mount(CommentNoEmpty, { localVue })

    wrapper.findAll('.el-radio-button').at(1).trigger('click')

    expect(wrapper.find({ ref: 'emptyNoSpace' }).classes()).toContain('code-snippet--success')
    expect(wrapper.find({ ref: 'emptyIncludeSpace' }).classes()).toContain('code-snippet--success')
    expect(wrapper.find({ ref: 'emptyMultyline' }).classes()).toContain('code-snippet--success')
    expect(wrapper.find({ ref: 'commentIncludeSpace' }).classes()).toContain('code-snippet--success')
    expect(wrapper.find({ ref: 'commentMultyline' }).classes()).toContain('code-snippet--success')
  })

  it('render default code snippets if emptyNoSpace checked disable', () => {
    const wrapper = mount(CommentNoEmpty, { localVue })

    wrapper.findAll('.el-radio-button').at(2).trigger('click')

    expect(wrapper.find({ ref: 'emptyNoSpace' }).classes()).toContain('code-snippet--info')
    expect(wrapper.find({ ref: 'emptyIncludeSpace' }).classes()).toContain('code-snippet--info')
    expect(wrapper.find({ ref: 'emptyMultyline' }).classes()).toContain('code-snippet--info')
    expect(wrapper.find({ ref: 'commentIncludeSpace' }).classes()).toContain('code-snippet--info')
    expect(wrapper.find({ ref: 'commentMultyline' }).classes()).toContain('code-snippet--info')
  })
})
