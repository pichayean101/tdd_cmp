import { shallowMount } from '@vue/test-utils'
import Counter from "./../Counter.vue";

describe('Counter.vue', () => {
    it('increments count when button is clicked', () => {
        const wrapper = shallowMount(Counter)
        wrapper.find('button').trigger('click')
        expect(wrapper.vm.count).toBe(1)
    })
})
