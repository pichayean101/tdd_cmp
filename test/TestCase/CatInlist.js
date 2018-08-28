import Vue from "vue";
import { mount } from "vue-test-utils";
import App from "@/App.vue";
// import MessageList from "./../../src/components/MessageList.vue";
import MessageList from "@/components/MessageList.vue";

describe("Cat in List expect data() by Simple Way", () => {
    let cmp, vm;
    beforeEach(() => {
        cmp = Vue.extend(App); // Create a copy of the original component
        vm = new cmp({
            data: {
                // Replace data value with this fake data
                messages: ["Cats"]
            }
        }).$mount(); // Instances and mounts the component
    });

    it('equals messages to ["Cats"]', () => {
        expect(vm.messages).toEqual(["Cats"]);
    });

    const createCmp = propsData => mount(MessageList, { propsData });

    describe("Properties", () => {
        it("has a message property", () => {
            cmp = createCmp({ message: "hey" });
            expect(cmp.props("message", "hey")).toBeTruthy();
        });
        it("1 + 2 should be equal 3", () => {
            const wrapper = mount(MessageList);
            expect(wrapper.vm.calculate(1, 2)).toEqual(3);
        });
    });

});

// describe("00956", () => {
//   const localVue = createLocalVue();
//   localVue.use(Vuex);

//   // mock api data
//   jest.mock("@/data/PersonData", () => {
//     return {
//       getOwnerData() {
//         return Promise.resolve({ email: "test@mail.ch" });
//       }
//     };
//   });

//   test("data is loaded and rendered", async () => {
//     const store = createNamespacedStore("@/store/modules/Profile", "Profile");
//     const wrapper = mount(Profile, {
//       store,
//       localVue,
//       mocks: {
//         $t: jest.fn()
//       }
//     });

//     await wrapper.vm.$nextTick();
//     // this fails:
//     expect(wrapper.find({ ref: "emailField" }).text()).toBe("test@mail.ch");
//     // this passes:
//     setTimeout(() => {
//       expect(wrapper.find({ ref: "emailField" }).text()).toBe("test@mail.ch");
//     }, 10);
//   });
// });
