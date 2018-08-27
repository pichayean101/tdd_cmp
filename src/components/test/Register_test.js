import { mount } from '@vue/test-utils'
import Register from "./../Register";

module.export = describe("Register.vue", () => {
  it("Register form should has firstName", () => {
    const wrapper = mount(Register);
    expect(wrapper.find({ ref: "firstName" }).exists()).toBe(true)
  });
  it("firstName should be equal macus", () => {
    const wrapper = mount(Register);
      const firstNameInput = wrapper.find({ ref: "firstName" });
      firstNameInput.setValue("macus");
      expect(wrapper.vm.user.firstName).toBe('macus')
  });
  it("lastName should be equal goodboy", () => {
    const wrapper = mount(Register);
      const lastNameInput = wrapper.find({ ref: "lastName" });
      lastNameInput.setValue("goodboy");
      expect(wrapper.vm.user.lastName).toBe("goodboy");
  });
  it("Sex should be selected M", () => {
    const wrapper = mount(Register);
      const select = wrapper.find({ ref: "sex" });
      select.setValue("M");
      expect(wrapper.vm.user.sex).toBe("M");
  });
  it("Full case fullName should be equal 'macus goodboy; sexual : M'", () => {
      const wrapper = mount(Register);
      const firstNameInput = wrapper.find({ ref: "firstName" });
      firstNameInput.setValue("macus");
      const lastNameInput = wrapper.find({ ref: "lastName" });
      lastNameInput.setValue("goodboy");
      const select = wrapper.find({ ref: "sex" });
      select.setValue("M");
      wrapper.find('button').trigger('click')

      expect(wrapper.vm.fullName).toBe("macus goodboy; sexual : M");
  });
});