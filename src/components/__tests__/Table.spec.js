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
});
