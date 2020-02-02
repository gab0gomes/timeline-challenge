import { shallowMount } from '@vue/test-utils';
import Table from '../Table.vue';


import fieldsConfig from '../../configs/timelineTable';

const data = [
  {
    price: 'R$ 100,00',
    product: 'Camisa Azul',
  },
  {
    price: 'R$ 150,00',
    product: 'Calça Rosa',
  },
];

describe('Table.vue', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      fields: fieldsConfig.fields,
      data,
    };

    wrapper = shallowMount(Table, {
      propsData: { ...props },
    });
  });


  test('renders IconAndText correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders one <th> for each field', () => {
    expect(wrapper.findAll('th').length).toBe(2);
  });

  test('renders one <td> for each field data', () => {
    expect(wrapper.findAll('td').length).toBe(4);
  });

  test('put border-bottom in each tr except in the last one', () => {
    expect(wrapper.findAll('.border-bottom').length).toBe(2); // tr header + tr row

    const trs = wrapper.findAll('tr');
    expect(trs.at(trs.length - 1).classes())
      .not.toContain('border-bottom'); // tr header + tr row
  });
});
