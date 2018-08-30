import { mount } from '@vue/test-utils'
import Register from "@/components/Register";
import Table from "@/components/Table";
import sinon from "sinon";

module.export = describe("Register.vue Component", () => {
  const wrapper = mount(Register);
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

  it("ค้นหาปุ่ม เมื่อกดแล้วต้องไปเรียก methods save()", () => {
    const wrapper = mount(Register);
    const clickMethodStub = sinon.stub();

    wrapper.setMethods({ save: clickMethodStub });
    wrapper.find("button").trigger("click");
    expect(clickMethodStub.called).toBe(true);
  });

  it("กรอกข้อมูล และกดปุ่ม แล้ว data.users should be Array data.users.firstName should be 'macus' in index[2]", () => {
    const firstNameInput = wrapper.find({ ref: "firstName" });
    firstNameInput.setValue("macus");

    const lastNameInput = wrapper.find({ ref: "lastName" });
    lastNameInput.setValue("goodboy");

    const select = wrapper.find({ ref: "sex" });
    select.setValue("M");

    wrapper.find("button").trigger("click");
    expect(Array.isArray(wrapper.vm.$data.users)).toBe(true);
    expect(wrapper.vm.$data.users[2].firstName).toBe("macus");
    expect(wrapper.vm.$data.users[2].lastName).toBe("goodboy");
  });
  
  describe("ทดสอบ Table Component", () => {
    it("เรียกใช้ Table Component พร้อมส่ง propsData เข้าไป ผลลัพธ์ใน Table Componentต้องได้ตามที่ส่งเข้าไป'", () => {
      const users = [{ firstName: "AA", lastName: "aaa" }, { firstName: "BB", lastName: "bbb" }];
      const wrappers = mount(Table, { propsData: { dataTable: users } });
      for (let index = 0; index < users.length; index++) {
        expect(wrappers.props().dataTable[index].firstName).toBe(users[index].firstName);
        expect(wrappers.vm.$props.dataTable[index].lastName).toBe(users[index].lastName);
      }
    });
  });

});