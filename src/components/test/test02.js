import { mount } from "@vue/test-utils";

const Components = {
    template: '<div>{{ foo() }}{{ bar() }}{{ baz() }}</div>',
    methods: {
        foo() {
            return 'a'
        },
        bar() {
            return 'b'
        }
    }
}
const options = {
    methods: {
        bar() {
            return 'B'
        },
        baz() {
            return 'C'
        }
    }
}
module.export = describe("Component 02", () => {
    it("renders a div", () => {
        const wrapper = mount(Components, options);
        expect(wrapper.text()).toBe("aBC");
    });
});