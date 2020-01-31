import { shallowMount, createLocalVue } from '@vue/test-utils';
import SvgIcon from 'vue-svgicon';

import IconAndText from '../IconAndText.vue';

const localVue = createLocalVue();
localVue.use(SvgIcon, {
  tagName: 'svgicon',
});

describe('IconAndText.vue', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      alt: 'dummy',
      icon: 'calendar',
      text: '11/11/1990',
    };

    wrapper = shallowMount(IconAndText, {
      propsData: { ...props },
      localVue,
    });
  });


  test('renders IconAndText correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
