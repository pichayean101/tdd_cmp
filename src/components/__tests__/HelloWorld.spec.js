import { mount } from '@vue/test-utils'
import Component from './../HelloWorld.vue'

describe('Component', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(Component)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
test('renders correctly', () => {
    const wrapper = mount(Component)
    expect(wrapper.element).toMatchSnapshot()
})