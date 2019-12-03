import { shallowMount } from "@vue/test-utils";
import CreateDict from "@/internal/containers/Dialogue/CreateDict";


describe("CreateDict.vue", () => {
  const props = {
    paragraph: "new message",
  }

  const makeWrapper = () => {
    const wrapper = shallowMount(CreateDict, {
      propsData: props,
    });
    return wrapper
  }
  it("render correctly", () => {
    const wrapper = makeWrapper()
    expect(wrapper.exists()).toBe(true);
  });
});
