import { mount } from '@vue/test-utils'
import Register from "@/components/Register";
import Table from "@/components/Table";

module.export = describe("Register.vue", () => {
  const wrapper = mount(Register);
  it("Register form should has firstName", () => {
    
    expect(wrapper.find({ ref: "firstName" }).exists()).toBe(true)
  });
  it("firstName should be equal macus", () => {
      const firstNameInput = wrapper.find({ ref: "firstName" });
      firstNameInput.setValue("macus");
      expect(wrapper.vm.user.firstName).toBe('macus')
  });
  it("lastName should be equal goodboy", () => {
      const lastNameInput = wrapper.find({ ref: "lastName" });
      lastNameInput.setValue("goodboy");
      expect(wrapper.vm.user.lastName).toBe("goodboy");
  });
  it("Sex should be selected M ", () => {
      const select = wrapper.find({ ref: "sex" });
      select.setValue("M");
      expect(wrapper.vm.user.sex).toBe("M");
  });
  it("Full case fullName should be equal 'macus goodboy; sexual : M'", () => {
      const firstNameInput = wrapper.find({ ref: "firstName" });
      firstNameInput.setValue("macus");
      const lastNameInput = wrapper.find({ ref: "lastName" });
      lastNameInput.setValue("goodboy");
      const select = wrapper.find({ ref: "sex" });
      select.setValue("M");
      wrapper.find('button').trigger('click')
      expect(wrapper.vm.fullName).toBe("macus goodboy; sexual : M");
  });
  it("Full case data.users should be Array data.users.firstName should be 'macus' in index[2]", () => {
      const firstNameInput = wrapper.find({ ref: "firstName" });
      firstNameInput.setValue("macus");
      const lastNameInput = wrapper.find({ ref: "lastName" });
      lastNameInput.setValue("goodboy");
      const select = wrapper.find({ ref: "sex" });
      select.setValue("M");
      wrapper.find('button').trigger('click')
      expect(Array.isArray(wrapper.vm.$data.users)).toBe(true);
      expect(wrapper.vm.$data.users[2].firstName).toBe('macus');
      expect(wrapper.vm.$data.users[2].lastName).toBe('goodboy');
  });
});


module.export = describe("Table Component", () => {
  it("Table Should be has props data is array of user object '", () => {
    const users = [{ firstName: "BB", lastName: "bbb" }, { firstName: "CC", lastName: "ccc" }];
    const wrappers = mount(Table, { propsData: { dataTable: users } });
    for (let index = 0; index < users.length; index++) {
      expect(wrappers.props().dataTable[index].firstName).toBe(users[index].firstName);
      expect(wrappers.vm.$props.dataTable[index].lastName).toBe(users[index].lastName);
    }
  });
});