import React from 'react';
import { shallow } from 'enzyme';
//import and test only the exported not-conencted Wallet the test without redux
import { Wallet}  from './Wallet';


describe('Wallet', () => {
  const props = { balance: 20 };
  const wallet = shallow(<Wallet {...props}/>);

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('displays the balance from props', () => {
    //find balance using .find() + classname of h3 node
    //use enzyme .text() to examine text of h3 node
    //.text() will render a string of `balance`
    expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');

  });
});

  