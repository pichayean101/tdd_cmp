import { mount } from '@vue/test-utils'
import Component from "@/components/HelloWorld";
module.export = describe("HelloWorld.vue", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Component);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it("renders a div", () => {
    const wrapper = mount(Component);
    expect(wrapper.contains("ul")).toBe(true);
  });
});
// test('renders correctly', () => {
//     const wrapper = mount(Component)
//     expect(wrapper.element).toMatchSnapshot()
// })