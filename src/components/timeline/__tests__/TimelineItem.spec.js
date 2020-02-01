import { shallowMount } from '@vue/test-utils';

import TimelineItem from '../TimelineItem.vue';

describe('TimelineItem.vue', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      status: 'success',
    };

    wrapper = shallowMount(TimelineItem, {
      propsData: { ...props },
      slots: {
        header: '<h5>Dummy header</h5>',
        default: '<div class="fake-info">Fake text</div>',
      },
    });
  });

  test('header slot is inserted in a .timeline-item .header element', () => {
    const list = wrapper.find('.timeline-item .header');

    expect(list.findAll('h5').length).toBe(1);
  });

  test('default slot is inserted in a .timeline-item .content element', () => {
    const list = wrapper.find('.timeline-item .content');

    expect(list.findAll('.fake-info').length).toBe(1);
  });

  test('put css icon class according to the status prop', () => {
    let list = wrapper.findAll('.timeline-item.success');

    expect(list.length).toBe(1);

    wrapper.setProps({ status: 'anything' });

    list = wrapper.findAll('.timeline-item.none');
    expect(list.length).toBe(1);
  });

  test('renders TimelineItem correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
