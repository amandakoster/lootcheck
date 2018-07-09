import balanceReducer from './balance';
import * as constants from '../actions/constants';
import { setBalance } from '../actions/balance';

describe('balanceReducer', () => {
  it('sets a balance', () => {
    const balance = 10;
    expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
    .toEqual(balance);
  });

  it('deposits into the balance', () => {
    const deposit = 10;
    const initialState = 5;
    expect(balanceReducer(initialState, actions.deposit(deposit)))
      .toEqual(initialState + deposit);
  });

  // it('withdraws from the balance', () => {
  //   const withdraw = 10;
  //   const initialState = 20;
  //   expect(balanceReducer(initialState, { type: constants.WITHRAW, withdraw }))
  //     .toEqual(initialState - withdraw );
  // })
});
