import { mount } from '@vue/test-utils'
import Component from "./../../src/components/Wrapper_Classes.vue";

module.export = describe("Wrapper_Classes.vue", () => {
    it("Wrapper_Classes should has classes test01", () => {
      const wrapper = mount(Component);
      expect(wrapper.classes()).toContain("test01");
    });
    it("Wrapper_Classes should has id test02", () => {
      const wrapper = mount(Component);
      expect(wrapper.attributes().id).toBe("test02");
    });
    it("Wrapper_Classes should has h1 tag", () => {
      const wrapper = mount(Component);
      expect(wrapper.contains("h1")).toBe(true);
      expect(wrapper.contains("#test03")).toBe(true);
    });
    it("Wrapper_Classes should has h1 tag", () => {
        const wrapper = mount(Component);
        const buttonWrapper = wrapper.find({ ref: 'myButton' })
        buttonWrapper.trigger('click')
    });
});