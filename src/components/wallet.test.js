import React from 'react';
import { shallow } from 'enzyme';
//import and test only the exported not-conencted Wallet the test without redux
import { Wallet}  from './Wallet';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



describe('Wallet', () => {
  const wallet = shallow(<Wallet />);

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });
});

